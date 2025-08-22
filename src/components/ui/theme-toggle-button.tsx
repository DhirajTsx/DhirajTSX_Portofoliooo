"use client"

import React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  AnimationStart,
  AnimationVariant,
  createAnimation,
} from "./theme-animations"

interface ThemeToggleAnimationProps {
  variant?: AnimationVariant
  start?: AnimationStart
  url?: string
}

export default function ThemeToggleButton({
  variant = "circle-blur",
  start = "top-left",
  url = "",
}: ThemeToggleAnimationProps) {
  const { theme, resolvedTheme, setTheme } = useTheme()

  const styleId = "theme-transition-styles"

  const updateStyles = React.useCallback((css: string, name: string) => {
    if (typeof window === "undefined") return

    let styleElement = document.getElementById(styleId) as HTMLStyleElement

    if (!styleElement) {
      styleElement = document.createElement("style")
      styleElement.id = styleId
      document.head.appendChild(styleElement)
    }

    styleElement.textContent = css
  }, [])

  const toggleTheme = React.useCallback(() => {
    const animation = createAnimation(variant, start, url)
    updateStyles(animation.css, animation.name)

    if (typeof window === "undefined") return

    const switchTheme = () => {
      setTheme(theme === "light" ? "dark" : "light")
    }

    if (!document.startViewTransition) {
      switchTheme()
      return
    }

    document.startViewTransition(switchTheme)
  }, [theme, setTheme, variant, start, url, updateStyles])

  return (
    <Button
      onClick={toggleTheme}
      variant="clean"
      size="icon"
      className="w-9 h-9 p-0 relative text-white dark:text-black"
    >
      <motion.span
        initial={{ rotate: 0, scale: 1 }}
        animate={{
          rotate: resolvedTheme === "dark" ? -90 : 0,
          scale: resolvedTheme === "dark" ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <SunIcon className="size-[1.2rem]" />
      </motion.span>

      <motion.span
        initial={{ rotate: 90, scale: 0 }}
        animate={{
          rotate: resolvedTheme === "dark" ? 0 : 90,
          scale: resolvedTheme === "dark" ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <MoonIcon className="size-[1.2rem]" />
      </motion.span>
    </Button>
  )
}
