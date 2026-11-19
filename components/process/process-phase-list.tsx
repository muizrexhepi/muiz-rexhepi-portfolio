import { Heading, Text } from "@/components/ui/typography";
import { processPhases } from "@/lib/process";
import { cn } from "@/lib/utils";

export function ProcessPhaseList({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className={cn("grid gap-8", detailed && "gap-14 sm:gap-18 lg:gap-22")}>
      {processPhases.map((phase, index) => (
        <li key={phase.title} className={cn(detailed && "grid gap-7 lg:grid-cols-[.75fr_1.25fr] lg:gap-16")}>
          <div className="flex items-start gap-4">
            <span aria-hidden="true" className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--yellow)]/50 font-heading text-xs font-semibold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <Heading as={detailed ? "h2" : "h3"} variant={detailed ? "subsection" : "card"}>
                {phase.title}
              </Heading>
              <Text variant={detailed ? "body" : "body-sm"} className="mt-3 max-w-[42ch]">
                {phase.summary}
              </Text>
            </div>
          </div>
          {detailed && (
            <div>
              <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
                {phase.steps.map((step) => (
                  <div key={step.title}>
                    <Heading as="h3" variant="small">{step.title}</Heading>
                    <Text className="mt-3">{step.description}</Text>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-secondary/55 px-5 py-4 sm:mt-7">
                <p className="text-xs font-medium text-muted-foreground">You’ll have</p>
                <p className="mt-2 text-sm leading-6 font-medium">{phase.outcome}</p>
              </div>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
