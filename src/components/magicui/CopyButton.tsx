"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

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
        className="relative z-10 flex items-center justify-center gap-2 rounded-xl border border-white/10 backdrop-blur-lg shadow-lg cursor-pointer select-none transition-all  "
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
        <h2 className="text-sm font-semibold font-[var(--font-outfit)] text-white/80 dark:text-zinc-100 truncate">
          {copied ? "Copied to Clipboard" : command}
        </h2>
      </div>
    </div>
  );
}
