// components/AnimatedGlassButton.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";

interface AnimatedGlassButtonProps {
  text: string;
  href?: string; // internal route
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const AnimatedGlassButton: React.FC<AnimatedGlassButtonProps> = ({
  text,
  href,
  onClick,
  className = "",
  icon,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (href) {
      router.push(href); // client-side navigation
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      className={`
        relative inline-flex items-center justify-center px-5 py-2 text-lg font-semibold
        text-white bg-white/10 backdrop-blur-lg rounded-xl
        overflow-hidden cursor-pointer
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Aura / Glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 opacity-30 blur-xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.6, scale: 1.1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="text-xl">{icon}</span>}
        {text}
      </span>
    </motion.div>
  );
};

export default AnimatedGlassButton;
