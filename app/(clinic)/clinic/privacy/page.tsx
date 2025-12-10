export const metadata = {
  title: "Privacy Policy | ClinicFlow",
  description: "How we protect your data and comply with GDPR.",
};
export default function Privacy() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-[#1d1d1f] mb-2">
          Privacy Policy
        </h1>
        <p className="text-slate-500 mb-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-12 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">
              1. Introduction
            </h2>
            <p>
              ClinicFlow ("we", "us", or "our") respects your privacy and is
              committed to protecting your personal data. This privacy policy
              will inform you as to how we look after your personal data when
              you visit our website (regardless of where you visit it from) and
              tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">
              2. The Data We Collect
            </h2>
            <p className="mb-4">
              We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-brand-500">
              <li>
                <strong>Identity Data:</strong> includes first name, last name,
                and title.
              </li>
              <li>
                <strong>Contact Data:</strong> includes email address and
                telephone numbers.
              </li>
              <li>
                <strong>Technical Data:</strong> includes internet protocol (IP)
                address, browser type and version, time zone setting and
                location, browser plug-in types and versions, operating system
                and platform, and other technology on the devices you use to
                access this website.
              </li>
              <li>
                <strong>Usage Data:</strong> includes information about how you
                use our website and services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">
              3. How We Use Your Data
            </h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-brand-500">
              <li>
                Where we need to perform the contract we are about to enter into
                or have entered into with you.
              </li>
              <li>
                Where it is necessary for our legitimate interests (or those of
                a third party) and your interests and fundamental rights do not
                override those interests.
              </li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">
              4. Data Security
            </h2>
            <p>
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used or accessed in an
              unauthorized way, altered or disclosed. In addition, we limit
              access to your personal data to those employees, agents,
              contractors and other third parties who have a business need to
              know.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">
              5. Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy or our privacy
              practices, please contact us via the contact form on our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
