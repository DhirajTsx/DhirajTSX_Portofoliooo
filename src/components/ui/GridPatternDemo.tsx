"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { motion } from "framer-motion";

export function GridPatternDemo() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 1.2, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "skew-y-12"
          )}
        />
      </motion.div>
    </div>
  );
}
