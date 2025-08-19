"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import Navbar from "@/components/layout/navbar/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Spotlight } from "@/components/ui/spotlight-new";
import { StarsBackground } from "@/components/ui/stars-background";
import { GridPattern } from "@/components/magicui/grid-pattern";

import MeColor from "@/assets/images/MeColor.png";
import MeBnW from "@/assets/images/MeBNW.png";
import imagebg from "@/assets/images/imagebg.png";

function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const heroImageSrc = resolvedTheme === "dark" ? MeColor.src : MeBnW.src;

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black dark:bg-white"
      style={{
        backgroundImage: `url(${imagebg.src})`,
        backgroundSize: "110%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero image with separate Framer Motion */}
      <motion.div
        className="absolute pointer-events-none z-[50] w-full h-full"
        style={{
          backgroundImage: `url(${heroImageSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "contain",
        }}
        initial={{ opacity: 0, y: 50 }}  // slide-up + fade-in
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Background effects */}
      {resolvedTheme === "dark" ? (
        <GridPattern className="absolute inset-0 z-[10]" />
      ) : (
        <>
          <StarsBackground className="absolute inset-0" />
          <ShootingStars className="absolute inset-0" />
        </>
      )}

      {/* Spotlight overlay */}
      <Spotlight />

      {/* Mobile / Tablet adjustments */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*='${heroImageSrc}'] {
            background-position: center 25%;
            background-size: 70%;
          }
        }
        @media (max-width: 640px) {
          div[style*='${heroImageSrc}'] {
            background-position: center 20%;
            background-size: 60%;
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
