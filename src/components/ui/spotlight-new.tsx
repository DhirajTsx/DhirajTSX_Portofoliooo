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

export const Spotlight = ({
  translateY = -350,
  width = 1000,
  height = 1580,
  smallWidth = 250,
  duration = 2,
  xOffset = 200,
}: SpotlightProps = {}) => {
  const { theme } = useTheme();
  const [gradients, setGradients] = useState({
    first: "",
    second: "",
    third: "",
  });

  useEffect(() => {
    if (theme === "light") {
      setGradients({
        first:
          "radial-gradient(70% 70% at 50% 30%, hsla(220, 90%, 60%, 0.08) 0%, hsla(260, 80%, 50%, 0.03) 40%, transparent 80%)",
        second:
          "radial-gradient(50% 50% at 50% 50%, hsla(280, 90%, 60%, 0.06) 0%, hsla(200, 90%, 45%, 0.02) 60%, transparent 100%)",
        third:
          "radial-gradient(50% 50% at 50% 50%, hsla(320, 100%, 60%, 0.05) 0%, hsla(240, 90%, 40%, 0.02) 50%, transparent 100%)",
      });
    } else {
      setGradients({
        first:
          "radial-gradient(70% 70% at 50% 30%, hsla(35, 100%, 50%, 0.12) 0%, hsla(45, 100%, 40%, 0.06) 40%, transparent 80%)",
        second:
          "radial-gradient(50% 50% at 50% 50%, hsla(40, 100%, 45%, 0.1) 0%, hsla(30, 100%, 35%, 0.04) 60%, transparent 100%)",
        third:
          "radial-gradient(50% 50% at 50% 50%, hsla(25, 100%, 50%, 0.08) 0%, hsla(20, 100%, 40%, 0.03) 50%, transparent 100%)",
      });
    }
  }, [theme]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {/* Left diagonal gradients */}
      <motion.div
        animate={{ x: [0, xOffset / 2, 0], opacity: [0.9, 1, 0.9] }}
        transition={{
          duration: duration * 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradients.first,
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: "50%",
          }}
          className="absolute top-0 left-0"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradients.second,
            width: `${smallWidth}px`,
            height: `${height}px`,
            borderRadius: "50%",
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradients.third,
            width: `${smallWidth}px`,
            height: `${height}px`,
            borderRadius: "50%",
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>

      {/* Right diagonal gradients */}
      <motion.div
        animate={{ x: [0, -xOffset / 2, 0], opacity: [0.9, 1, 0.9] }}
        transition={{
          duration: duration * 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradients.first,
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: "50%",
          }}
          className="absolute top-0 right-0"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradients.second,
            width: `${smallWidth}px`,
            height: `${height}px`,
            borderRadius: "50%",
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradients.third,
            width: `${smallWidth}px`,
            height: `${height}px`,
            borderRadius: "50%",
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
      </motion.div>
    </motion.div>
  );
};
