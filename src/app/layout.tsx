import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moinul Haq | Full Stack Developer & SQA Specialist",
  description: "Portfolio of Moinul Haq, a Full Stack Developer specializing in NestJS, React, Next.js, and TypeScript, with expertise in Software Quality Assurance.",
  keywords: "Full Stack Developer, Software Quality Assurance, NestJS, React, Next.js, TypeScript",
  authors: [{ name: "MD Moinul Haq" }],
  openGraph: {
    title: "Moinul Haq | Full Stack Developer & SQA Specialist",
    description: "Portfolio of Moinul Haq, showcasing skills in Full Stack Development and Software Quality Assurance.",
    url: "https://www.moinulhaq.com",
    siteName: "MD Moinul Haq Portfolio",
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
