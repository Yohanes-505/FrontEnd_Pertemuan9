"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { daftarMenu, type MenuItem } from "@/data/menu";
import Reveal from "./Reveal";
import DetailModal from "./DetailModal";

type Toast = { id: number; pesan: string; tipe: "toast-suka" | "toast-batal" };

export default function Menu() {
  // id menu yg dilike
  const [disukai, setDisukai] = useState<string[]>([]);
  const [menuTerpilih, setMenuTerpilih] = useState<MenuItem | null>(null);
  const [daftarToast, setDaftarToast] = useState<Toast[]>([]);
  const idToast = useRef(0);

  // jumlah like tiap menu
  const jumlahLike = (id: string) => (disukai.includes(id) ? 1 : 0);
  const likeTertinggi = Math.max(...daftarMenu.map((m) => jumlahLike(m.id)));

  function tampilkanToast(pesan: string, tipe: Toast["tipe"]) {
    const id = ++idToast.current;
    // max 3 toast yg muncul
    setDaftarToast((lama) => [...lama.slice(-2), { id, pesan, tipe }]);
    // hilang sendiri setelah animasi selesai
    setTimeout(() => {
      setDaftarToast((lama) => lama.filter((t) => t.id !== id));
    }, 2800);
  }

  function klikSuka(menu: MenuItem) {
    const sudahSuka = disukai.includes(menu.id);
    setDisukai(sudahSuka ? disukai.filter((id) => id !== menu.id) : [...disukai, menu.id]);

    if (sudahSuka) {
      tampilkanToast(`Suka untuk ${menu.nama} dibatalkan`, "toast-batal");
    } else {
      tampilkanToast(`Kamu menyukai ${menu.nama}`, "toast-suka");
    }
  }

  return (
    <>
      <section className="menu" id="menu">
        <div className="container">
          <h2 className="section-title">Menu Favorit Kami</h2>
          <p className="menu-subjudul">Empat pilihan andalan kami. (Klik gambar untuk detail)</p>

          <div className="menu-grid">
            {daftarMenu.map((menu, i) => {
              const suka = disukai.includes(menu.id);
              const terpopuler = likeTertinggi > 0 && jumlahLike(menu.id) === likeTertinggi;

              return (
                <Reveal
                  key={menu.id}
                  className={`card ${terpopuler ? "terpopuler" : ""}`}
                  delay={i * 150}
                >
                  <div className="badge-populer">Terpopuler</div>
                  <Image
                    src={menu.gambar}
                    width={menu.lebar}
                    height={menu.tinggi}
                    alt={menu.nama}
                    onClick={() => setMenuTerpilih(menu)}
                  />
                  <div className="card-body">
                    <h3>{menu.nama}</h3>
                    <p>{menu.ringkas}</p>
                    <span className="price">{menu.harga}</span>
                    <button
                      type="button"
                      className={`btn-like ${suka ? "liked" : ""}`}
                      onClick={() => klikSuka(menu)}
                    >
                      <i className="fa-solid fa-thumbs-up"></i> Suka ({jumlahLike(menu.id)})
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* detail menu */}
      {menuTerpilih && (
        <DetailModal menu={menuTerpilih} onTutup={() => setMenuTerpilih(null)} />
      )}

      {/* wadah toast notifikasi */}
      <div className="toast-container-custom" aria-live="polite">
        {daftarToast.map((t) => (
          <div key={t.id} className={`toast ${t.tipe}`}>
            {t.pesan}
          </div>
        ))}
      </div>
    </>
  );
}
