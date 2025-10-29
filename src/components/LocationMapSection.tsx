export default function LocationMapSection() {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
          Lokasi Kami
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Kunjungi kantor kami atau hubungi melalui WhatsApp untuk layanan lebih
          lanjut
        </p>

        <div className="rounded-lg overflow-hidden shadow-lg">
          {/* Google Maps Embed */}
          <iframe
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.7676999511383!2d106.81857146793334!3d-6.420288794772399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sid!4v1761748547519!5m2!1sen!2sid"
            title="Cleaning Torrent Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
