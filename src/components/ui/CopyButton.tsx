"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/lib/ui/ToastContext";
import { copyToClipboard } from "@/lib/utils/copy";

export function CopyButton({ value, label = "Salin" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const toast = useToast();

  const handle = async () => {
    const ok = await copyToClipboard(value);
    if (ok) {
      setCopied(true);
      toast.show("Disalin ke clipboard");
      setTimeout(() => setCopied(false), 1800);
    } else {
      toast.show("Gagal menyalin");
    }
  };

  return (
    <button
      type="button"
      onClick={handle}
      className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream px-4 py-2 text-xs font-medium uppercase tracking-wider text-charcoal transition hover:bg-gold hover:text-cream"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Tersalin" : label}
    </button>
  );
}
