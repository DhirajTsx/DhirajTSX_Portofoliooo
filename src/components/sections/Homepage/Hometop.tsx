"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils"; // 👈 ye missing tha

import { ShootingStars } from "@/components/ui/shooting-stars";
import { Spotlight } from "@/components/ui/spotlight-new";
import { StarsBackground } from "@/components/ui/stars-background";
import { AuroraText } from "@/components/magicui/aurora-text";

import { InteractiveGridPattern } from "@/components/magicui/interacticeGrid";
import InterativeDemo from "@/components/ui/interactiveGridDemo";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import image from "@/assets/images/MeBNW.png"

function HomeTop() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="relative w-full min-h-screen flex items-center justify-center bg-black dark:bg-white" />
    );
  }

  return (
    <div
      suppressHydrationWarning
      className="relative w-full font-[var(--font-outfit)] min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black dark:bg-white transition-colors duration-300"
    >
      {resolvedTheme === "dark" ? (
        <InterativeDemo />
      ) : (
        <>
          <StarsBackground className="absolute inset-0" />
          <ShootingStars className="absolute inset-0" />
        </>
      )}

      {/* Spotlight always visible */}
      <Spotlight />
      <div>
        <MacbookScroll  src={image}/>
      </div>
    </div>
  );
}

export default HomeTop;
