"use client";

import { CalendarPlus, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Divider, SectionLabel, SectionTitle } from "@/components/ui/Divider";
import { MotionSection } from "@/components/ui/MotionSection";
import { invitation } from "@/lib/data/invitation";
import { revealItem } from "@/lib/hooks/useScrollReveal";
import type { AcaraEvent } from "@/lib/types/invitation";
import { downloadIcs } from "@/lib/utils/calendar";
import { formatTanggalLengkap } from "@/lib/utils/formatDate";

function EventCard({ event }: { event: AcaraEvent }) {
  const mempelai = `${invitation.mempelai.pria.namaPanggilan} & ${invitation.mempelai.wanita.namaPanggilan}`;

  return (
    <motion.article
      variants={revealItem}
      className="flex flex-col gap-6 rounded-3xl border border-gold/25 bg-cream p-7 shadow-[var(--shadow-soft)] sm:p-9"
    >
      <header className="flex flex-col gap-2 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{event.id}</p>
        <h3 className="font-serif text-3xl text-charcoal sm:text-4xl">{event.judul}</h3>
      </header>

      <div className="space-y-3.5 text-center text-sm text-charcoal">
        <p className="font-serif text-base text-taupe">{formatTanggalLengkap(event.tanggal)}</p>
        <p className="inline-flex items-center justify-center gap-2 text-charcoal/85">
          <Clock className="h-4 w-4 text-gold" />
          {event.jamMulai} – {event.jamSelesai} {event.zonaWaktu}
        </p>
        <div className="flex flex-col items-center gap-1">
          <p className="inline-flex items-center justify-center gap-2 font-medium">
            <MapPin className="h-4 w-4 text-gold" />
            {event.lokasi}
          </p>
          <p className="text-xs text-taupe">{event.alamat}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
        <a
          href={event.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-cream transition hover:bg-gold hover:text-charcoal"
        >
          <MapPin className="h-3.5 w-3.5" /> Buka Maps
        </a>
        <button
          type="button"
          onClick={() => downloadIcs(event, mempelai)}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/15 bg-cream px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-charcoal transition hover:border-gold hover:text-gold"
        >
          <CalendarPlus className="h-3.5 w-3.5" /> Add to Calendar
        </button>
      </div>
    </motion.article>
  );
}

export function Acara() {
  return (
    <MotionSection id="acara" stagger className="bg-cream">
      <div className="mx-auto max-w-5xl">
        <motion.div variants={revealItem} className="flex flex-col items-center gap-3">
          <SectionLabel>The Ceremony</SectionLabel>
          <SectionTitle>Rangkaian Acara</SectionTitle>
          <Divider className="my-3" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {invitation.acara.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <motion.div
          variants={revealItem}
          className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-gold/25 shadow-[var(--shadow-soft)]"
        >
          <iframe
            title="Lokasi Resepsi"
            src={invitation.acara[1].mapsEmbedUrl}
            className="h-72 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </MotionSection>
  );
}
