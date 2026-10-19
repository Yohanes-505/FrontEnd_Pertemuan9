import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kopi Nusantara - Kedai Kopi Rumahan",
  description: "Kopi asli racikan rumahan, diseduh dengan cinta untuk menemani harimu.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
