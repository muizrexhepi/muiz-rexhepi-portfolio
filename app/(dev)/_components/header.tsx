import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { SocialLinks } from "./soical-links";

export function Header() {
  return (
    <header className="mb-6 md:mb-10">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <Link
          href="/"
          className="text-lg md:text-xl font-medium hover:opacity-80"
        >
          {"Hi, I'm Muiz Rexhepi"}
        </Link>
        <ThemeToggle />
      </div>
      <p className="text-muted-foreground leading-snug md:leading-relaxed text-xs md:text-sm mb-3 md:mb-4">
        Fullstack Developer with experience building web and mobile apps using{" "}
        <span className="text-foreground font-medium">React</span>,{" "}
        <span className="text-foreground font-medium">Next.js</span>,{" "}
        <span className="text-foreground font-medium">React Native</span>, and{" "}
        <span className="text-foreground font-medium">TypeScript</span>. Based
        in North Macedonia.
      </p>
      <SocialLinks />
    </header>
  );
}
