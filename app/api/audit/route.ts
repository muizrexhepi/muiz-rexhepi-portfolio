import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY!);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  {
    auth: { persistSession: false },
  }
);

// Input validation helper
function isValidUrl(url: string): boolean {
  if (!url || url.trim().length === 0) return false;

  // Just check if it looks like a domain (very basic check)
  // Accepts: example.com, sub.example.com, example.co.uk
  const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-_.]*\.[a-zA-Z]{2,}$/;

  let testUrl = url.trim().toLowerCase();
  // Remove protocol if present
  testUrl = testUrl.replace(/^https?:\/\//, "");
  // Remove www. if present
  testUrl = testUrl.replace(/^www\./, "");
  // Remove trailing slash
  testUrl = testUrl.replace(/\/$/, "");

  return domainRegex.test(testUrl);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Normalize URL for consistent comparison
function normalizeUrl(url: string | null | undefined): string {
  if (!url) return "";
  let normalized = url.toLowerCase().trim();
  // Remove protocol
  normalized = normalized.replace(/^https?:\/\//, "");
  // Remove www.
  normalized = normalized.replace(/^www\./, "");
  // Remove trailing slash
  normalized = normalized.replace(/\/$/, "");
  return normalized;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, website } = body;

    console.log("📥 Received request:", { name, email, website });

    // Validate inputs
    if (!name || !email || !website) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!isValidUrl(website)) {
      return NextResponse.json(
        { success: false, error: "Invalid website URL" },
        { status: 400 }
      );
    }

    // Normalize data
    const normalizedEmail = email.toLowerCase().trim();
    const normalizedWebsite = normalizeUrl(website);

    console.log("🔍 Checking for duplicates...", {
      normalizedEmail,
      normalizedWebsite,
    });

    // Check for duplicate by NORMALIZED website URL
    const { data: existingByWebsite, error: websiteCheckError } = await supabase
      .from("audit_requests")
      .select("id, website_url")
      .limit(1000) // Get all to check manually if needed
      .order("created_at", { ascending: false });

    if (websiteCheckError) {
      console.error("❌ Error checking website:", websiteCheckError);
    }

    // Manual check for website match (in case stored format differs)
    const isDuplicateWebsite = existingByWebsite?.some((record) => {
      const recordUrl = normalizeUrl(record.website_url);
      return recordUrl && recordUrl === normalizedWebsite;
    });

    console.log("🔎 Website check result:", {
      isDuplicateWebsite,
      existingCount: existingByWebsite?.length,
    });

    // Check for duplicate by email
    const { data: existingByEmail } = await supabase
      .from("audit_requests")
      .select("id, email")
      .eq("email", normalizedEmail)
      .maybeSingle();

    console.log("📧 Email check result:", {
      isDuplicateEmail: !!existingByEmail,
    });

    if (isDuplicateWebsite || existingByEmail) {
      console.log("⚠️ Duplicate found! Returning 409");
      return NextResponse.json(
        {
          success: false,
          reason: "duplicate",
          message:
            "You've already submitted a request. We'll be in touch soon!",
        },
        { status: 409 }
      );
    }

    console.log("✅ No duplicates found, inserting new request...");

    // Insert new request
    const { data: insertedData, error: insertError } = await supabase
      .from("audit_requests")
      .insert({
        name: name.trim(),
        email: normalizedEmail,
        website_url: normalizedWebsite,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (insertError) {
      console.error("❌ Supabase insert error:", insertError);
      return NextResponse.json(
        { success: false, error: "Failed to save request" },
        { status: 500 }
      );
    }

    console.log("✅ Request saved:", insertedData);

    // Send confirmation email to client
    try {
      await resend.emails.send({
        from: "Muiz at MedicalWebPro <audit@muizrexhepi.com>",
        to: normalizedEmail,
        replyTo: "007lazi@gmail.com",
        subject: "✓ Your Free Website Audit is On Its Way!",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1d1d1f; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Request Confirmed!</h1>
              </div>
              
              <div style="background: #ffffff; padding: 40px 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
                <p style="font-size: 16px; margin-bottom: 20px;">Hey ${name},</p>
                
                <p style="font-size: 16px; margin-bottom: 20px;">
                  Thanks for requesting a free audit for <strong>${website}</strong>!
                </p>
                
                <p style="font-size: 16px; margin-bottom: 20px;">
                  I'm going to personally review your website and record a custom video showing you:
                </p>
                
                <ul style="font-size: 16px; margin-bottom: 30px; padding-left: 20px;">
                  <li style="margin-bottom: 10px;">3 quick wins to attract more patients</li>
                  <li style="margin-bottom: 10px;">Design improvements that build trust</li>
                  <li style="margin-bottom: 10px;">SEO opportunities you're missing</li>
                </ul>
                
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #667eea;">
                  <p style="margin: 0; font-size: 15px; color: #475569;">
                    <strong>⏱️ Expect your video within 24 hours</strong><br>
                    I'll send it directly to this email address.
                  </p>
                </div>
                
                <p style="font-size: 16px; margin-bottom: 10px;">
                  Talk soon,<br>
                  <strong>Muiz Rexhepi</strong><br>
                  <span style="color: #64748b; font-size: 14px;">Healthcare Web Specialist</span>
                </p>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding: 20px; color: #94a3b8; font-size: 13px;">
                <p style="margin: 0;">Have questions? Just reply to this email.</p>
              </div>
            </body>
          </html>
        `,
      });
      console.log("✅ Client email sent");
    } catch (emailError) {
      console.error("❌ Client email error:", emailError);
    }

    // Send notification to you
    try {
      await resend.emails.send({
        from: "Audit Notifications <audit@muizrexhepi.com>",
        to: "007lazi@gmail.com",
        subject: `🔔 New Audit Request from ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1d1d1f; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: #0f172a; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
                <h2 style="color: white; margin: 0;">🎯 New Audit Request</h2>
              </div>
              
              <div style="background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 15px 0; font-weight: 600; width: 120px;">Name:</td>
                    <td style="padding: 15px 0;">${name}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 15px 0; font-weight: 600;">Email:</td>
                    <td style="padding: 15px 0;">
                      <a href="mailto:${normalizedEmail}" style="color: #667eea; text-decoration: none;">${normalizedEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 15px 0; font-weight: 600;">Website:</td>
                    <td style="padding: 15px 0;">
                      <a href="https://${normalizedWebsite}" 
                         target="_blank" 
                         style="color: #667eea; text-decoration: none;">
                        ${normalizedWebsite}
                      </a>
                    </td>
                  </tr>
                </table>
                
                <div style="margin-top: 30px; padding: 20px; background: #f1f5f9; border-radius: 8px; text-align: center;">
                  <a href="https://${normalizedWebsite}" 
                     target="_blank"
                     style="display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 6px; font-weight: 600;">
                    🔍 Review Website Now
                  </a>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 13px;">
                <p style="margin: 0;">Received: ${new Date().toLocaleString(
                  "en-US",
                  {
                    dateStyle: "full",
                    timeStyle: "short",
                  }
                )}</p>
              </div>
            </body>
          </html>
        `,
      });
      console.log("✅ Notification email sent");
    } catch (notificationError) {
      console.error("❌ Notification email error:", notificationError);
    }

    return NextResponse.json({
      success: true,
      message: "Request submitted successfully",
    });
  } catch (err) {
    console.error("❌ API route error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
