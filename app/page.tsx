import Link from "next/link";

export default function Landing() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#ffffff",
        color: "#333333",
      }}
    >
      <h1>Yohanes Phandry</h1>
      <p>NIM: 535250054</p>
      <Link
        href="/kopi-nusantara"
        style={{
          marginTop: "1rem",
          padding: "0.6rem 1.2rem",
          backgroundColor: "#4b2e2e",
          color: "#ffffff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Ke Kopi Nusantara
      </Link>
    </main>
  );
}