"use client";

import { useSearchParams } from "next/navigation";

export function useGuestName(): string {
  const params = useSearchParams();
  const raw = params.get("to") || params.get("kepada");
  if (!raw) return "Tamu Undangan";
  return decodeURIComponent(raw).replace(/\+/g, " ").trim() || "Tamu Undangan";
}
