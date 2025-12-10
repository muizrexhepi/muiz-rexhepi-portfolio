import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dental Clinic Websites | Muiz Rexhepi",
  description:
    "Modern, trust-focused websites for dental clinics that increase patient bookings.",
};

export default function ClinicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-[#FAFAFA] antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
