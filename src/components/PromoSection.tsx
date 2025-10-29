export default function PromoSection() {
  return (
    <section
      className="py-20 px-4"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(74, 222, 128), rgb(34, 197, 94))",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6">
          <div className="bg-yellow-300 text-gray-900 font-bold py-2 px-6 rounded-full text-lg">
            🎉 PROMO SPESIAL 🎉
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          GRATIS BIAYA TRANSPORTASI!
        </h2>

        <p className="text-xl md:text-2xl text-white mb-8 font-semibold">
          Berlaku untuk area Jakarta & Sekitarnya
        </p>

        <div className="bg-gray-600 bg-opacity-20 backdrop-blur-sm rounded-lg p-8 mb-8">
          <p className="text-white text-lg">
            Dapatkan bonus gratis ongkir untuk semua layanan tanpa minimum
            pembelian. Penawaran terbatas hanya untuk bulan ini!
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <div className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg text-lg">
            ✨ Kualitas Terjamin
          </div>
          <div className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg text-lg">
            ⏱️ Cepat & Efisien
          </div>
          <div className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg text-lg">
            💰 Harga Bersaing
          </div>
        </div>
      </div>
    </section>
  );
}
