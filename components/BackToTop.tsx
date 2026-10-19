"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [terlihat, setTerlihat] = useState(false);

  // muncul stlh halaman discroll lebih dari 300px
  useEffect(() => {
    const onScroll = () => setTerlihat(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top ${terlihat ? "visible" : ""}`}
      aria-label="Kembali ke atas"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
