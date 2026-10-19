"use client";

import { useState } from "react";

const tautan = [
  { href: "#hero", label: "Beranda" },
  { href: "#menu", label: "Menu" },
  { href: "#tentang", label: "Tentang" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  // menu mobile
  const [terbuka, setTerbuka] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <a className="logo" href="#hero">
            Kopi Nusantara
          </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarKopnus"
            aria-expanded={terbuka}
            aria-label="Toggle navigation"
            onClick={() => setTerbuka(!terbuka)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`navbar-menu ${terbuka ? "buka" : ""}`} id="navbarKopnus">
            <ul className="navbar-nav">
              {tautan.map((t) => (
                <li key={t.href}>
                  <a className="nav-link" href={t.href} onClick={() => setTerbuka(false)}>
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
