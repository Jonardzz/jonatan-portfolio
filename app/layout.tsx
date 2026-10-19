import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Jonatan Rodriguez | Software Architect",
  description: "Computer Science student @ UH | Full Stack & NLP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      {/* Antique gold selection highlight */}
      <body className="antialiased selection:bg-[#cfa262] selection:text-[#1e221f]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}