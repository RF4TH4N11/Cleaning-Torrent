"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
  id: number;
  title: string;
  image: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Pembersihan Rumah Modern",
    image: "/assets/1.jpeg",
  },
  {
    id: 2,
    title: "Cleaning Kantor Profesional",
    image: "/assets/2.jpeg",
  },
  {
    id: 3,
    title: "Deep Cleaning Excellence",
    image: "/assets/3.jpeg",
  },
  {
    id: 4,
    title: "Pembersihan Sofa Berkualitas",
    image: "/assets/4.jpeg",
  },
  {
    id: 5,
    title: "Sanitasi Profesional",
    image: "/assets/5.jpeg",
  },
  {
    id: 6,
    title: "Hasil Sempurna Terjamin",
    image: "/assets/6.jpeg",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
          Galeri Hasil Kerja Kami
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Lihat hasil bersih dan rapi dari berbagai proyek yang sudah kami
          tangani
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group h-64"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                }}
              >
                <p className="text-white font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300"
              >
                ×
              </button>
              <div className="relative w-full h-96">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white text-center mt-4 text-lg font-semibold">
                {selectedImage.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
