export type Person = {
  nama: string;
  namaPanggilan: string;
  bin: string;
  ayah: string;
  ibu: string;
  instagram?: string;
  foto: string;
};

export type EventType = "akad" | "resepsi";

export type AcaraEvent = {
  id: EventType;
  judul: string;
  tanggal: string;
  jamMulai: string;
  jamSelesai: string;
  zonaWaktu: "WIB" | "WITA" | "WIT";
  lokasi: string;
  alamat: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
};

export type StoryItem = {
  tanggal: string;
  judul: string;
  cerita: string;
  foto?: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  orientation: "portrait" | "landscape";
};

export type BankAccount = {
  bank: string;
  nomor: string;
  atasNama: string;
  logo?: string;
};

export type LiveStream = {
  url: string;
  provider: "youtube" | "zoom" | "instagram";
  embedUrl?: string;
};

export type Invitation = {
  meta: {
    title: string;
    description: string;
    ogImage?: string;
  };
  music: {
    src: string;
    autoplay: boolean;
    title?: string;
  };
  cover: {
    greeting: string;
    subtitle: string;
    backgroundImage: string;
  };
  quote: {
    text: string;
    source: string;
  };
  mempelai: {
    pria: Person;
    wanita: Person;
  };
  acara: AcaraEvent[];
  story: StoryItem[];
  gallery: GalleryItem[];
  liveStream?: LiveStream;
  gift: {
    aktif: boolean;
    deskripsi: string;
    rekening: BankAccount[];
    qris?: string;
  };
  ucapanDummy: {
    nama: string;
    pesan: string;
    kehadiran: "hadir" | "tidak" | "ragu";
    waktu: string;
  }[];
  closing: {
    pesan: string;
    tandaTangan: string;
  };
};
