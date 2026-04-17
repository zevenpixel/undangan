"use client";

import { motion } from "motion/react";
import { Divider } from "@/components/ui/Divider";
import { invitation } from "@/lib/data/invitation";
import { revealItem, revealStaggerContainer } from "@/lib/hooks/useScrollReveal";

export function Footer() {
  const { closing, mempelai } = invitation;
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealStaggerContainer}
      className="bg-charcoal px-6 py-24 text-center text-cream sm:px-10 sm:py-28"
    >
      <motion.p
        variants={revealItem}
        className="mx-auto max-w-xl font-serif text-lg italic leading-relaxed text-cream/80 sm:text-xl"
      >
        {closing.pesan}
      </motion.p>

      <motion.div variants={revealItem} className="mt-10">
        <Divider className="opacity-70" />
      </motion.div>

      <motion.h3
        variants={revealItem}
        className="mt-10 font-serif text-5xl italic text-cream sm:text-6xl"
      >
        {mempelai.pria.namaPanggilan}
        <span className="mx-3 text-gold">&amp;</span>
        {mempelai.wanita.namaPanggilan}
      </motion.h3>

      <motion.p variants={revealItem} className="mt-6 whitespace-pre-line text-xs uppercase tracking-[0.4em] text-gold-soft">
        {closing.tandaTangan}
      </motion.p>

      <motion.p variants={revealItem} className="mt-12 text-[10px] uppercase tracking-[0.3em] text-cream/40">
        Made with ✦ for the special day
      </motion.p>
    </motion.footer>
  );
}
