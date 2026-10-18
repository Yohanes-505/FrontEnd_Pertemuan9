export default function Home() {
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
      <a href="/kopi-nusantara/index.html">
        <button
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
          Kopi Nusantara
        </button>
      </a>
    </main>
  );
}