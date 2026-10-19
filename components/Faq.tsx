"use client";

import { useState } from "react";
import { faq } from "@/data/menu";
import Reveal from "./Reveal";

export default function Faq() {
  const [terbuka, setTerbuka] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>

        {faq.map((item, i) => {
          const buka = terbuka === i;
          return (
            <Reveal key={item.tanya} className="faq-item" delay={i * 120}>
              <h3 className="faq-judul">
                <button
                  type="button"
                  className={`faq-tombol ${buka ? "terbuka" : ""}`}
                  aria-expanded={buka}
                  aria-controls={`faq-isi-${i}`}
                  onClick={() => setTerbuka(buka ? null : i)}
                >
                  {item.tanya}
                </button>
              </h3>
              <div id={`faq-isi-${i}`} className={`faq-isi ${buka ? "terbuka" : ""}`}>
                <div>
                  <div className="faq-jawaban">{item.jawab}</div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
