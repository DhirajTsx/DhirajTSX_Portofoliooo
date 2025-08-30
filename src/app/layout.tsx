import type { ReactNode } from "react";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SmoothCursorDemo } from "@/components/ui/Cursor";
import Navbar from "@/components/layout/navbar/Navbar";
import { MobileDock } from "@/components/layout/navbar/MobileDock";
import type { Metadata } from "next";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { SmoothCursor } from "@/components/magicui/smooth-cursor";
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhiraj Bhawsar | Full Stack Developer Portfolio",
  description:
    "Personal portfolio of Dhiraj Bhawsar — Full Stack Developer skilled in React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, and building responsive, modern web applications.",
  keywords: [
    "Dhiraj Bhawsar",
    "Portfolio",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Web Development",
    "JavaScript Developer",
    "Tailwind CSS",
    "Responsive Design",
    "UI/UX",
    "Software Engineer",
    "Open Source",
    "Projects",
    "GitHub",
  ],
  authors: [{ name: "Dhiraj Bhawsar", url: "https://your-portfolio-url.com" }],
  creator: "Dhiraj Bhawsar",
  publisher: "Dhiraj Bhawsar",
  openGraph: {
    title: "Dhiraj Bhawsar | Full Stack Developer Portfolio",
    description:
      "Explore projects, skills, and experience of Full Stack Developer Dhiraj Bhawsar. Showcasing web development, React, Next.js, Node.js, and MongoDB expertise.",
    url: "https://your-portfolio-url.com",
    siteName: "Dhiraj Bhawsar Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dhiraj Bhawsar Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhiraj Bhawsar | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer skilled in React, Next.js, Node.js, Express, MongoDB, and building modern web applications.",
    images: ["https://your-portfolio-url.com/og-image.png"],
    creator: "@your_twitter_handle",
    site: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-192x192.png", sizes: "192x192" },
    ],
  },
  // manifest: "/site.webmanifest",
  verification: {
    google: "your-google-site-verification-code",
  },
  alternates: {
    canonical: "https://your-portfolio-url.com",
    languages: {
      "en-US": "https://your-portfolio-url.com/en",
      "hi-IN": "https://your-portfolio-url.com/hi",
    },
  },
  metadataBase: new URL("https://your-portfolio-url.com"),
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${geist.variable} `}
    >
      <body className=" .dark ::selection">
        <LenisProvider>
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
            <SmoothCursorDemo />
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
