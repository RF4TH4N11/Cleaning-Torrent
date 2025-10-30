import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  const whatsappLink =
    "https://wa.me/6285212215775?text=Halo%20Cleaning%20Torrent,%20saya%20mau%20pesan%20layanan...";

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/assets/background.png')",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Blur effect pada background */}
      <div
        className="absolute inset-0"
        style={{ backdropFilter: "blur(4px)" }}
      ></div>

      {/* Overlay untuk memastikan text readable */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Cleaning Torrent
        </h1>
        <p className="text-xl md:text-2xl text-white font-semibold mb-4 drop-shadow-md">
          Bersih Kilat, Harga Terjangkau!
        </p>
        <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto drop-shadow-md">
          Layanan kebersihan torrent atau tandon air dengan hasil maksimal.
          Percayakan kebersihan Anda pada ahlinya.
        </p>

        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg shadow-lg"
        >
          <FaWhatsapp size={28} />
          Pesan Sekarang via WhatsApp
        </Link>
      </div>
    </section>
  );
}
