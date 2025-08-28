"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Spotlight } from "@/components/ui/spotlight-new";
import { StarsBackground } from "@/components/ui/stars-background";
import InteractiveDemo from "@/components/ui/interactiveGridDemo";
import ProgressiveBlur from "@/components/magicui/ProgressiveBlur";


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
      className="relative z-[40] w-full font-[var(--font-outfit)] min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black dark:bg-white transition-colors duration-300"
    >
      <ProgressiveBlur position="top" />
      {resolvedTheme === "dark" ? (
        <InteractiveDemo />
      ) : (
        <>
          <StarsBackground className="absolute inset-0" />
          <ShootingStars className="absolute inset-0" />
        </>
      )}

      <Spotlight />
      
    </div>
  );
}

export default HomeTop;
