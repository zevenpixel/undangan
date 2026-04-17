"use client";

import { motion } from "motion/react";
import { revealStaggerContainer, revealVariants } from "@/lib/hooks/useScrollReveal";
import { cn } from "@/lib/utils/cn";

type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
};

export function MotionSection({ id, children, className, stagger = false }: Props) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={stagger ? revealStaggerContainer : revealVariants}
      className={cn("relative w-full px-6 py-20 sm:px-10 sm:py-28", className)}
    >
      {children}
    </motion.section>
  );
}
