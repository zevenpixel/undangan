"use client";

import { Suspense } from "react";
import { AudioProvider } from "@/lib/audio/AudioContext";
import { invitation } from "@/lib/data/invitation";
import { ToastProvider } from "@/lib/ui/ToastContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <AudioProvider src={invitation.music.src}>
        <ToastProvider>{children}</ToastProvider>
      </AudioProvider>
    </Suspense>
  );
}
