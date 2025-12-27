"use client";

import { Github, Linkedin, Mail } from "lucide-react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socials = [
  { icon: Github, href: "https://github.com/muizrexhepi", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/muiz-rexhepi",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:mail@muizrexhepi.com", label: "Email" },
  { icon: XIcon, href: "https://x.com/muiz_rexhepi", label: "X" },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-0.5">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg"
          aria-label={social.label}
        >
          <social.icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
