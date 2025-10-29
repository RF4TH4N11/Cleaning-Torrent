"use client";

import { useState } from "react";
import TestimonialFormModal from "./TestimonialFormModal";

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Siska",
    location: "Jakarta Selatan",
    quote:
      "Layanan Cleaning Torrent luar biasa! Rumah jadi kinclong dalam 3 jam. Pekerja ramah dan rapi. Bakal pakai layanan ini lagi!",
    rating: 5,
  },
  {
    name: "Budi",
    location: "Jakarta Pusat",
    quote:
      "Tembak keran-nya sangat memuaskan! Keran yang kusam jadi mengkilap seperti baru. Profesional dan tepat waktu. Sangat puas!",
    rating: 5,
  },
  {
    name: "Ibu Rina",
    location: "Jakarta Barat",
    quote:
      "Cleaning Torrent membersihkan rumah saya pasca renovasi dengan sempurna. Semua debu terangkat dengan baik. Rekomendasi banget!",
    rating: 5,
  },
  {
    name: "Pak Ahmad",
    location: "Jakarta Timur",
    quote:
      "Tembak keran di rumah dan kantor saya hasilnya maksimal. Keran jadi bersih berkilau. Pelayanan cepat dan harga sangat kompetitif!",
    rating: 5,
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 italic mb-4 text-lg">"{testimonial.quote}"</p>
      <div>
        <p className="font-bold text-gray-900">{testimonial.name}</p>
        <p className="text-gray-600 text-sm">📍 {testimonial.location}</p>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
          Testimoni Pelanggan
        </h2>
        <p className="text-center text-gray-600 text-lg mb-4 max-w-2xl mx-auto">
          Kepuasan pelanggan adalah prioritas utama kami. Dengarkan apa kata
          mereka!
        </p>

        {/* Button Bagikan Testimoni */}
        <div className="text-center mb-12">
          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span className="text-lg"></span>
            Bagikan Testimoni Anda
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Modal Form */}
      <TestimonialFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  );
}
