"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { MenuItem } from "@/data/menu";

type Props = {
  menu: MenuItem;
  onTutup: () => void;
};

export default function DetailModal({ menu, onTutup }: Props) {
  const dialog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.body;
    const lebarScrollbar = window.innerWidth - document.documentElement.clientWidth;
    const overflowLama = body.style.overflow;
    const paddingLama = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (lebarScrollbar > 0) body.style.paddingRight = `${lebarScrollbar}px`;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onTutup();
    };
    document.addEventListener("keydown", onKey);
    dialog.current?.focus();

    return () => {
      body.style.overflow = overflowLama;
      body.style.paddingRight = paddingLama;
      document.removeEventListener("keydown", onKey);
    };
  }, [onTutup]);

  return (
    <div
      className="modal-latar"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onTutup();
      }}
    >
      <div
        className="modal-isi"
        role="dialog"
        aria-modal="true"
        aria-label={menu.nama}
        tabIndex={-1}
        ref={dialog}
      >
        <div className="modal-header">
          <h5 className="modal-title">{menu.nama}</h5>
          <button type="button" className="modal-tutup" aria-label="Close" onClick={onTutup}></button>
        </div>
        <div className="modal-body">
          <Image src={menu.gambar} width={menu.lebar} height={menu.tinggi} alt={menu.nama} />
          <p>{menu.detail}</p>
          <span className="modal-harga">{menu.harga}</span>
        </div>
      </div>
    </div>
  );
}
