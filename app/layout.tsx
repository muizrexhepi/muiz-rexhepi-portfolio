import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer";
import AnimatedBackground from "@/components/animated-gradient-background";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Muiz Rexhepi - Full-Stack Software Engineer",
  description:
    "Full-stack software engineer specializing in building reliable web applications and clean, maintainable code.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <AnimatedBackground />
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
