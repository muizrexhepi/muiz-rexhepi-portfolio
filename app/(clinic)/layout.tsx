"use client";

import "../globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { useEffect } from "react";

export default function ClinicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // prevent flash on client mount (optional)
  useEffect(() => {}, []);

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
