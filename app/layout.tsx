/*
 * Root layout — wraps every page in the app.
 * Defines the base <html>/<body>, loads global fonts/styles,
 * sets default SEO metadata, and renders shared UI (e.g. Navbar)
 * that should appear on all routes. Page-specific content is
 * injected via {children}.
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SweetStocks",
  description: "Find your favorite flavors, before making the trip!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}

      </body>
    </html>
  );
}
