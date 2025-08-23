import type { ReactNode } from "react";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SmoothCursorDemo } from "@/components/ui/Cursor";
import Navbar from "@/components/layout/navbar/Navbar";
import { MobileDock } from "@/components/layout/navbar/MobileDock";
import type { Metadata } from "next";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});


// Portfolio Metadata
export const metadata: Metadata = {
  title: "Dhiraj Bhawsar | Portfolio",
  description:
    "Personal portfolio of Dhiraj Bhawsar — Full Stack Developer skilled in React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Dhiraj Bhawsar",
    "Portfolio",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Frontend Developer",
    "Backend Developer",
    "Web Development",
  ],
  authors: [{ name: "Dhiraj Bhawsar" }],
  creator: "Dhiraj Bhawsar",
  publisher: "Dhiraj Bhawsar",
  openGraph: {
    title: "Dhiraj Bhawsar | Portfolio",
    description:
      "Explore projects, skills, and experience of Full Stack Developer Dhiraj Bhawsar.",
    url: "https://your-portfolio-url.com",
    siteName: "Dhiraj Bhawsar Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dhiraj Bhawsar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhiraj Bhawsar | Portfolio",
    description:
      "Full Stack Developer skilled in React, Next.js, Node.js, and MongoDB.",
    images: ["https://your-portfolio-url.com/og-image.png"],
    creator: "@your_twitter_handle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={ `${outfit.variable } ${geist.variable} `} >
      <body className=" .dark ::selection">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Navbar />
          <div className="md:hidden">
            <MobileDock />
          </div>
        </ThemeProvider>
        <SmoothCursorDemo />
      </body>
    </html>
  );
}
