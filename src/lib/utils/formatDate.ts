import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

export function formatTanggalLengkap(isoDate: string): string {
  return format(parseISO(isoDate), "EEEE, d MMMM yyyy", { locale: id });
}

export function formatTanggalSingkat(isoDate: string): string {
  return format(parseISO(isoDate), "d MMM yyyy", { locale: id });
}

export function formatHari(isoDate: string): string {
  return format(parseISO(isoDate), "EEEE", { locale: id });
}

export function formatBulanTahun(isoDate: string): string {
  return format(parseISO(isoDate), "MMMM yyyy", { locale: id });
}

export function combineDateTime(date: string, time: string): Date {
  return parseISO(`${date}T${time}:00`);
}
