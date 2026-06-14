export function EducationSection() {
  return (
    <section className="space-y-12">
      <div>
        <div className="mb-6 md:mb-8">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">
            Education
          </h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Academic background, thesis work and languages.
          </p>
        </div>

        <article className="border-t border-border pt-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-base font-semibold tracking-tight">
                University of Tetovo
              </h3>
              <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                BSc in Computer Science
              </p>
            </div>

            <p className="text-xs tabular-nums text-muted-foreground">
              2022 — 2025
            </p>
          </div>

          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Studied computer science with a focus on software development, web
            applications, databases, frontend engineering and full-stack product
            implementation.
          </p>
        </article>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold tracking-tight md:text-xl">
          Diploma thesis
        </h2>

        <article className="border-t border-border pt-6">
          <h3 className="text-base font-semibold tracking-tight">
            Multilingual online marketplace for the local market
          </h3>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Built a multilingual marketplace platform focused on local market
            needs, listing creation, categories, search, responsive UI and
            language support.
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Appwrite",
              "i18n",
              "Marketplace UI",
            ].map((item) => (
              <span
                key={item}
                className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold tracking-tight md:text-xl">
          Technical focus
        </h2>

        <div className="space-y-5 border-t border-border pt-6">
          <div>
            <h3 className="text-sm font-semibold tracking-tight">
              Mobile apps
            </h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              React Native, Expo, subscriptions, App Store releases, onboarding,
              paywalls, analytics and native-style product flows.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-tight">
              Web platforms
            </h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Next.js, TypeScript, dashboards, booking systems, marketplaces,
              e-commerce websites, CMS systems and SEO-focused pages.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-tight">
              AI products
            </h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              AI parsing, voice transcription, feedback systems, structured
              outputs and user-facing AI workflows that are useful in production
              apps.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold tracking-tight md:text-xl">
          Languages
        </h2>

        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span className="rounded-md bg-muted px-2 py-1">
            Albanian · Native
          </span>
          <span className="rounded-md bg-muted px-2 py-1">English · C1</span>
          <span className="rounded-md bg-muted px-2 py-1">Macedonian · B1</span>
          <span className="rounded-md bg-muted px-2 py-1">German · A2</span>
        </div>
      </div>
    </section>
  );
}
