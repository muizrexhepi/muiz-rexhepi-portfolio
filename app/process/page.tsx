import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/layout/page-intro";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { processSteps } from "@/lib/process";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "/process",
  "Development Process",
  "See how Muiz Rexhepi scopes, designs, builds, and launches custom software and websites.",
);

export default function ProcessPage() {
  return (
    <>
      <Section spacing="sm" className="border-b border-border">
        <Container>
          <PageIntro
            title="From first conversation to launch."
            description="You’ll see what’s taking shape, know which decisions need your input, and have time to try the important workflows before they go live."
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <span className="grid size-10 place-items-center rounded-full border border-primary/50 font-semibold text-primary">{index + 1}</span>
                <Heading as="h2" variant="subsection" className="mt-6">{step.title}</Heading>
                <Text className="mt-3">{step.description}</Text>
                <ul className="mt-5 space-y-2 border-t border-border pt-4 text-sm text-muted-foreground">
                  {step.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
    </>
  );
}
