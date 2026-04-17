"use client";

import { AtSign } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Divider, SectionLabel, SectionTitle } from "@/components/ui/Divider";
import { MotionSection } from "@/components/ui/MotionSection";
import { invitation } from "@/lib/data/invitation";
import { revealItem } from "@/lib/hooks/useScrollReveal";
import type { Person } from "@/lib/types/invitation";

function PersonCard({ person, kind }: { person: Person; kind: "Mempelai Pria" | "Mempelai Wanita" }) {
  return (
    <motion.div variants={revealItem} className="flex flex-col items-center gap-5 text-center">
      <div className="relative h-72 w-56 overflow-hidden rounded-[180px] border border-gold/30 shadow-[0_18px_40px_rgba(26,24,21,0.18)] sm:h-80 sm:w-64">
        <Image
          src={person.foto}
          alt={person.nama}
          fill
          sizes="(max-width: 640px) 224px, 256px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{kind}</p>
        <h3 className="font-serif text-3xl font-light text-charcoal sm:text-4xl">{person.nama}</h3>
        <p className="text-sm text-taupe">
          Putra {person.bin === "binti" ? "i" : ""} dari
          <br />
          <span className="font-serif text-base text-charcoal">{person.ayah}</span>
          <br />
          <span className="text-xs">&amp;</span>
          <br />
          <span className="font-serif text-base text-charcoal">{person.ibu}</span>
        </p>
        {person.instagram && (
          <a
            href={`https://instagram.com/${person.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs text-taupe transition hover:text-gold"
          >
            <AtSign className="h-3.5 w-3.5" />{person.instagram}
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function Mempelai() {
  return (
    <MotionSection id="mempelai" stagger className="bg-cream">
      <div className="mx-auto max-w-5xl">
        <motion.div variants={revealItem} className="flex flex-col items-center gap-3">
          <SectionLabel>The Bride &amp; Groom</SectionLabel>
          <SectionTitle>Kedua Mempelai</SectionTitle>
          <Divider className="my-3" />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-16 md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-10">
          <PersonCard person={invitation.mempelai.pria} kind="Mempelai Pria" />
          <motion.div
            variants={revealItem}
            className="flex flex-col items-center justify-center self-center"
          >
            <span className="font-display text-7xl italic text-gold">&amp;</span>
          </motion.div>
          <PersonCard person={invitation.mempelai.wanita} kind="Mempelai Wanita" />
        </div>
      </div>
    </MotionSection>
  );
}
