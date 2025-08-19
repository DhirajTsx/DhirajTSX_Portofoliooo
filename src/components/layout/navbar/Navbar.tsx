"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import { useTheme } from "next-themes";
import LogoLight from "@/public/logo.svg";      
import LogoDark from "@/public/DarkLogo.svg"; 

export default function Navbar() {
  const { resolvedTheme } = useTheme(); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);  
  }, []);

  if (!mounted) return null; 

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent p-4 z-50">
      <div className="container mx-auto flex items-center justify-between md:justify-around">
        {/* Logo */}
        <Link href="/" className="flex items-center" draggable="true">
          <Image
            src={resolvedTheme === "dark" ? LogoDark : LogoLight}
            alt="Logo"
            width={65}
            height={65}
            className="pointer-events-none select-none"
          />
        </Link>

        {/* Theme toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
}
