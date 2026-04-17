"use client";

import { useEffect, useState } from "react";

export type CountdownValue = {
  hari: number;
  jam: number;
  menit: number;
  detik: number;
  selesai: boolean;
};

function calc(target: Date): CountdownValue {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { hari: 0, jam: 0, menit: 0, detik: 0, selesai: true };
  const hari = Math.floor(diff / (1000 * 60 * 60 * 24));
  const jam = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const menit = Math.floor((diff / (1000 * 60)) % 60);
  const detik = Math.floor((diff / 1000) % 60);
  return { hari, jam, menit, detik, selesai: false };
}

export function useCountdown(target: Date): CountdownValue {
  const [value, setValue] = useState<CountdownValue>(() => calc(target));

  useEffect(() => {
    setValue(calc(target));
    const id = setInterval(() => setValue(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return value;
}
