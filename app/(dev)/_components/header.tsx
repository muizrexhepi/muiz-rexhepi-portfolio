import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { SocialLinks } from "./soical-links";

export function Header() {
  return (
    <header className="mb-8 md:mb-12">
      <div className="mb-4 flex items-start justify-between gap-6">
        <div>
          <Link
            href="/"
            className="block text-xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80 md:text-2xl"
          >
            Muiz Rexhepi
          </Link>

          <p className="mt-1 text-sm font-medium text-muted-foreground">
            React Native & Full-Stack Developer
          </p>
        </div>

        <ThemeToggle />
      </div>

      <p className="max-w-xl text-sm leading-6 text-muted-foreground md:text-[15px] md:leading-7">
        I build and ship production mobile and web apps with{" "}
        <span className="font-medium text-foreground">Expo</span>,{" "}
        <span className="font-medium text-foreground">Next.js</span>,{" "}
        <span className="font-medium text-foreground">TypeScript</span> and
        modern backend tools. My work includes App Store apps, AI features,
        subscriptions, payments, analytics, dashboards and client-facing
        platforms.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <SocialLinks />

        <span className="hidden h-4 w-px bg-border sm:block" />

        <a
          href="mailto:mail@muizrexhepi.com"
          className="text-xs font-medium text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
        >
          available for React Native / Full-Stack roles
        </a>
      </div>
    </header>
  );
}
