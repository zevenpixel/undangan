import type { Invitation } from "@/lib/types/invitation";

export const invitation: Invitation = {
  meta: {
    title: "Pernikahan Arsa & Naia",
    description:
      "Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Anda untuk hadir di hari bahagia kami.",
  },
  music: {
    src: "/audio/ambient.mp3",
    autoplay: true,
    title: "Until I Found You — Stephen Sanchez (instrumental)",
  },
  cover: {
    greeting: "The Wedding of",
    subtitle: "Sabtu, 14 Juni 2026",
    backgroundImage: "/images/cover.jpg",
  },
  quote: {
    text: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.",
    source: "QS. Ar-Rum: 21",
  },
  mempelai: {
    pria: {
      nama: "Arsa Mahendra Wirawan",
      namaPanggilan: "Arsa",
      bin: "bin",
      ayah: "Bapak Wirawan Adi Nugroho",
      ibu: "Ibu Sekar Larasati",
      instagram: "arsamahendra",
      foto: "/images/mempelai/pria-2.jpg",
    },
    wanita: {
      nama: "Naia Kirana Pramesti",
      namaPanggilan: "Naia",
      bin: "binti",
      ayah: "Bapak Pramesti Hadi Wijaya",
      ibu: "Ibu Anindya Saraswati",
      instagram: "naiakirana",
      foto: "/images/mempelai/wanita-3.jpg",
    },
  },
  acara: [
    {
      id: "akad",
      judul: "Akad Nikah",
      tanggal: "2026-06-14",
      jamMulai: "08:00",
      jamSelesai: "10:00",
      zonaWaktu: "WIB",
      lokasi: "Masjid Al-Hikmah",
      alamat: "Jl. Kenanga No. 12, Menteng, Jakarta Pusat",
      mapsUrl: "https://maps.google.com/?q=Masjid+Al-Hikmah+Menteng",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8347!3d-6.1944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2sid!4v1234567890",
    },
    {
      id: "resepsi",
      judul: "Resepsi",
      tanggal: "2026-06-14",
      jamMulai: "11:00",
      jamSelesai: "14:00",
      zonaWaktu: "WIB",
      lokasi: "Ballroom Dharmawangsa",
      alamat: "Jl. Brawijaya Raya No. 26, Kebayoran Baru, Jakarta Selatan",
      mapsUrl: "https://maps.google.com/?q=The+Dharmawangsa+Jakarta",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d106.7967!3d-6.2447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2sid!4v1234567890",
    },
  ],
  story: [
    {
      tanggal: "2019-09-14",
      judul: "Pertemuan Pertama",
      cerita:
        "Bertemu di sebuah workshop fotografi di Yogyakarta. Hujan turun, dan kami berteduh di bawah atap yang sama.",
    },
    {
      tanggal: "2021-02-28",
      judul: "Awal Cerita",
      cerita:
        "Setelah hampir dua tahun berteman dekat, kami sepakat untuk menjalani hubungan yang lebih serius.",
    },
    {
      tanggal: "2025-12-25",
      judul: "Lamaran",
      cerita:
        "Di hari Natal yang dingin, di puncak Bromo, ia berlutut dan bertanya. Jawaban itu sudah lama disiapkan.",
    },
    {
      tanggal: "2026-06-14",
      judul: "Hari Bahagia Kami",
      cerita: "Dan kini, kami siap memulai bab baru bersama. Doakan kami, ya.",
    },
  ],
  gallery: [
    { src: "/images/gallery/g1.jpg", alt: "Prewedding 1", orientation: "portrait" },
    { src: "/images/gallery/g2.jpg", alt: "Prewedding 2", orientation: "landscape" },
    { src: "/images/gallery/g3.jpg", alt: "Prewedding 3", orientation: "portrait" },
    { src: "/images/gallery/g4.jpg", alt: "Prewedding 4", orientation: "landscape" },
    { src: "/images/gallery/g5.jpg", alt: "Prewedding 5", orientation: "portrait" },
    { src: "/images/gallery/g6.jpg", alt: "Prewedding 6", orientation: "landscape" },
  ],
  liveStream: {
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    provider: "youtube",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  gift: {
    aktif: true,
    deskripsi:
      "Doa restu Anda adalah hadiah terindah. Namun jika ingin memberi tanda kasih, kami menyediakan opsi berikut.",
    rekening: [
      {
        bank: "BCA",
        nomor: "1234567890",
        atasNama: "Arsa Mahendra Wirawan",
      },
      {
        bank: "Mandiri",
        nomor: "9876543210",
        atasNama: "Naia Kirana Pramesti",
      },
    ],
    qris: "/images/gallery/g1.jpg",
  },
  ucapanDummy: [
    {
      nama: "Putri Anggraini",
      pesan: "Selamat ya Arsa & Naia! Semoga sakinah, mawaddah, warahmah. Barakallah!",
      kehadiran: "hadir",
      waktu: "2026-06-01T10:30:00",
    },
    {
      nama: "Rifqi Hadianto",
      pesan: "Akhirnyaaaa. Doa terbaik untuk kalian berdua, langgeng sampai jannah!",
      kehadiran: "hadir",
      waktu: "2026-06-02T14:12:00",
    },
    {
      nama: "Mira Salsabila",
      pesan: "Selamat menempuh hidup baru. Maaf belum bisa hadir, doa selalu menyertai.",
      kehadiran: "tidak",
      waktu: "2026-06-03T09:05:00",
    },
    {
      nama: "Bagas Pratama",
      pesan: "Congrats! See you di Dharmawangsa, ya!",
      kehadiran: "hadir",
      waktu: "2026-06-04T19:48:00",
    },
  ],
  closing: {
    pesan:
      "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua mempelai.",
    tandaTangan: "Kami yang berbahagia,\nKeluarga Arsa & Naia",
  },
};
