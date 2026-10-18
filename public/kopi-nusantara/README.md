# Kopi Nusantara — Layout & Components dengan Bootstrap

Tugas Studi Kasus Bootstrap (Pertemuan 6-7) — Front-End Programming (TK23023).

Lanjutan dari Tugas Responsive UI (Pertemuan 4) dan Interaktivitas jQuery (Pertemuan 5). Halaman company profile kedai kopi "Kopi Nusantara" kini dibangun ulang (refactor) menggunakan Bootstrap 5 untuk sistem grid dan komponen UI, tanpa mengubah konten maupun identitas visual yang sudah ada. Kode jQuery dari Pertemuan 5 tetap dipertahankan untuk fitur yang belum digantikan Bootstrap.

## Anggota Kelompok

| Nama | NIM |
| Yohanes Phandry | 535250054 |
| Khresnanda Putra Wirawan | 535250071 |
| Kenzie Agustin | 535250079 |
| Elfrandt Goldjer | 535250092 |
| Nicho Louis Salim | 535250095 |

## Komponen Bootstrap yang Digunakan

1. **Navbar responsif** (`navbar-expand-sm`) — menu horizontal di layar lebar, otomatis menjadi hamburger (`navbar-toggler`) di mobile, dengan `collapse` yang ditutup otomatis lewat `bootstrap.Collapse` saat tautan diklik.
2. **Grid system** (`.container`, `.row`, `.col-*`) — tata letak menu memakai `col-12 col-md-6 col-lg-3` (3 breakpoint: mobile 1 kolom, tablet 2 kolom, desktop 4 kolom).
3. **Card** — setiap menu ditampilkan dengan `card`, `card-img-top`, `card-body`, `card-title`, `card-text`.
4. **Modal** — menampilkan detail tiap menu (deskripsi lengkap & harga) saat gambar pada card diklik.
5. **Accordion** — bagian FAQ, menggantikan accordion manual jQuery dari Pertemuan 5.
6. **Utility class** — `d-flex`, `flex-column`/`flex-md-row`, `text-center`, `rounded-circle`, `shadow-sm`, `py-*`, `gap-*`, `fw-bold`, dan lainnya, dipakai di berbagai bagian untuk mengurangi kebutuhan CSS kustom.

## Fitur Interaktif jQuery yang Tetap Dipertahankan

1. **Tombol suka** — penghitung pada tiap kartu menu; klik pertama menambah, klik kedua membatalkan; card dengan like terbanyak otomatis dapat badge "Terpopuler".
2. **Tombol kembali ke atas** — muncul dengan `fadeIn()` setelah halaman di-scroll, lalu menggulung halaman dengan `animate({ scrollTop: 0 })`.
3. **Validasi formulir kontak** — memeriksa nama, email, dan pesan; menampilkan pesan error per kolom serta notifikasi sukses dengan `slideDown()`.
4. **Animasi masuk hero** — judul, paragraf, dan tombol muncul bergantian saat halaman dibuka.
5. **Toast notification** — notifikasi kecil di pojok kiri bawah saat menu disukai/dibatalkan (wadah diberi class `toast-container-custom` agar tidak bentrok dengan komponen Toast bawaan Bootstrap).
6. **Status buka/tutup** — badge otomatis menyesuaikan teks & warna berdasarkan jam saat ini (WIB).
7. **Animasi reveal saat scroll** — elemen `.card`, `.faq-item`, dan `.tentang-flex` muncul bertahap memakai `IntersectionObserver`.

## Metode & Fungsi yang Digunakan

- **jQuery** — selector & event handling (`.click()`, `.submit()`, `.scroll()`), manipulasi DOM & class (`toggleClass()`, `addClass()`, `removeClass()`, `.text()`), efek & animasi (`slideDown()`, `slideUp()`, `fadeIn()`, `fadeOut()`, `animate()`, `delay()`)
- **Bootstrap JS (bundle)** — `data-bs-toggle="collapse"`, `data-bs-toggle="modal"`, `bootstrap.Collapse.getOrCreateInstance()`

## Struktur Berkas

```
index.html    — struktur halaman (navbar, grid, card, modal, accordion Bootstrap)
style.css     — kustomisasi warna/tipografi Bootstrap + CSS manual yang belum tergantikan
script.js     — kode jQuery yang tersisa + integrasi kecil dengan Bootstrap JS
images/       — foto produk dan logo
```

## Urutan Pemuatan Script

Wajib berurutan sebelum `</body>`:
```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="script.js"></script>
```

## Cara Menjalankan

Unduh atau clone repositori ini, lalu buka `index.html` di browser. Diperlukan koneksi internet agar Bootstrap, jQuery, dan ikon Font Awesome dapat dimuat dari CDN.
