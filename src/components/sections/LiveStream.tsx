"use client";

import { ExternalLink, Video } from "lucide-react";
import { motion } from "motion/react";
import { Divider, SectionLabel, SectionTitle } from "@/components/ui/Divider";
import { MotionSection } from "@/components/ui/MotionSection";
import { invitation } from "@/lib/data/invitation";
import { revealItem } from "@/lib/hooks/useScrollReveal";

export function LiveStream() {
  const ls = invitation.liveStream;
  if (!ls) return null;

  return (
    <MotionSection id="live" stagger className="bg-cream-deep">
      <div className="mx-auto max-w-3xl">
        <motion.div variants={revealItem} className="flex flex-col items-center gap-3">
          <SectionLabel>Live Streaming</SectionLabel>
          <SectionTitle>Saksikan Secara Langsung</SectionTitle>
          <Divider className="my-3" />
          <p className="mt-2 max-w-md text-center leading-relaxed text-taupe">
            Bagi yang berhalangan hadir, akad dapat disaksikan melalui tautan berikut.
          </p>
        </motion.div>

        {ls.provider === "youtube" && ls.embedUrl ? (
          <motion.div
            variants={revealItem}
            className="mt-10 overflow-hidden rounded-2xl border border-gold/25 shadow-[var(--shadow-soft)]"
          >
            <div className="aspect-video w-full">
              <iframe
                src={ls.embedUrl}
                title="Live Streaming Akad"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div variants={revealItem} className="mt-10 flex justify-center">
            <a
              href={ls.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-xs font-medium uppercase tracking-[0.3em] text-cream transition hover:bg-gold hover:text-charcoal"
            >
              <Video className="h-4 w-4" /> Buka {ls.provider}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        )}
      </div>
    </MotionSection>
  );
}
