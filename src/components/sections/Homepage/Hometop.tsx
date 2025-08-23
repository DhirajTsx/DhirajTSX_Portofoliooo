"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { Spotlight } from "@/components/ui/spotlight-new";
import { StarsBackground } from "@/components/ui/stars-background";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { AuroraText } from "@/components/magicui/aurora-text";


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
        <GridPattern className="absolute inset-0 z-[20]" />
      ) : (
        <>
          <StarsBackground className="absolute inset-0" />
          <ShootingStars className="absolute inset-0" />
        </>
      )}
      <Spotlight />
       <div>
              <AuroraText className="text-[30px]  font-[var(--font-geist-sans)]">
                <span className=" font-300">
                  Hello
                </span>
              </AuroraText>
      </div>
      
      
 
    </div>
  );
}

export default HomeTop;
