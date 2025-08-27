"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Spotlight } from "@/components/ui/spotlight-new";
import { StarsBackground } from "@/components/ui/stars-background";
import InteractiveDemo from "@/components/ui/interactiveGridDemo";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import linearDemo from "@/assets/images/MeColor.png";
import ProgressiveBlur from "@/components/magicui/ProgressiveBlur";
import { SkillsMarquee } from "./gridMarque";
import { GridPattern } from "@/components/magicui/grid-pattern";

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
      {/* Dark mode = grid demo, Light mode = star bg */}
      {resolvedTheme === "dark" ? (
        <InteractiveDemo />
      ) : (
        <>
          <StarsBackground className="absolute inset-0" />
          <ShootingStars className="absolute inset-0" />
        </>
      )}

      <Spotlight />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 max-w-7xl mx-auto w-full px-6 py-22">
        <WobbleCard containerClassName="relative shadow-2xl shadow-black md:col-span-4 bg-neutral-900 min-h-[400px] overflow-hidden">
          {/* 🔥 Background Marquee */}
          {/* <div className="absolute inset-0 z-0 ">
    <SkillsMarquee />
  </div> */}

          {/* 🔥 Foreground content */}
          <div className="relative z-10 max-w-md">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Gippity AI powers the entire universe
            </h2>
            <p className="mt-4 text-base text-neutral-200">
              With over 100,000 monthly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>

          <Image
            src={linearDemo}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[38%] -bottom-4 object-contain rounded-2xl z-10 h-[630px]"
          />
        </WobbleCard>

        <WobbleCard containerClassName="relative shadow-2xl shadow-black md:col-span-2 min-h-[400px]  to-indigo-600">
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-white">
              No shirt, no shoes, no weapons.
            </h2>
            <p className="mt-4 text-base text-neutral-200">
              If someone yells “stop!”, goes limp, or taps out, the fight is
              over.If someone yells “stop!”, goes limp, or taps out, the fight
              is over.If someone yells “stop!”, goes limp, or taps out, the
              fight is over.If someone yells “stop!”, goes limp, or taps out,
              the fight is over.
            </p>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="relative shadow-2xl bg-pink-800 shadow-black md:col-span-2 min-h-[50px] ">
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-white">
              Fast & Scalable
            </h2>
            <p className="mt-2 text-base text-neutral-200">
              Deploy AI solutions globally in seconds.If someone yells “stop!”,
              goes limp, or taps out, the fight is over.
            </p>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="relative shadow-2xl  shadow-black md:col-span-2 min-h-[250px] ">
          <GridPattern />
          <div className="absolute inset-0 z-0 ">
            <SkillsMarquee />
          </div>
          {/* <div className="relative z-10">
            <h2 className="text-xl font-semibold text-white">
              Developer Friendly
            </h2>
            <p className="mt-2 text-base text-neutral-200">
              Built with APIs, SDKs, and docs devs love.
            </p>
          </div> */}
        </WobbleCard>
        <WobbleCard containerClassName="relative shadow-2xl  bg-pink-800 shadow-black md:col-span-2 min-h-[250px] ">
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-white">
              Developer Friendly
            </h2>
            <p className="mt-2 text-base text-neutral-200">
              Built with APIs, SDKs, and docs devs love.
            </p>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="relative shadow-2xl shadow-black md:col-span-6 min-h-[350px] bg-neutral-900 ">
          <div className="relative z-10 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Signup for blazing-fast cutting-edge state of the art Gippity AI
              wrapper today!
            </h2>
            <p className="mt-4 text-base text-neutral-200">
              With over 100,000 monthly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src={linearDemo}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[25%] -bottom-6 object-contain rounded-2xl opacity-90"
          />
        </WobbleCard>
      </div>
    </div>
  );
}

export default HomeTop;
