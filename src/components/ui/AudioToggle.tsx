"use client";

import { Disc3, Pause } from "lucide-react";
import { motion } from "motion/react";
import { useAudio } from "@/lib/audio/AudioContext";

export function AudioToggle() {
  const { playing, toggle } = useAudio();

  return (
    <motion.button
      type="button"
      onClick={toggle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      aria-label={playing ? "Jeda musik" : "Mainkan musik"}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-charcoal text-cream shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur transition hover:scale-105 active:scale-95"
    >
      {playing ? (
        <Disc3 className="h-5 w-5 animate-spin text-gold" style={{ animationDuration: "4s" }} />
      ) : (
        <Pause className="h-5 w-5 text-gold/80" />
      )}
    </motion.button>
  );
}
