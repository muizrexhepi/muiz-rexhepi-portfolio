import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata("/privacy", "Privacy Policy", "How Muiz Rexhepi handles the information you share through the website and project inquiry form.");

const lastUpdated = "November 16, 2026";

export default function PrivacyPage() {
  return (
    <Section spacing="sm" className="pb-14 pt-10 sm:pb-20 sm:pt-14 lg:pt-16">
      <Container>
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 sm:p-12">
          <Heading as="h1" variant="section">
            Privacy Policy.
          </Heading>

          <Text variant="body" className="mt-4">
            Last updated: {lastUpdated}
          </Text>

          <div className="mt-10 space-y-10">
            <LegalSection title="1. Introduction">
              <p>
                {site.name} operates {site.domain} and provides software
                design, development, and strategy services. This Privacy Policy
                explains what information I collect, how I use it, and what
                choices you have.
              </p>

              <p>
                By using this website or submitting a contact form, you agree to
                the practices described in this Privacy Policy.
              </p>
            </LegalSection>

            <LegalSection title="2. Information I collect">
              <p>
                When you contact me through the website, I may collect the
                information you choose to provide, including:
              </p>

              <ul>
                <li>Your name</li>
                <li>Email address</li>
                <li>Company name</li>
                <li>Project type</li>
                <li>Budget range</li>
                <li>Project details or message content</li>
              </ul>

              <p>
                I may also receive basic technical information automatically,
                such as your IP address, browser type, device information,
                referring page, and general usage data.
              </p>
            </LegalSection>

            <LegalSection title="3. How I use your information">
              <p>I use the information I collect to:</p>

              <ul>
                <li>Respond to your project inquiry</li>
                <li>Understand your project goals and requirements</li>
                <li>Prepare scope, timelines, proposals, or next steps</li>
                <li>Communicate with you about services</li>
                <li>Improve the website and user experience</li>
                <li>Protect against spam, abuse, or unauthorized activity</li>
              </ul>

              <p>
                I do not sell your personal information to advertisers or data
                brokers.
              </p>
            </LegalSection>

            <LegalSection title="4. Contact form and email delivery">
              <p>
                When you submit the contact form, your message may be processed
                through third-party email infrastructure, including Resend, so
                I can receive and respond to your inquiry.
              </p>

              <p>
                Your information is used only for communication related to your
                inquiry, project discussion, or related business relationship.
              </p>
            </LegalSection>

            <LegalSection title="5. Service providers">
              <p>
                I may use trusted third-party providers to operate the website,
                host infrastructure, send emails, analyze website performance,
                or maintain security.
              </p>

              <p>
                These providers only receive the information necessary to
                perform their services and are expected to handle it securely.
              </p>
            </LegalSection>

            <LegalSection title="6. Cookies and analytics">
              <p>
                The website may use cookies or similar technologies to support
                basic functionality, improve performance, understand usage, or
                protect the site from abuse.
              </p>

              <p>
                You can control or disable cookies through your browser
                settings. Some parts of the website may not function properly if
                cookies are disabled.
              </p>
            </LegalSection>

            <LegalSection title="7. Data retention">
              <p>
                I keep inquiry and communication records for as long as needed
                to respond to you, manage potential or active projects, comply
                with legal obligations, resolve disputes, and maintain business
                records.
              </p>

              <p>
                You may request deletion of your personal information by
                contacting me, unless I am required to keep it for legitimate
                business or legal reasons.
              </p>
            </LegalSection>

            <LegalSection title="8. Your rights">
              <p>
                Depending on where you live, you may have rights to access,
                correct, delete, restrict, or object to the processing of your
                personal information.
              </p>

              <p>
                To make a request, contact me at{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>. I may
                need to verify your identity before completing certain requests.
              </p>
            </LegalSection>

            <LegalSection title="9. Security">
              <p>
                I use reasonable technical and organizational measures to
                protect your information. However, no method of transmission or
                storage is completely secure, and I cannot guarantee absolute
                security.
              </p>
            </LegalSection>

            <LegalSection title="10. International users">
              <p>
                If you access the website from outside the country where I
                operate, your information may be processed in countries with
                different data protection laws.
              </p>

              <p>
                By using the website or submitting information, you understand
                that your information may be processed where my service
                providers operate.
              </p>
            </LegalSection>

            <LegalSection title="11. Changes to this Privacy Policy">
              <p>
                I may update this Privacy Policy from time to time. When I do,
                I will update the “Last updated” date at the top of this page.
              </p>
            </LegalSection>

            <LegalSection title="12. Contact">
              <p>
                For questions about this Privacy Policy or your personal
                information, contact me at:
              </p>

              <p>
                <strong>{site.name}</strong>
                <br />
                Email: <a href={`mailto:${site.email}`}>{site.email}</a>
                <br />
                Website: <a href={site.url}>{site.domain}</a>
              </p>
            </LegalSection>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border pt-8">
      <Heading as="h2" variant="subsection">
        {title}
      </Heading>

      <div className="mt-4 space-y-4 text-base leading-8 text-muted-foreground [&_a]:font-semibold [&_a]:text-primary [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}
