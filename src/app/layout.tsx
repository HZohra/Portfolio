import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import SiteHeader from "@/components/layout/site-header";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: { default: "Zohra Haidary — Software Developer", template: "%s" },
  description:
    "Portfolio of Zohra Haidary, a Computer Science student and software developer based in Waterloo, Canada.",
  openGraph: { type: "website", title: "Zohra Haidary — Software Developer", description: "Full-stack, mobile and AI-powered software projects by Zohra Haidary." },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${instrumentSerif.variable}`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}