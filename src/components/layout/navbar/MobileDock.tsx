"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { usePathname } from "next/navigation";
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconArticle,
  IconMail,
} from "@tabler/icons-react";

export function MobileDock() {
  const pathname = usePathname();

  const activeColors = {
    Home: "text-purple-500 dark:text-purple-400",
    About: "text-[#FF9B00] dark:text-[#FFB347]",
    Work: "text-red-500 dark:text-red-400",
    Blog: "text-green-500 dark:text-green-400",
    "Hire Me": "text-pink-500 dark:text-pink-400",
  } as const;

  const links = [
    {
      title: "Home",
      href: "/",
      icon: (
        <IconHome
          className={`h-full w-full ${
            pathname === "/" ? activeColors.Home : "text-neutral-500 dark:text-neutral-300"
          }`}
        />
      ),
    },
    {
      title: "About",
      href: "/about",
      icon: (
        <IconUser
          className={`h-full w-full ${
            pathname === "/about" ? activeColors.About : "text-neutral-500 dark:text-neutral-300"
          }`}
        />
      ),
    },
    {
      title: "Work",
      href: "/work",
      icon: (
        <IconBriefcase
          className={`h-full w-full ${
            pathname === "/work" ? activeColors.Work : "text-neutral-500 dark:text-neutral-300"
          }`}
        />
      ),
    },
    {
      title: "Blog",
      href: "/blog",
      icon: (
        <IconArticle
          className={`h-full w-full ${
            pathname === "/blog" ? activeColors.Blog : "text-neutral-500 dark:text-neutral-300"
          }`}
        />
      ),
    },
    {
      title: "Hire Me",
      href: "/hireme",
      icon: (
        <IconMail
          className={`h-full w-full ${
            pathname === "/hireme" ? activeColors["Hire Me"] : "text-neutral-500 dark:text-neutral-300"
          }`}
        />
      ),
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <FloatingDock
        orientation="vertical"
        items={links}
        mobileClassName="flex flex-col gap-3"
      />
    </div>
  );
}
