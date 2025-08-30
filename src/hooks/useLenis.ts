"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;
    
    let frames = 0;
    const start = performance.now();

    const detectFps = () =>
      new Promise<number>((resolve) => {
        function step() {
          frames++;
          if (performance.now() - start < 1000) requestAnimationFrame(step);
          else resolve(frames);
        }
        step();
      });

    detectFps().then((fps) => {
      let lerp = 0.1;
      let wheelMultiplier = 1;
      let touchMultiplier = 1.4;

      if (fps <= 75) {
        lerp = 0.12;
        wheelMultiplier = 1;
        touchMultiplier = 1.5;
      } else if (fps <= 130) {
        lerp = 0.1;
        wheelMultiplier = 0.95;
        touchMultiplier = 1.3;
      } else {
        // 144Hz+
        lerp = 0.085;
        wheelMultiplier = 0.85;
        touchMultiplier = 1.2;
      }

      lenisRef.current = new Lenis({
        lerp,
        smoothWheel: true,
        wheelMultiplier,
        touchMultiplier,
      });

      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    });

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);
}
