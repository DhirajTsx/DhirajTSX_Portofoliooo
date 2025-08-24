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
    Home: "text-purple-500 dark:text-purple-400 bg-[#fffeff0c] dark:bg-[#ffffff0c] ",
    About:
      "text-[#FF9B00] dark:text-[#FFB347] bg-[#fffeff0c] dark:bg-[#ffffff0c]",
    Work: "text-red-500 dark:text-red-400 bg-[#fffeff0c] dark:bg-[#ffffff0c]",
    Blog: "text-green-500 dark:text-green-400 bg-[#fffeff0c] dark:bg-[#ffffff0c]",
    "Hire Me":
      "text-pink-500 dark:text-pink-400 bg-[#fffeff0c] dark:bg-[#ffffff0c]",
  } as const;

  type ActiveColorKeys = keyof typeof activeColors;

  return (
  <nav className="fixed font-[var(--font-outfit)] top-0 left-0 w-full z-50 transition-colors">
  <div className="container mx-auto flex items-center justify-between sm:p-5 p-6.5 md:justify-around">
    <Link href="/">
      <motion.div
        className="flex items-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {mounted && (
          <Image
            src={resolvedTheme === "dark" ? LogoDark : LogoLight}
            alt="Logo"
            className="w-[50px] sm:w-[45px] h-auto pointer-events-none select-none"
            priority
          />
        )}
      </motion.div>
    </Link>

 <motion.ul
  className="hidden md:flex items-center gap-1 text-[18px] backdrop-blur-sm bg-[#232223] border border-[#ffffff10] rounded-full px-1 py-1"
  initial="hidden"
  animate="show"
  variants={{
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08, // each li animates one after another
        delayChildren: 0.2,
        ease: "easeOut",
      },
    },
  }}
>
  {navLinks.map((link) => {
    const isActive = pathname === link.href;
    const activeClass = activeColors[link.name as ActiveColorKeys] || '';

    return (
      <motion.li
        key={link.name}
        className="relative flex items-center"
        variants={{
          hidden: { opacity: 0, y: -8 },
          show: { opacity: 1, y: 0 },
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
      >
        <Link
          href={link.href}
          className={`group flex items-center text-[12px] gap-0.5 px-3 py-1 rounded-full transition-all duration-300 ${
            link.name === "Book a Call"
              ? "text-[#ffffffbd] backdrop-blur-[20px] bg-white/10 hover:bg-white/20 dark:border-black/30 shadow-[0_0px_10px_1px_rgba(255,255,255,0.3)] dark:shadow-[0_0px_10px_0.9px_#FFFFFF66]"
              : isActive
              ? activeClass
              : "text-[#ffffffd5] dark:text-[#ffffffea] hover:bg-white/10 dark:hover:bg-white/10"
          }`}
        >
          {link.icon && <span className="flex items-center justify-center">{link.icon}</span>}
          <span className="flex items-center whitespace-nowrap transition-colors duration-300">
            {link.name}
          </span>
        </Link>
      </motion.li>
    );
  })}
</motion.ul>

    <div className="flex items-center gap-2">
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {mounted && <ThemeToggleButton />}
      </motion.div>
    </div>
  </div>
</nav>

  );
}
