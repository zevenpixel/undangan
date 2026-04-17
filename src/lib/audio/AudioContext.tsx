"use client";

import { Howl } from "howler";
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

type AudioState = {
  ready: boolean;
  playing: boolean;
  start: () => void;
  toggle: () => void;
};

const AudioCtx = createContext<AudioState | null>(null);

export function AudioProvider({
  children,
  src,
}: {
  children: React.ReactNode;
  src: string;
}) {
  const howlRef = useRef<Howl | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const sound = new Howl({
      src: [src],
      loop: true,
      volume: 0.45,
      html5: true,
      onload: () => setReady(true),
      onloaderror: () => setReady(true),
    });
    howlRef.current = sound;
    return () => {
      sound.stop();
      sound.unload();
      howlRef.current = null;
    };
  }, [src]);

  const start = () => {
    const s = howlRef.current;
    if (!s) return;
    if (!s.playing()) s.play();
    setPlaying(true);
  };

  const toggle = () => {
    const s = howlRef.current;
    if (!s) return;
    if (s.playing()) {
      s.pause();
      setPlaying(false);
    } else {
      s.play();
      setPlaying(true);
    }
  };

  const value = useMemo(() => ({ ready, playing, start, toggle }), [ready, playing]);

  return <AudioCtx.Provider value={value}>{children}</AudioCtx.Provider>;
}

export function useAudio(): AudioState {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}
