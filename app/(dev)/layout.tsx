// import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
// import "../globals.css";
// import { Navbar } from "@/components/navbar";
// import AnimatedBackground from "@/components/animated-gradient-background";
// import { LenisProvider } from "@/components/lenis-provider";

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
// });

// export const metadata: Metadata = {
//   title: "Muiz Rexhepi - Full-Stack Software Engineer",
//   description:
//     "Full-stack software engineer specializing in building reliable web applications and clean, maintainable code.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en">
//       <body className={`${poppins.variable} font-sans antialiased`}>
//         <LenisProvider>
//           <AnimatedBackground />
//           <Navbar />
//           {children}
//         </LenisProvider>
//       </body>
//     </html>
//   );
// }
import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "./_components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://muizrexhepi.com"),
  title: {
    default: "Muiz Rexhepi | Fullstack Developer",
    template: "%s | Muiz Rexhepi",
  },
  description:
    "Fullstack Developer specializing in React, Next.js, React Native, and TypeScript. Building high-performance web and mobile applications.",
  keywords: [
    "Muiz Rexhepi",
    "Fullstack Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "TypeScript",
    "Web Developer",
    "Mobile Developer",
    "North Macedonia",
    "Software Engineer",
  ],
  authors: [{ name: "Muiz Rexhepi", url: "https://muizrexhepi.com" }],
  creator: "Muiz Rexhepi",
  publisher: "Muiz Rexhepi",
  openGraph: {
    title: "Muiz Rexhepi | Fullstack Developer",
    description:
      "Fullstack Developer specializing in React, Next.js, React Native, and TypeScript.",
    url: "https://muizrexhepi.com",
    siteName: "Muiz Rexhepi",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muiz Rexhepi | Fullstack Developer",
    description:
      "Fullstack Developer specializing in React, Next.js, React Native, and TypeScript.",
    creator: "@muizrexhepi",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1c1e" },
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
