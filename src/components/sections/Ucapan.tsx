"use client";

import { Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Divider, SectionLabel, SectionTitle } from "@/components/ui/Divider";
import { MotionSection } from "@/components/ui/MotionSection";
import { invitation } from "@/lib/data/invitation";
import { useGuestName } from "@/lib/hooks/useGuestName";
import { revealItem } from "@/lib/hooks/useScrollReveal";
import { useToast } from "@/lib/ui/ToastContext";

const kehadiranLabel: Record<string, string> = {
  hadir: "Hadir",
  tidak: "Berhalangan",
  ragu: "Mungkin",
};

const kehadiranBadge: Record<string, string> = {
  hadir: "bg-green-700/10 text-green-800",
  tidak: "bg-red-700/10 text-red-800",
  ragu: "bg-amber-700/10 text-amber-800",
};

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const min = Math.floor(diff / 60000);
  if (min < 60) return `${Math.max(min, 1)} menit lalu`;
  const jam = Math.floor(min / 60);
  if (jam < 24) return `${jam} jam lalu`;
  const hari = Math.floor(jam / 24);
  return `${hari} hari lalu`;
}

export function Ucapan() {
  const guest = useGuestName();
  const toast = useToast();
  const [pesan, setPesan] = useState("");
  const [nama, setNama] = useState(guest === "Tamu Undangan" ? "" : guest);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !pesan.trim()) {
      toast.show("Nama & ucapan wajib diisi");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 500));
    toast.show("Ucapan terkirim ✦");
    setPesan("");
    setSubmitting(false);
  };

  return (
    <MotionSection id="ucapan" stagger className="bg-cream">
      <div className="mx-auto max-w-2xl">
        <motion.div variants={revealItem} className="flex flex-col items-center gap-3">
          <SectionLabel>Ucapan &amp; Doa</SectionLabel>
          <SectionTitle>Kirim Ucapan</SectionTitle>
          <Divider className="my-3" />
        </motion.div>

        <motion.form
          variants={revealItem}
          onSubmit={handleSubmit}
          className="mt-10 space-y-3 rounded-2xl border border-gold/25 bg-cream-deep p-5 shadow-[var(--shadow-soft)] sm:p-6"
        >
          <input
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama Anda"
            className="w-full rounded-lg border border-charcoal/15 bg-cream px-4 py-2.5 font-serif text-base text-charcoal outline-none transition focus:border-gold"
          />
          <textarea
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            placeholder="Tuliskan ucapan dan doa terbaik..."
            rows={4}
            className="w-full resize-none rounded-lg border border-charcoal/15 bg-cream px-4 py-3 font-serif text-base text-charcoal outline-none transition focus:border-gold"
          />
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-xs font-medium uppercase tracking-[0.3em] text-cream transition hover:bg-gold hover:text-charcoal disabled:opacity-50"
          >
            <Send className="h-3.5 w-3.5" />
            {submitting ? "Mengirim..." : "Kirim"}
          </button>
        </motion.form>

        <motion.ul variants={revealItem} className="mt-10 space-y-4">
          {invitation.ucapanDummy.map((u, i) => (
            <li
              key={i}
              className="rounded-2xl border border-gold/15 bg-cream-deep p-5 shadow-[0_2px_10px_rgba(26,24,21,0.04)]"
            >
              <header className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 font-serif text-sm text-gold">
                    {u.nama[0]}
                  </span>
                  <div>
                    <p className="font-serif text-base text-charcoal">{u.nama}</p>
                    <p className="text-[10px] uppercase tracking-wider text-taupe">
                      {timeAgo(u.waktu)}
                    </p>
                  </div>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${kehadiranBadge[u.kehadiran]}`}
                >
                  {kehadiranLabel[u.kehadiran]}
                </span>
              </header>
              <p className="mt-3 leading-relaxed text-charcoal/85">{u.pesan}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </MotionSection>
  );
}
