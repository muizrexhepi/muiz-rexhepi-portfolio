export const metadata = {
  title: "Terms of Service | ClinicFlow",
  description:
    "Review the terms and conditions for using ClinicFlow's website and services.",
};
export default function Terms() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-[#1d1d1f] mb-2">
          Terms of Service
        </h1>
        <p className="text-slate-500 mb-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-12 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing our website and using our services, you agree to be
              bound by these Terms of Service. If you do not agree to abide by
              the terms of this Agreement, you are not authorized to use or
              access the website or its services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">
              2. Services Offered
            </h2>
            <p>
              ClinicFlow provides web design, development, and digital marketing
              services specifically tailored for dental clinics. The specific
              deliverables, timelines, and costs will be detailed in a separate
              service agreement or proposal provided to each client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">
              3. Intellectual Property
            </h2>
            <p>
              Unless otherwise indicated, the Site and services are our
              proprietary property and all source code, databases,
              functionality, software, website designs, audio, video, text,
              photographs, and graphics on the Site (collectively, the
              "Content") and the trademarks, service marks, and logos contained
              therein (the "Marks") are owned or controlled by us or licensed to
              us, and are protected by copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">
              4. User Representations
            </h2>
            <p className="mb-4">
              By using the Site, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-brand-500">
              <li>
                All registration information you submit will be true, accurate,
                current, and complete.
              </li>
              <li>
                You have the legal capacity and you agree to comply with these
                Terms of Service.
              </li>
              <li>
                You are not a minor in the jurisdiction in which you reside.
              </li>
              <li>
                You will not use the Site for any illegal or unauthorized
                purpose.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">
              5. Limitation of Liability
            </h2>
            <p>
              In no event will we or our directors, employees, or agents be
              liable to you or any third party for any direct, indirect,
              consequential, exemplary, incidental, special, or punitive
              damages, including lost profit, lost revenue, loss of data, or
              other damages arising from your use of the site or our services,
              even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">
              6. Changes to Terms
            </h2>
            <p>
              We reserve the right, at our sole discretion, to make changes or
              modifications to these Terms of Service at any time and for any
              reason. We will alert you about any changes by updating the "Last
              updated" date of these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
