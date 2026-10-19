"use client";

import { useRef, useState, type FormEvent } from "react";

const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Isi = { nama: string; email: string; pesan: string };
type Error = Partial<Record<keyof Isi, string>>;

const kosong: Isi = { nama: "", email: "", pesan: "" };

function validasi(isi: Isi): Error {
  const error: Error = {};
  const nama = isi.nama.trim();
  const email = isi.email.trim();
  const pesan = isi.pesan.trim();

  if (nama === "") error.nama = "Nama wajib diisi.";
  else if (nama.length < 3) error.nama = "Nama minimal 3 huruf.";

  if (email === "") error.email = "Email wajib diisi.";
  else if (!polaEmail.test(email)) error.email = "Format email belum benar, contoh: nama@email.com";

  if (pesan === "") error.pesan = "Pesan wajib diisi.";
  else if (pesan.length < 10) error.pesan = "Pesan minimal 10 karakter.";

  return error;
}

export default function Kontak() {
  const [isi, setIsi] = useState<Isi>(kosong);
  const [error, setError] = useState<Error>({});
  const [status, setStatus] = useState("");
  const timerStatus = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const form = useRef<HTMLFormElement>(null);

  function ubah(field: keyof Isi, nilai: string) {
    setIsi((lama) => ({ ...lama, [field]: nilai }));
    // error kolom itu hilang begitu pengguna mulai mengetik lagi
    setError((lama) => ({ ...lama, [field]: undefined }));
  }

  function kirim(e: FormEvent) {
    e.preventDefault();

    const hasil = validasi(isi);
    setError(hasil);

    if (Object.keys(hasil).length > 0) {
      const urutan: (keyof Isi)[] = ["nama", "email", "pesan"];
      const pertama = urutan.find((f) => hasil[f]);
      if (pertama) form.current?.querySelector<HTMLElement>(`#${pertama}`)?.focus();
      return;
    }

    setStatus(`Terima kasih, ${isi.nama.trim()}! Pesan kamu sudah terkirim.`);
    setIsi(kosong);

    clearTimeout(timerStatus.current);
    timerStatus.current = setTimeout(() => setStatus(""), 4300);
  }

  return (
    <section className="kontak" id="kontak">
      <div className="container">
        <div className="kontak-baris">
          <div className="kontak-info">
            <h2>Hubungi &amp; Pesan</h2>
            <p>
              Isi formulir berikut, tim kami akan segera menghubungi Anda kembali.
            </p>
            <ul className="kontak-detail">
              <li>
                <strong>Alamat:</strong> Jl. Jeruk, Jakarta Barat
              </li>
              <li>
                <strong>WhatsApp:</strong> 0857-7060-7933
              </li>
              <li>
                <strong>Jam Buka:</strong> Setiap hari, 08.00 &ndash; 21.00
              </li>
            </ul>

            <div className="social-links">
              <a
                href="https://wa.me/6285770607933"
                className="social-btn whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/kopinusantara.kopnus?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                className="social-btn instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/kopinusantaraa/"
                className="social-btn facebook"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.tiktok.com/@kedai_kosim?is_from_webapp=1&sender_device=pc"
                className="social-btn tiktok"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>

          <div>
            <form ref={form} className="kontak-form" onSubmit={kirim} noValidate>
              <div className="form-group jarak-sedang">
                <label htmlFor="nama">Nama</label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  className={error.nama ? "input-error" : ""}
                  placeholder="Nama lengkap Anda"
                  value={isi.nama}
                  onChange={(e) => ubah("nama", e.target.value)}
                />
                <span className="error-msg">{error.nama}</span>
              </div>
              <div className="form-group jarak-sedang">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={error.email ? "input-error" : ""}
                  placeholder="nama@email.com"
                  value={isi.email}
                  onChange={(e) => ubah("email", e.target.value)}
                />
                <span className="error-msg">{error.email}</span>
              </div>
              <div className="form-group jarak-besar">
                <label htmlFor="pesan">Pesan</label>
                <textarea
                  id="pesan"
                  name="pesan"
                  rows={4}
                  className={error.pesan ? "input-error" : ""}
                  placeholder="Tuliskan pesanan atau pertanyaan Anda"
                  value={isi.pesan}
                  onChange={(e) => ubah("pesan", e.target.value)}
                />
                <span className="error-msg">{error.pesan}</span>
              </div>
              <button type="submit" className="btn-kirim">
                Kirim Pesan
              </button>
              {status && <div className="form-status">{status}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
