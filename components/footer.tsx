import Image from "next/image";
import Link from "next/link";
import { GithubIcon, Linkedin01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Container } from "@/components/layout/container";
import { site } from "@/lib/site";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "LinkedIn", href: site.profiles.linkedin, icon: Linkedin01Icon },
  { label: "GitHub", href: site.profiles.github, icon: GithubIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#100e11]">
      <Container className="pt-10 pb-7 sm:pt-14 sm:pb-8">
        <div className="grid items-start gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex w-fit items-center gap-3 font-heading text-xl font-bold tracking-tight" aria-label="Muiz Rexhepi home">
              <Image src="/brand/mr-dark.svg" alt="" width={40} height={40} />
              {site.name}
            </Link>
            <p className="mt-4 max-w-[29ch] text-sm leading-relaxed text-muted-foreground">
              Independent software development for businesses in North Macedonia and internationally.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm font-semibold text-foreground">Explore</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-muted-foreground sm:max-w-[15rem]">
              {navigation.map(({ label, href }) => (
                <li key={href}><Link href={href} className="hover:text-foreground">{label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 lg:justify-self-end">
            <p className="text-sm font-semibold text-foreground">Get in touch</p>
            <a href={`mailto:${site.email}`} className="mt-3 inline-flex text-sm text-primary underline-offset-4 [overflow-wrap:anywhere] hover:underline">{site.email}</a>
            <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {socials.map(({ label, href, icon }) => (
                <li key={href}>
                  <a href={href} className="inline-flex items-center gap-1.5 hover:text-foreground">
                    <HugeiconsIcon icon={icon} size={17} /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:mt-10">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
