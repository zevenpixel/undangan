"use client";

import { motion } from "motion/react";
import { Divider, SectionLabel, SectionTitle } from "@/components/ui/Divider";
import { MotionSection } from "@/components/ui/MotionSection";
import { invitation } from "@/lib/data/invitation";
import { revealItem } from "@/lib/hooks/useScrollReveal";
import { formatTanggalSingkat } from "@/lib/utils/formatDate";

export function Story() {
  return (
    <MotionSection id="story" stagger className="bg-cream-deep">
      <div className="mx-auto max-w-3xl">
        <motion.div variants={revealItem} className="flex flex-col items-center gap-3">
          <SectionLabel>Our Journey</SectionLabel>
          <SectionTitle>Perjalanan Kami</SectionTitle>
          <Divider className="my-3" />
        </motion.div>

        <ol className="relative mt-14 space-y-10 before:absolute before:bottom-0 before:left-3 before:top-0 before:w-px before:bg-gold/30 sm:before:left-1/2">
          {invitation.story.map((item, i) => (
            <motion.li
              key={item.tanggal}
              variants={revealItem}
              className={`relative grid grid-cols-1 gap-4 sm:grid-cols-2 ${
                i % 2 === 0 ? "" : "sm:[&>div:first-child]:order-2"
              }`}
            >
              <div className="absolute left-3 top-2 -translate-x-1/2 sm:left-1/2">
                <span className="block h-3 w-3 rounded-full border border-gold bg-cream" />
              </div>

              <div className={`pl-10 sm:pl-0 ${i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"}`}>
                <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
                  {formatTanggalSingkat(item.tanggal)}
                </p>
                <h4 className="mt-1 font-serif text-2xl text-charcoal">{item.judul}</h4>
              </div>
              <div className={`pl-10 sm:pl-0 ${i % 2 === 0 ? "sm:pl-10" : "sm:pr-10 sm:text-right"}`}>
                <p className="leading-relaxed text-taupe">{item.cerita}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </MotionSection>
  );
}
