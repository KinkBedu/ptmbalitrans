import "@/styles/components/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__eyebrow">Bali Transportation &amp; Car Rental</span>
        <h1 className="hero__title">
          Jelajahi Bali dengan kenyamanan dan keamanan
        </h1>
        <p className="hero__subtitle">
          PTM Bali Trans menyediakan sewa kendaraan harian dan per jam di
          seluruh Bali — airport transfer, tour, dan charter dengan pengemudi
          berpengalaman.
        </p>
        <div className="hero__actions">
          <a href="/booking" className="hero__cta hero__cta--primary">
            Pesan Sekarang
          </a>
          <a href="/fleet" className="hero__cta hero__cta--secondary">
            Lihat Armada
          </a>
        </div>
      </div>
    </section>
  );
}
