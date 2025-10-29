import Link from "next/link";
import { FaWhatsapp, FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const whatsappLink =
    "https://wa.me/6285212215775?text=Halo%20Cleaning%20Torrent,%20saya%20mau%20pesan%20layanan...";
  const whatsappNumber = "6285212215775";

  const operationalHours = [
    { day: "Senin", hours: "08.30 - 17.00" },
    { day: "Selasa", hours: "08.30 - 17.00" },
    { day: "Rabu", hours: "08.30 - 17.00" },
    { day: "Kamis", hours: "08.30 - 17.00" },
    { day: "Jumat", hours: "08.30 - 17.00" },
    { day: "Sabtu", hours: "09.00 - 17.00" },
    { day: "Minggu", hours: "09.00 - 17.00" },
  ];

  const workAreas = [
    "Jakarta Selatan",
    "Jakarta Pusat",
    "Jakarta Barat",
    "Jakarta Timur",
    "Jakarta Utara",
    "Tangerang",
    "Bekasi",
    "Depok",
    "Bogor",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Address */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Cleaning Torrent</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Layanan kebersihan profesional yang dapat diandalkan untuk rumah,
              kantor, dan komersial Anda.
            </p>

            {/* Address */}
            <div className="flex gap-3 mb-4">
              <FaMapMarkerAlt
                className="text-green-500 shrink-0 mt-1"
                size={18}
              />
              <div>
                <p className="text-gray-400 text-sm font-semibold">Alamat</p>
                <p className="text-white text-sm">
                  Kelurahan Ratujaya, Rt.02 Rw.06, Kec.Cipayung, Kota.Depok,
                  Jawa Barat 16439
                </p>
              </div>
            </div>

            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 w-fit text-sm"
            >
              <FaWhatsapp size={18} />
              Chat WhatsApp
            </Link>
          </div>

          {/* Jam Operasional */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaClock size={20} className="text-green-500" />
              Jam Operasional
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {operationalHours.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span className="font-semibold">{item.day}:</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Area Layanan */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaMapMarkerAlt size={20} className="text-green-500" />
              Area Layanan
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {workAreas.map((area, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Hubungi Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaWhatsapp
                  className="mt-1 text-green-500 shrink-0"
                  size={20}
                />
                <div>
                  <p className="text-gray-400 text-sm mb-1">WhatsApp</p>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-green-400 transition-colors text-sm"
                  >
                    +62 895 1757 4040
                  </a>
                </div>
              </div>
              <div className="bg-yellow-500/20 border border-yellow-500/40 rounded p-4">
                <p className="text-sm text-yellow-200">
                  ⚠️{" "}
                  <strong>Pemesanan & pertanyaan hanya melalui WhatsApp</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-green-600 rounded-lg p-8 text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">
            Siap Membuat Torent Anda Bersih?
          </h3>
          <p className="text-green-100 mb-6">
            Hubungi kami sekarang dan dapatkan penawaran terbaik untuk seluruh
            area Jabodetabek (Jakarta, Bekasi, Depok, Tangerang, dan Bogor)
          </p>
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <FaWhatsapp size={24} />
            Pesan Sekarang
          </Link>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Cleaning Torrent. Semua hak dilindungi.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Kami berkomitmen memberikan layanan kebersihan terbaik untuk Anda.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
