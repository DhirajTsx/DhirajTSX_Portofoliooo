"use client";

import { AnimatePresence, motion, Variants, MotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { ElementType } from "react";
import React from "react";

interface FlipTextProps extends MotionProps {
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
  as?: ElementType;
  children: React.ReactNode;
  variants?: Variants;
}

const defaultVariants: Variants = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1 },
};

export function FlipText({
  children,
  duration = 0.5,
  delayMultiple = 0.08,
  className,
  as: Component = "span",
  variants,
  ...props
}: FlipTextProps) {
  const MotionComponent = motion.create(Component);
  const characters = React.Children.toArray(children).join("").split("");

  return (
    <div className="flex justify-center space-x-1">
      <AnimatePresence mode="wait">
        {characters.map((char, i) => (
          <MotionComponent
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants || defaultVariants}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("origin-center drop-shadow-sm text-white", className)}
            {...props}
          >
            {char}
          </MotionComponent>
        ))}
      </AnimatePresence>
    </div>
  );
}
