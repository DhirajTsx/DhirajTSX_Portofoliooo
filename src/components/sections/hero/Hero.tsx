"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Navbar from "@/components/layout/navbar/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Spotlight } from "@/components/ui/spotlight-new";
import { StarsBackground } from "@/components/ui/stars-background";
import { GridPattern } from "@/components/magicui/grid-pattern";

function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="relative w-full h-screen bg-black dark:bg-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Conditionally render backgrounds */}
      {resolvedTheme === "dark" ? (
        <GridPattern />
      ) : (
        <>
          <StarsBackground />
          <ShootingStars />
        </>
      )}

      <Spotlight />
    </div>
  );
}

export default Hero;
