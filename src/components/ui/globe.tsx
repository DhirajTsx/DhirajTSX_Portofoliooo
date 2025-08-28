"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { cn } from "@/lib/utils";

interface EarthProps {
  className?: string;
  theta?: number;
  dark?: number;
  scale?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
}

const Earth: React.FC<EarthProps> = ({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 40000,
  mapBrightness = 6,
  baseColor = [0.4, 0.6509, 1],
  markerColor = [1, 0, 0],
  glowColor = [0.2745, 0.5765, 0.898],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const velocityRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);

  useEffect(() => {
    let width = 0;
    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: phiRef.current,
      theta: theta,
      dark,
      scale,
      diffuse,
      mapSamples,
      mapBrightness,
      baseColor,
      markerColor,
      glowColor,
      opacity: 1,
      offset: [0, 0],
      markers: [
        { location: [20.5937, 78.9629], size: 0.1, color: [1, 1, 1] }, // India
        { location: [51.5074, -0.1278], size: 0.1, color: [1, 1, 1] }, // UK
        { location: [37.0902, -95.7129], size: 0.1, color: [1, 1, 1] }, // USA
      ],
      onRender: (state) => {
        phiRef.current += velocityRef.current;
        velocityRef.current *= 0.98;
        state.phi = phiRef.current;
        state.theta = theta;
      },
    });

    const onPointerDown = (e: PointerEvent) => {
      draggingRef.current = true;
      lastXRef.current = e.clientX;
      canvasRef.current?.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const dx = e.clientX - lastXRef.current;
      velocityRef.current += dx * 0.0001;
      lastXRef.current = e.clientX;
    };

    const onPointerUp = (e: PointerEvent) => {
      draggingRef.current = false;
      canvasRef.current?.releasePointerCapture(e.pointerId);
    };

    canvasRef.current?.addEventListener("pointerdown", onPointerDown);
    canvasRef.current?.addEventListener("pointermove", onPointerMove);
    canvasRef.current?.addEventListener("pointerup", onPointerUp);
    canvasRef.current?.addEventListener("pointerleave", onPointerUp);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
      canvasRef.current?.removeEventListener("pointerdown", onPointerDown);
      canvasRef.current?.removeEventListener("pointermove", onPointerMove);
      canvasRef.current?.removeEventListener("pointerup", onPointerUp);
      canvasRef.current?.removeEventListener("pointerleave", onPointerUp);
    };
  }, [
    theta,
    dark,
    scale,
    diffuse,
    mapSamples,
    mapBrightness,
    baseColor,
    markerColor,
    glowColor,
  ]);

  return (
    <div
      className={cn(
        "flex items-center justify-center z-[10] w-full max-w-[800px] md:max-w-[1000px] mx-auto",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          aspectRatio: "1",
          touchAction: "none",
        }}
      />
    </div>
  );
};

export default Earth;
