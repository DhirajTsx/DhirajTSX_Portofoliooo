"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import { useTheme } from "next-themes";
import LogoLight from "@/public/logo.svg";
import LogoDark from "@/public/DarkLogo.svg";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BookIcon from "@mui/icons-material/Book";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Home", href: "/", icon: <HomeIcon fontSize="small" /> },
    { name: "About", href: "/about", icon: <InfoIcon fontSize="small" /> },
    { name: "Work", href: "/work", icon: <WorkOutlineIcon fontSize="small" /> },
    { name: "Blog", href: "/blog", icon: <BookIcon fontSize="small" /> },
    {
      name: "Hire Me",
      href: "/hireme",
      icon: <ConnectWithoutContactIcon fontSize="small" />,
    },
    {
      name: "Book a Call",
      href: "/",
    },
  ];

  const activeColors = {
    Home: "text-purple-500 dark:text-purple-400",
    About: "text-[#FF9B00] dark:text-[#FFB347]",
    Work: "text-red-500 dark:text-red-400",
    Blog: "text-green-500 dark:text-green-400",
    "Hire Me": "text-pink-500 dark:text-pink-400",
  } as const;

  type ActiveColorKeys = keyof typeof activeColors;

  return (
    <nav className="fixed font-[var(--font-outfit)] top-0 left-0 w-full z-50 transition-colors">
      <div className="container mx-auto flex items-center justify-between sm:p-5 p-6.5 md:justify-around">
        <Link href="/" className="flex items-center" draggable="true">
          <Image
            src={resolvedTheme === "dark" ? LogoDark : LogoLight}
            alt="Logo"
            className="w-[50px] sm:w-[65px] h-auto pointer-events-none select-none"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center gap-1.5 text-[14px] backdrop-blur-sm bg-transparent border border-white/10 rounded-full px-2 py-1">
          {navLinks.map((link) => {
            const isActive =
              link.name === "Book a Call" ? true : pathname === link.href;

            return (
              <motion.li
                key={link.name}
                className="relative flex items-center"
                layout
              >
                <Link
                  href={link.href}
                  className={`group flex items-center text-[12px] gap-1 px-3 py-1.5 rounded-full transition-all duration-300 ${
                    link.name === "Book a Call"
                      ? "text-white backdrop-blur-[20px] bg-white/20  dark:bg-black  dark:border-black/30 shadow-lg"
                      : isActive
                      ? activeColors[link.name as ActiveColorKeys]
                      : "text-white dark:text-black hover:bg-black/20 dark:hover:bg-white/10"
                  }`}
                >
                  {link.icon && (
                    <span className="flex items-center justify-center">
                      {link.icon}
                    </span>
                  )}
                  <motion.span className="flex items-center whitespace-nowrap transition-colors duration-300">
                    {link.name}
                  </motion.span>
                </Link>
              </motion.li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 ">
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
}
