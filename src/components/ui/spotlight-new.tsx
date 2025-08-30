"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

type SpotlightProps = {
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

type GradientConfig = {
  transform: string;
  type: "first" | "second" | "third";
  origin: string;
};

const GradientSet: React.FC<{
  side: "left" | "right";
  translateY: number;
  width: number;
  height: number;
  smallWidth: number;
  gradients: Record<string, string>;
  xOffset: number;
  duration: number;
}> = ({ side, translateY, width, height, smallWidth, gradients, xOffset, duration }) => {
  const isLeft = side === "left";
  const rotate = isLeft ? -45 : 45;
  const align = isLeft ? "left-0" : "right-0";
  const originSecond = isLeft ? "origin-top-left" : "origin-top-right";

  const gradientConfigs: GradientConfig[] = [
    {
      transform: `translateY(${translateY}px) rotate(${rotate}deg)`,
      type: "first",
      origin: "",
    },
    {
      transform: `rotate(${rotate}deg) translate(${isLeft ? "5%" : "-5%"}, -50%)`,
      type: "second",
      origin: originSecond,
    },
    {
      transform: `rotate(${rotate}deg) translate(${isLeft ? "-180%" : "180%"}, -70%)`,
      type: "third",
      origin: originSecond,
    },
  ];

  return (
    <motion.div
      animate={{ x: [0, isLeft ? xOffset / 2 : -xOffset / 2, 0], opacity: [0.9, 1, 0.9] }}
      transition={{
        duration: duration * 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className={`absolute top-0 ${align} w-screen h-screen z-40 pointer-events-none`}
    >
      {gradientConfigs.map(({ transform, type, origin }, idx) => (
        <div
          key={idx}
          style={{
            transform,
            background: gradients[type],
            width: type === "first" ? `${width}px` : `${smallWidth}px`,
            height: `${height}px`,
            borderRadius: "50%",
          }}
          className={`absolute top-0 ${align} ${origin}`}
        />
      ))}
    </motion.div>
  );
};

export const Spotlight: React.FC<SpotlightProps> = ({
  translateY = -350,
  width = 1000,
  height = 1580,
  smallWidth = 250,
  duration = 2,
  xOffset = 200,
}) => {
  const { resolvedTheme } = useTheme();
  const [gradients, setGradients] = useState<Record<string, string>>({
    first: "",
    second: "",
    third: "",
  });

  useEffect(() => {
    setGradients(
      resolvedTheme === "light"
        ? {
            first:
              "radial-gradient(70% 70% at 50% 30%, hsla(220, 90%, 60%, 0.08) 0%, hsla(260, 80%, 50%, 0.03) 40%, transparent 80%)",
            second:
              "radial-gradient(50% 50% at 50% 50%, hsla(280, 90%, 60%, 0.06) 0%, hsla(200, 90%, 45%, 0.02) 60%, transparent 100%)",
            third:
              "radial-gradient(50% 50% at 50% 50%, hsla(320, 100%, 60%, 0.05) 0%, hsla(240, 90%, 40%, 0.02) 50%, transparent 100%)",
          }
        : {
            first:
              "radial-gradient(70% 70% at 50% 30%, hsla(35, 100%, 50%, 0.12) 0%, hsla(45, 100%, 40%, 0.06) 40%, transparent 80%)",
            second:
              "radial-gradient(50% 50% at 50% 50%, hsla(40, 100%, 45%, 0.1) 0%, hsla(30, 100%, 35%, 0.04) 60%, transparent 100%)",
            third:
              "radial-gradient(50% 50% at 50% 50%, hsla(25, 100%, 50%, 0.08) 0%, hsla(20, 100%, 40%, 0.03) 50%, transparent 100%)",
          }
    );
  }, [resolvedTheme]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="pointer-events-none absolute -z-10 inset-0 h-full w-full"
    >
      <GradientSet
        side="left"
        translateY={translateY}
        width={width}
        height={height}
        smallWidth={smallWidth}
        gradients={gradients}
        xOffset={xOffset}
        duration={duration}
      />
      <GradientSet
        side="right"
        translateY={translateY}
        width={width}
        height={height}
        smallWidth={smallWidth}
        gradients={gradients}
        xOffset={xOffset}
        duration={duration}
      />
    </motion.div>
  );
};
