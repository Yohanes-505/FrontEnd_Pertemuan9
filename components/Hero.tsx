"use client";

import { useEffect, useState } from "react";

const JAM_BUKA = 8;
const JAM_TUTUP = 21;

function formatJam(jam: number) {
  return String(jam).padStart(2, "0") + ".00";
}

// jam skrg di zona jakarta
function jamSekarangWib() {
  return parseInt(
    new Date().toLocaleString("en-GB", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      hourCycle: "h23",
    }),
    10
  );
}

export default function Hero() {
  const [sedangBuka, setSedangBuka] = useState<boolean | null>(null);

  useEffect(() => {
    const perbarui = () => {
      const jam = jamSekarangWib();
      setSedangBuka(jam >= JAM_BUKA && jam < JAM_TUTUP);
    };
    perbarui();
    const interval = setInterval(perbarui, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        {sedangBuka === null ? (
          <span />
        ) : (
          <span className={`status-buka ${sedangBuka ? "buka" : "tutup"}`}>
            {sedangBuka
              ? `Buka sekarang · sampai ${formatJam(JAM_TUTUP)} WIB`
              : `Tutup · buka lagi pukul ${formatJam(JAM_BUKA)} WIB`}
          </span>
        )}
        <h2>Secangkir Kehangatan Nusantara</h2>
        <p>Kopi asli racikan rumahan, diseduh dengan cinta untuk menemani harimu.</p>
        <a href="#menu" className="btn-hero">
          Lihat Menu
        </a>
      </div>
    </section>
  );
}
