"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Divider, SectionLabel, SectionTitle } from "@/components/ui/Divider";
import { Lightbox } from "@/components/ui/Lightbox";
import { MotionSection } from "@/components/ui/MotionSection";
import { invitation } from "@/lib/data/invitation";
import { revealItem } from "@/lib/hooks/useScrollReveal";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <MotionSection id="gallery" stagger className="bg-cream">
      <div className="mx-auto max-w-6xl">
        <motion.div variants={revealItem} className="flex flex-col items-center gap-3">
          <SectionLabel>Our Moments</SectionLabel>
          <SectionTitle>Galeri</SectionTitle>
          <Divider className="my-3" />
        </motion.div>

        <motion.div
          variants={revealItem}
          className="mt-12 columns-2 gap-3 sm:columns-3 sm:gap-4 [&>*]:mb-3 sm:[&>*]:mb-4"
        >
          {invitation.gallery.map((item, i) => (
            <button
              type="button"
              key={item.src}
              onClick={() => setActive(i)}
              className={`group relative block w-full overflow-hidden rounded-xl border border-gold/20 bg-cream-deep shadow-[var(--shadow-soft)] ${
                item.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-charcoal/0 transition group-hover:bg-charcoal/10" />
            </button>
          ))}
        </motion.div>
      </div>

      <Lightbox
        items={invitation.gallery}
        index={active}
        onClose={() => setActive(null)}
        onIndexChange={setActive}
      />
    </MotionSection>
  );
}
