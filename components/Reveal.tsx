"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  className?: string;
  delay?: number;
  children: ReactNode;
};

// animasi reveal saat scroll 
export default function Reveal({ className = "", delay = 0, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [tampil, setTampil] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timer);
        if (entry.isIntersecting) {
          timer = setTimeout(() => setTampil(true), delay);
        } else {
          setTampil(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div ref={ref} className={`${className} ${tampil ? "tampil" : ""}`.trim()}>
      {children}
    </div>
  );
}
