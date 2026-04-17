"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Divider, SectionLabel, SectionTitle } from "@/components/ui/Divider";
import { MotionSection } from "@/components/ui/MotionSection";
import { useGuestName } from "@/lib/hooks/useGuestName";
import { revealItem } from "@/lib/hooks/useScrollReveal";
import { useToast } from "@/lib/ui/ToastContext";

const schema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  kehadiran: z.enum(["hadir", "tidak", "ragu"]),
  jumlah: z.number().int().min(1).max(10),
});
type RsvpForm = z.infer<typeof schema>;

const opsi = [
  { value: "hadir", label: "Hadir" },
  { value: "ragu", label: "Mungkin" },
  { value: "tidak", label: "Berhalangan" },
] as const;

export function RSVP() {
  const guest = useGuestName();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RsvpForm>({
    resolver: zodResolver(schema),
    defaultValues: { nama: guest === "Tamu Undangan" ? "" : guest, kehadiran: "hadir", jumlah: 1 },
  });

  const kehadiran = watch("kehadiran");

  const onSubmit = async (_data: RsvpForm) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.show("Terima kasih atas konfirmasinya ✦");
    reset();
  };

  return (
    <MotionSection id="rsvp" stagger className="bg-cream-deep">
      <div className="mx-auto max-w-xl">
        <motion.div variants={revealItem} className="flex flex-col items-center gap-3">
          <SectionLabel>Konfirmasi Kehadiran</SectionLabel>
          <SectionTitle>RSVP</SectionTitle>
          <Divider className="my-3" />
          <p className="mt-2 text-center text-sm text-taupe">
            Mohon konfirmasi kehadiran Anda agar kami dapat mempersiapkan dengan baik.
          </p>
        </motion.div>

        <motion.form
          variants={revealItem}
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 space-y-5 rounded-2xl border border-gold/25 bg-cream p-6 shadow-[var(--shadow-soft)] sm:p-8"
        >
          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.3em] text-taupe" htmlFor="nama">
              Nama
            </label>
            <input
              id="nama"
              {...register("nama")}
              className="w-full rounded-lg border border-charcoal/15 bg-cream-deep px-4 py-3 font-serif text-base text-charcoal outline-none transition focus:border-gold"
              placeholder="Nama Anda"
            />
            {errors.nama && <p className="text-xs text-red-700">{errors.nama.message}</p>}
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] uppercase tracking-[0.3em] text-taupe">Kehadiran</span>
            <div className="grid grid-cols-3 gap-2">
              {opsi.map((o) => (
                <label
                  key={o.value}
                  className={`cursor-pointer rounded-lg border px-3 py-3 text-center text-sm transition ${
                    kehadiran === o.value
                      ? "border-gold bg-gold/15 text-charcoal"
                      : "border-charcoal/15 bg-cream-deep text-taupe hover:border-gold/50"
                  }`}
                >
                  <input
                    type="radio"
                    value={o.value}
                    {...register("kehadiran")}
                    className="sr-only"
                  />
                  {o.label}
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] uppercase tracking-[0.3em] text-taupe" htmlFor="jumlah">
              Jumlah Tamu
            </label>
            <input
              id="jumlah"
              type="number"
              min={1}
              max={10}
              {...register("jumlah", { valueAsNumber: true })}
              className="w-full rounded-lg border border-charcoal/15 bg-cream-deep px-4 py-3 font-serif text-base text-charcoal outline-none transition focus:border-gold"
            />
            {errors.jumlah && <p className="text-xs text-red-700">{errors.jumlah.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-charcoal px-6 py-3.5 text-xs font-medium uppercase tracking-[0.35em] text-cream transition hover:bg-gold hover:text-charcoal disabled:opacity-50"
          >
            {isSubmitting ? "Mengirim..." : "Kirim Konfirmasi"}
          </button>
        </motion.form>
      </div>
    </MotionSection>
  );
}
