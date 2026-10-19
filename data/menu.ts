export type MenuItem = {
  id: string;
  nama: string;
  gambar: string;
  lebar: number;
  tinggi: number;
  ringkas: string;
  detail: string;
  harga: string;
};

export const daftarMenu: MenuItem[] = [
  {
    id: "kopi-hitam",
    nama: "Kopi Hitam",
    gambar: "/images/kopi-hitam.png",
    lebar: 600,
    tinggi: 400,
    ringkas:
      "Kopi robusta lokal yang diseduh tubruk. Pahit pas dan aromanya kuat yang cocok untuk memulai hari.",
    detail:
      "Kopi robusta lokal pilihan yang diseduh dengan metode tubruk tradisional. Menghadirkan rasa pahit yang pas dan aroma yang sangat kuat. Pilihan sempurna untuk memberikan energi ekstra di pagi hari.",
    harga: "Rp 12.000",
  },
  {
    id: "kopi-susu-gula-aren",
    nama: "Kopi Susu Gula Aren",
    gambar: "/images/kopi-susu-gula-aren.png",
    lebar: 600,
    tinggi: 400,
    ringkas:
      "Espresso, susu segar, dan gula aren asli dalam satu gelas. Manisnya tidak berlebihan.",
    detail:
      "Kombinasi sempurna dari double shot espresso, susu segar berkualitas, dan manisnya gula aren murni. Rasa manisnya pas dan tidak menutupi karakter asli dari kopi itu sendiri.",
    harga: "Rp 18.000",
  },
  {
    id: "cappuccino",
    nama: "Cappuccino",
    gambar: "/images/cappuccino.jpg",
    lebar: 478,
    tinggi: 360,
    ringkas:
      "Espresso dengan susu panas dan lapisan foam tebal. Hangat, creamy, dan seimbang di setiap tegukan.",
    detail:
      "Dibuat dari espresso base klasik dengan takaran susu panas yang presisi serta lapisan foam yang tebal di atasnya. Cita rasa yang hangat, creamy, namun rasa kopinya tetap menonjol.",
    harga: "Rp 20.000",
  },
  {
    id: "latte",
    nama: "Latte",
    gambar: "/images/iced-latte.jpg",
    lebar: 925,
    tinggi: 600,
    ringkas:
      "Espresso berpadu susu steam yang halus dengan foam tipis. Rasa kopinya ringan dan mudah dinikmati.",
    detail:
      "Bagi yang menyukai kopi dengan rasa yang lebih lembut. Latte kami memadukan espresso ringan dengan susu steam dominan dan foam tipis, menghasilkan tekstur velvet yang sangat nikmat.",
    harga: "Rp 20.000",
  },
];

export const faq = [
  {
    tanya: "Apakah Kopi Nusantara buka setiap hari?",
    jawab: "Ya, kami buka setiap hari mulai pukul 08.00 sampai 21.00 WIB.",
  },
  {
    tanya: "Apakah bisa pesan lewat online?",
    jawab:
      "Bisa, kamu bisa hubungi kami lewat Instagram atau WhatsApp yang tertera di bagian Kontak.",
  },
  {
    tanya: "Apakah tersedia menu tanpa gula?",
    jawab: "Tersedia, kamu bisa request level gula sesuai selera saat memesan.",
  },
  {
    tanya: "Apakah ada fasilitas WiFi dan stopkontak?",
    jawab:
      "Kami menyediakan WiFi gratis yang cepat dan banyak stopkontak, cocok untuk mengerjakan tugas atau work from cafe.",
  },
];
