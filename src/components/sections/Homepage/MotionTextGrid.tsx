import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/velocityMotionText";
import { motion } from "framer-motion";
export function ScrollBasedVelocityDemo() {
  return (
    <motion.div
      className="relative flex w-full flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <ScrollVelocityContainer className="text-4xl text-white md:text-6xl md:leading-[4rem] font-bold tracking-[-0.02em]">
        
        <ScrollVelocityRow baseVelocity={3} direction={1}>
          <motion.span
            className="text-shadow py-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Creative Developer • Full Stack Web Developer • Problem Solver
          </motion.span>
        </ScrollVelocityRow>

        <ScrollVelocityRow baseVelocity={3} direction={-1}>
          <motion.span
            className="text-shadow py-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          >
            Building Modern Web Experiences • Crafting Smooth UI/UX • Always Learning
          </motion.span>
        </ScrollVelocityRow>

      </ScrollVelocityContainer>
    </motion.div>
  );
}
