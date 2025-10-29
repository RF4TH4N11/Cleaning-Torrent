import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services = [
  {
    title: "Cleaning Torrent",
    description:
      "Layanan pembersihan torrent atau tandon air dengan hasil maksimal dan profesional.",
    icon: "🧹",
  },
  {
    title: "Tembak Keran",
    description:
      "Pembersihan dan perawatan keran dengan teknologi terbaik untuk hasil sempurna.",
    icon: "🚰",
  },
];

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const whatsappLink = `https://wa.me/6285212215775?text=Halo,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(
    title
  )}.%20Bisa%20kirim%20detail%20harganya?`;

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 cursor-pointer h-full border-2 border-transparent hover:border-green-500">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center gap-2 text-green-600 font-semibold">
          <FaWhatsapp size={18} />
          <span>Tanyakan Harga</span>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
          Layanan Kami
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Berbagai layanan kebersihan profesional untuk memenuhi semua kebutuhan
          Anda
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
