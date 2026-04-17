"use client";

import { Mail } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Divider } from "@/components/ui/Divider";
import { invitation } from "@/lib/data/invitation";
import { useGuestName } from "@/lib/hooks/useGuestName";
import { formatTanggalLengkap } from "@/lib/utils/formatDate";

export function Cover({ onOpen }: { onOpen: () => void }) {
  const guest = useGuestName();
  const { cover, mempelai, acara } = invitation;

  return (
    <div className="relative h-full w-full overflow-hidden bg-charcoal">
      <Image
        src={cover.backgroundImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/90" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between px-6 py-10 text-center text-cream sm:py-16">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[10px] font-medium uppercase tracking-[0.5em] text-gold-soft"
        >
          {cover.greeting}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4"
        >
          <h1 className="font-serif text-[15vw] leading-none italic text-cream sm:text-[110px]">
            {mempelai.pria.namaPanggilan}
            <span className="mx-3 align-middle font-display text-gold sm:mx-5">&</span>
            {mempelai.wanita.namaPanggilan}
          </h1>
          <Divider className="opacity-80" />
          <p className="font-serif text-base tracking-wide text-cream/85 sm:text-lg">
            {formatTanggalLengkap(acara[0].tanggal)}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex flex-col items-center gap-1.5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold-soft">Kepada Yth.</p>
            <p className="font-serif text-2xl text-cream sm:text-3xl">{guest}</p>
          </div>

          <button
            type="button"
            onClick={onOpen}
            className="group inline-flex items-center gap-2.5 rounded-full border border-gold bg-gold/10 px-6 py-3 text-xs font-medium uppercase tracking-[0.35em] text-cream backdrop-blur transition hover:bg-gold hover:text-charcoal"
          >
            <Mail className="h-3.5 w-3.5 transition group-hover:-rotate-12" />
            Buka Undangan
          </button>
        </motion.div>
      </div>
    </div>
  );
}
