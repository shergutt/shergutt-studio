import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shergutt's Studio | Full-Stack Developer",
  description:
    "Full-stack developer crafting web apps, AI integrations, and digital products.",
  keywords: "full-stack developer, web developer, React, Next.js",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Shergutt's Studio",
    description: "Full-stack developer crafting web apps and digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-studio-black text-white antialiased">{children}</body>
    </html>
  );
}
