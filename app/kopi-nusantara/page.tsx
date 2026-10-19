import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Tentang from "@/components/Tentang";
import Faq from "@/components/Faq";
import Kontak from "@/components/Kontak";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Tentang />
      <Faq />
      <Kontak />
      <Footer />
      <BackToTop />
    </>
  );
}
