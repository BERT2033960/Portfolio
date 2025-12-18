import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Thomas Bérubé Portfolio",
  description: "Portfolio de Thomas Bérubé, développeur web backend.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="mx-auto max-w-6xl px-6 py-10 min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
