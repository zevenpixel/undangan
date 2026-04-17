"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { CopyButton } from "@/components/ui/CopyButton";
import { Divider, SectionLabel, SectionTitle } from "@/components/ui/Divider";
import { MotionSection } from "@/components/ui/MotionSection";
import { invitation } from "@/lib/data/invitation";
import { revealItem } from "@/lib/hooks/useScrollReveal";

type Tab = "rekening" | "qris";

export function Gift() {
  const { gift } = invitation;
  const [tab, setTab] = useState<Tab>("rekening");

  if (!gift.aktif) return null;

  return (
    <MotionSection id="gift" stagger className="bg-cream">
      <div className="mx-auto max-w-3xl">
        <motion.div variants={revealItem} className="flex flex-col items-center gap-3">
          <SectionLabel>Wedding Gift</SectionLabel>
          <SectionTitle>Tanda Kasih</SectionTitle>
          <Divider className="my-3" />
          <p className="mt-2 max-w-lg text-center leading-relaxed text-taupe">
            {gift.deskripsi}
          </p>
        </motion.div>

        <motion.div variants={revealItem} className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-gold/30 bg-cream-deep p-1 text-xs">
            {(["rekening", "qris"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`rounded-full px-4 py-2 uppercase tracking-[0.3em] transition ${
                  tab === t
                    ? "bg-charcoal text-cream"
                    : "text-taupe hover:text-charcoal"
                }`}
              >
                {t === "rekening" ? "Rekening" : "QRIS"}
              </button>
            ))}
          </div>
        </motion.div>

        {tab === "rekening" ? (
          <motion.div
            variants={revealItem}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {gift.rekening.map((acc) => (
              <div
                key={`${acc.bank}-${acc.nomor}`}
                className="flex flex-col gap-3 rounded-2xl border border-gold/25 bg-cream-deep p-6 shadow-[var(--shadow-soft)]"
              >
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{acc.bank}</p>
                <p className="font-serif text-2xl tabular-nums text-charcoal">{acc.nomor}</p>
                <p className="text-sm text-taupe">a.n. {acc.atasNama}</p>
                <div className="mt-1">
                  <CopyButton value={acc.nomor} label="Salin Nomor" />
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          gift.qris && (
            <motion.div
              variants={revealItem}
              className="mx-auto mt-8 flex max-w-xs flex-col items-center gap-4 rounded-2xl border border-gold/25 bg-cream-deep p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-xl">
                <Image src={gift.qris} alt="QRIS" fill sizes="320px" className="object-cover" />
              </div>
              <p className="text-center text-xs text-taupe">
                Scan QRIS di atas untuk memberi tanda kasih
              </p>
            </motion.div>
          )
        )}
      </div>
    </MotionSection>
  );
}
