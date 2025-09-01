"use client";

import { cn } from "@/lib/utils";
import { motion, type MotionProps } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";

const animationProps = {
  initial: { "--x": "100%" },
  animate: { "--x": "-100%" },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    duration: 3,
    ease: "linear",
  },
} satisfies MotionProps;

interface ShinyButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, keyof MotionProps>,
    MotionProps {
  text: string;
  className?: string;
  href: string;
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ text, className, href, ...props }, ref) => {
  const router = useRouter();

  return (
    <motion.button
      ref={ref}
      onClick={() => router.push(href)}
      className={cn(
        // 👉 Normal text button style
        "relative cursor-pointer px-0 py-0 font-medium text-white/80 hover:text-white transition-colors",
        className,
      )}
      {...animationProps}
      {...props}
    >
      {/* Shiny effect only on text */}
      <span
        className="relative inline-flex items-center"
        style={{
          maskImage:
            "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
          WebkitMaskImage:
            "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
        }}
      >
        {text}
      </span>
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";
