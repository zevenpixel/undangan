"use client";

import { motion } from "motion/react";
import { Divider, SectionLabel, SectionTitle } from "@/components/ui/Divider";
import { MotionSection } from "@/components/ui/MotionSection";
import { invitation } from "@/lib/data/invitation";
import { useCountdown } from "@/lib/hooks/useCountdown";
import { revealItem } from "@/lib/hooks/useScrollReveal";
import { combineDateTime, formatTanggalLengkap } from "@/lib/utils/formatDate";

const segments = [
  { key: "hari", label: "Hari" },
  { key: "jam", label: "Jam" },
  { key: "menit", label: "Menit" },
  { key: "detik", label: "Detik" },
] as const;

export function Countdown() {
  const akad = invitation.acara[0];
  const target = combineDateTime(akad.tanggal, akad.jamMulai);
  const value = useCountdown(target);

  return (
    <MotionSection id="countdown" stagger className="bg-cream-deep">
      <div className="mx-auto max-w-3xl">
        <motion.div variants={revealItem} className="flex flex-col items-center gap-3">
          <SectionLabel>Save the Date</SectionLabel>
          <SectionTitle>Menuju Hari Bahagia</SectionTitle>
          <Divider className="my-3" />
          <p className="mt-2 font-serif text-lg italic text-taupe">
            {formatTanggalLengkap(akad.tanggal)}
          </p>
        </motion.div>

        <motion.div
          variants={revealItem}
          className="mt-12 grid grid-cols-4 gap-3 sm:gap-5"
        >
          {segments.map((seg) => (
            <div
              key={seg.key}
              className="flex flex-col items-center justify-center rounded-2xl border border-gold/30 bg-cream py-5 shadow-[var(--shadow-soft)] sm:py-7"
            >
              <span className="font-serif text-3xl font-light tabular-nums text-charcoal sm:text-5xl">
                {String(value[seg.key]).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-taupe">
                {seg.label}
              </span>
            </div>
          ))}
        </motion.div>

        {value.selesai && (
          <motion.p
            variants={revealItem}
            className="mt-8 text-center font-serif text-xl italic text-gold"
          >
            Hari yang ditunggu telah tiba ✦
          </motion.p>
        )}
      </div>
    </MotionSection>
  );
}
