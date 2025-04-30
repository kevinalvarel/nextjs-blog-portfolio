import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portofolio with Blog",
  description: "Portofolio with Blog",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-slate-50`}
      >
        <Header />
        <div className="mt-7 md:mt-20">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
