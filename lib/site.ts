import type { Metadata } from "next";

export const site = {
  name: "Muiz Rexhepi",
  domain: "muizrexhepi.com",
  url: "https://www.muizrexhepi.com",
  email: "mail@muizrexhepi.com",
  locale: "en",
  socialLocale: "en_US",
  description:
    "Independent full-stack software developer building business websites, booking platforms, mobile apps, and custom software in North Macedonia and internationally.",
  profiles: {
    linkedin: "https://www.linkedin.com/in/muiz-rexhepi/",
    github: "https://github.com/muizrexhepi",
  },
} as const;

export function pageMetadata(
  path: string,
  title: string,
  description: string,
  image?: { url: string; alt: string; width?: number; height?: number },
): Metadata {
  const socialTitle = path === "/" ? title : `${title} | ${site.name}`;
  const images = [image ?? { url: "/brand/social.png", alt: "Muiz Rexhepi, independent software developer", width: 1200, height: 630 }];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: site.name,
      locale: site.socialLocale,
      type: "website",
      images,
    },
    twitter: { card: "summary_large_image", title: socialTitle, description, images },
  };
}
