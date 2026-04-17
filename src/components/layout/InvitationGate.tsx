"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Cover } from "@/components/sections/Cover";
import { useAudio } from "@/lib/audio/AudioContext";

export function InvitationGate({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);
  const audio = useAudio();

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.toggle("invitation-closed", !opened);
    return () => document.body.classList.remove("invitation-closed");
  }, [opened]);

  const handleOpen = () => {
    audio.start();
    setOpened(true);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    });
  };

  return (
    <>
      <div aria-hidden={!opened}>{children}</div>

      <AnimatePresence>
        {!opened && (
          <motion.div
            key="cover-gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[300]"
          >
            <Cover onOpen={handleOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
