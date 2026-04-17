import type { AcaraEvent } from "@/lib/types/invitation";

const tzOffset = { WIB: "+0700", WITA: "+0800", WIT: "+0900" } as const;

function toIcsDate(date: string, time: string, tz: keyof typeof tzOffset): string {
  const [y, m, d] = date.split("-");
  const [hh, mm] = time.split(":");
  const offset = tzOffset[tz];
  const sign = offset[0] === "+" ? -1 : 1;
  const offsetHours = parseInt(offset.slice(1, 3), 10);
  const localUtc = Date.UTC(
    parseInt(y, 10),
    parseInt(m, 10) - 1,
    parseInt(d, 10),
    parseInt(hh, 10) + sign * offsetHours,
    parseInt(mm, 10),
  );
  const dt = new Date(localUtc);
  return dt.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export function generateIcs(event: AcaraEvent, mempelai: string): string {
  const start = toIcsDate(event.tanggal, event.jamMulai, event.zonaWaktu);
  const end = toIcsDate(event.tanggal, event.jamSelesai, event.zonaWaktu);
  const uid = `${event.id}-${event.tanggal}@undangan.local`;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Undangan//ID",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${start}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${event.judul} - ${mempelai}`,
    `LOCATION:${event.lokasi}, ${event.alamat}`,
    `DESCRIPTION:${event.judul} pernikahan ${mempelai}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function downloadIcs(event: AcaraEvent, mempelai: string) {
  const ics = generateIcs(event, mempelai);
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${event.id}-${event.tanggal}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
