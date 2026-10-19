import Image from "next/image";
import Reveal from "./Reveal";

export default function Tentang() {
  return (
    <section className="tentang" id="tentang">
      <div className="container">
        <Reveal className="tentang-flex">
          <Image
            src="/images/logo-kedai-kopi-nusantara.jpeg"
            width={640}
            height={640}
            alt="Kedai Kopi Nusantara"
          />
          <div className="tentang-text">
            <h2 className="section-title">Tentang Kami</h2>
            <p>
              Kopi Nusantara adalah usaha kedai kopi rumahan yang berdiri dari kecintaan terhadap
              kopi lokal. Kami berkomitmen menyajikan secangkir kopi berkualitas dengan harga yang
              bersahabat untuk semua kalangan.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
