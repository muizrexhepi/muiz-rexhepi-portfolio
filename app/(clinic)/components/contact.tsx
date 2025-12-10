import React, { useState } from "react";
import {
  Send,
  Loader2,
  Lock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Get and validate form values
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const website = (formData.get("website") as string)?.trim();

    // Basic client-side validation
    if (!name || !email || !website) {
      setErrorMessage("Please fill in all fields");
      setFormState("error");
      return;
    }

    const payload = { name, email, website };

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.status === 409) {
        setErrorMessage(
          data.message ||
            "You've already requested an audit. We'll be in touch soon!"
        );
        setFormState("error");
        return;
      }

      if (res.status === 400) {
        setErrorMessage(
          data.error || "Please check your information and try again"
        );
        setFormState("error");
        return;
      }

      if (res.ok) {
        form.reset();
        setFormState("success");

        // Optional: Reset to idle after some time
        setTimeout(() => {
          setFormState("idle");
        }, 10000);
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-32 bg-white border-t border-slate-200">
      <div className="max-w-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Get your free clinic audit
          </h2>
          <p className="text-slate-500 text-lg">
            I'll personally look at your current website and send you a video
            showing 3 easy ways to get more patients.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 lg:p-10 shadow-2xl shadow-slate-200/50">
          {formState === "success" ? (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#1d1d1f] mb-2">
                Request Received!
              </h3>
              <p className="text-slate-500 mb-4">
                Thank you! Check your inbox for a confirmation email.
              </p>
              <p className="text-slate-600 font-medium mb-8">
                I'll send your personalized video audit within 24 hours.
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="text-brand-600 font-bold hover:text-brand-700 underline underline-offset-4 transition-colors"
              >
                Send another request
              </button>
            </div>
          ) : (
            <>
              {formState === "error" && errorMessage && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-900">
                      {errorMessage}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-[#1d1d1f] mb-2"
                  >
                    Doctor / Clinic Owner Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    maxLength={100}
                    disabled={formState === "submitting"}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#1d1d1f] focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="e.g. Dr. Sarah Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-[#1d1d1f] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={formState === "submitting"}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#1d1d1f] focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="sarah@clinic.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-bold text-[#1d1d1f] mb-2"
                  >
                    Current Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    required
                    disabled={formState === "submitting"}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[#1d1d1f] focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="www.yourclinic.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-full shadow-lg shadow-brand-500/25 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 mt-4"
                >
                  {formState === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get Free Video Audit
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="pt-4 flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
                  <Lock className="w-3 h-3" />
                  <span>
                    Zero commitment. No automated bots. I personally review each
                    site.
                  </span>
                </div>
              </form>
            </>
          )}
        </div>

        <div className="mt-12 flex justify-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-slate-400" />
            <span className="text-sm font-medium text-slate-500">
              GDPR Compliant
            </span>
          </div>
          <div className="w-px h-5 bg-slate-300"></div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium text-slate-500">
              256-bit Encryption
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
