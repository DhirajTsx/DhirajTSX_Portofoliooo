"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState, useRef } from "react";


interface GlassCopyBtnProps {
  command: string;
}

export function GlassCopyBtn({ command }: GlassCopyBtnProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        onClick={copyToClipboard}
        className="relative z-10 flex items-center justify-center gap-2 rounded-xl border py-1 px-2 cursor-pointer select-none border-white/20 bg-white/10 backdrop-blur-md shadow-lg transition hover:bg-white/20 dark:border-zinc-700/40 dark:bg-zinc-800/30 dark:hover:bg-zinc-700/50"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-lg pointer-events-none"
          aria-label={copied ? "Copied" : "Copy to clipboard"}
        >
          {copied ? (
            <Check className="h-5 w-5 text-white transition-all" />
          ) : (
            <Copy className="h-5 w-5 text-white dark:text-zinc-200 transition-all" />
          )}
        </Button>
        <h2 className="text-sm font-semibold font-[var(--font-outfit)] text-[#ffffffd0] dark:text-zinc-100 truncate">
          {copied ? "Copied to Clipboard" : command}
        </h2>
      </div>
    </div>
  );
}
