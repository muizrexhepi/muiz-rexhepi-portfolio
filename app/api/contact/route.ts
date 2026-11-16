import { createHash } from "node:crypto";
import { isIP } from "node:net";
import { Resend } from "resend";

import { budgetRanges, inquiryTypes, messageLimits } from "@/lib/contact";
import { site } from "@/lib/site";

const windowMs = 10 * 60 * 1000;
const maxBodyBytes = 32_768;
const attempts = new Map<string, { count: number; expires: number }>();

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return error("Please send your inquiry from the contact page.", 403);
  }

  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") {
    return error("Send the form as JSON.", 415);
  }

  const body = await readBody(request);
  if (body === "too-large") return error("This inquiry is too long to send.", 413);
  if (!body) return error("The inquiry could not be read.", 400);

  if (typeof body.website === "string" && body.website.trim()) {
    return Response.json({ success: true });
  }

  const name = singleLine(body.name, 120);
  const email = singleLine(body.email, 254).toLowerCase();
  const company = singleLine(body.company, 120);
  const projectType = singleLine(body.projectType, 120);
  const budget = singleLine(body.budget, 120);
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !/^[^\s@,<>;]+@[^\s@,<>;]+\.[^\s@,<>;]+$/.test(email)) {
    return error("Enter your name and a valid email address.", 400);
  }
  if (!inquiryTypes.some((option) => option === projectType) ||
      (budget && !budgetRanges.some((option) => option === budget))) {
    return error("Select a project type and a valid budget range.", 400);
  }
  if (message.length < messageLimits.min || message.length > messageLimits.max) {
    return error(`Enter a project description of ${messageLimits.min} to ${messageLimits.max} characters.`, 400);
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return error("The form is temporarily unavailable. Please email me directly.", 503);
  }

  if (!allowInquiry(request, email)) {
    return Response.json(
      { error: "Too many recent inquiries. Please wait a few minutes or email me directly." },
      { status: 429, headers: { "Retry-After": String(windowMs / 1000) } },
    );
  }

  const from = process.env.CONTACT_FROM_EMAIL?.trim() || site.email;
  const to = process.env.CONTACT_TO_EMAIL?.trim() || site.email;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Project type: ${projectType}`,
    `Budget: ${budget || "Not provided"}`,
    "",
    message,
  ].join("\n");
  const idempotencyKey = `portfolio-inquiry/${hash([from, to, text].join("\n"))}`;

  try {
    const { data, error: deliveryError } = await new Resend(apiKey).emails.send({
      from: `${site.name} <${from}>`,
      to,
      replyTo: email,
      subject: `New project inquiry · ${projectType}`,
      text,
    }, { idempotencyKey });

    if (!data?.id || deliveryError) {
      console.error("Contact email rejected:", deliveryError?.name);
      return error("Your inquiry could not be sent. Please try again or email me directly.", 502);
    }

    return Response.json({ success: true });
  } catch {
    console.error("Contact email request failed");
    return error("Your inquiry could not be sent. Please try again or email me directly.", 502);
  }
}

function isSameOrigin(request: Request) {
  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite === "cross-site") return false;
  if (fetchSite === "same-origin") return true;

  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    const parsed = new URL(origin);
    if (origin !== parsed.origin || !["http:", "https:"].includes(parsed.protocol)) return false;

    return origin === site.url ||
      origin === new URL(request.url).origin ||
      parsed.host === request.headers.get("host");
  } catch {
    return false;
  }
}

function error(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

function singleLine(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().replace(/[\r\n]+/g, " ").slice(0, maxLength) : "";
}

function hash(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function allowInquiry(request: Request, email: string) {
  const now = Date.now();
  for (const [key, attempt] of attempts) {
    if (attempt.expires <= now) attempts.delete(key);
  }

  const ip = process.env.VERCEL === "1"
    ? request.headers.get("x-vercel-forwarded-for")?.trim()
    : undefined;
  const limits = [
    { key: "all", limit: 40 },
    { key: `email:${hash(email)}`, limit: 4 },
  ];
  if (ip && isIP(ip)) limits.push({ key: `ip:${hash(ip)}`, limit: 10 });

  if (limits.some(({ key, limit }) => (attempts.get(key)?.count ?? 0) >= limit)) return false;
  for (const { key } of limits) {
    const entry = attempts.get(key);
    if (entry) entry.count += 1;
    else attempts.set(key, { count: 1, expires: now + windowMs });
  }
  return true;
}

async function readBody(request: Request): Promise<Record<string, unknown> | "too-large" | null> {
  if (Number(request.headers.get("content-length")) > maxBodyBytes) return "too-large";
  const reader = request.body?.getReader();
  if (!reader) return null;

  const decoder = new TextDecoder();
  let size = 0;
  let text = "";
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel().catch(() => undefined);
        return "too-large";
      }
      text += decoder.decode(value, { stream: true });
    }
    const value: unknown = JSON.parse(text + decoder.decode());
    return value && typeof value === "object" && !Array.isArray(value)
      ? value as Record<string, unknown>
      : null;
  } catch {
    return null;
  } finally {
    reader.releaseLock();
  }
}
