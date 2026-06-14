import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "./_components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://muizrexhepi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muiz Rexhepi | React Native & Full-Stack Developer",
    template: "%s | Muiz Rexhepi",
  },
  description:
    "React Native and Full-Stack Developer from North Macedonia building production mobile and web apps with Expo, Next.js, TypeScript, AI integrations, subscriptions, payments and analytics.",
  keywords: [
    "Muiz Rexhepi",
    "React Native Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "Expo Developer",
    "TypeScript Developer",
    "Mobile App Developer",
    "AI App Developer",
    "North Macedonia",
    "Tetovo",
  ],
  authors: [{ name: "Muiz Rexhepi", url: siteUrl }],
  creator: "Muiz Rexhepi",
  publisher: "Muiz Rexhepi",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Muiz Rexhepi | React Native & Full-Stack Developer",
    description:
      "Production mobile and web apps with Expo, Next.js, TypeScript, AI integrations, subscriptions, payments and analytics.",
    url: siteUrl,
    siteName: "Muiz Rexhepi",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muiz Rexhepi - React Native and Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muiz Rexhepi | React Native & Full-Stack Developer",
    description:
      "Production mobile and web apps with Expo, Next.js, TypeScript and AI integrations.",
    creator: "@muiz_rexhepi",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d0f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
