"use client";

import { useState } from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

export default function TestimonialFormModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    quote: "",
    rating: 5,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const whatsappNumber = "6285212215775";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Format pesan untuk WhatsApp
      const message = `*Testimoni Baru dari ${formData.name}*

📍 Lokasi: ${formData.location}
⭐ Rating: ${"★".repeat(formData.rating)}${"☆".repeat(5 - formData.rating)}

💬 Testimoni:
"${formData.quote}"

---
Testimoni ini dikirim melalui form di website Cleaning Torrent`;

      // Buka WhatsApp dengan pesan
      const encodedMessage = encodeURIComponent(message);
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
        "_blank"
      );

      // Reset form setelah submit
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          location: "",
          quote: "",
          rating: 5,
        });
        setSubmitted(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="bg-green-600 text-white p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Bagikan Testimoni Anda</h2>
            <p className="text-green-100 text-sm">
              Ceritakan pengalaman Anda dengan Cleaning Torrent
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-2xl font-bold hover:text-green-200 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Form or Success Message */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <FaCheckCircle
                className="text-green-500 mx-auto mb-4"
                size={48}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Terima Kasih!
              </h3>
              <p className="text-gray-600 mb-4">
                Testimoni Anda telah dikirim melalui WhatsApp. Kami akan segera
                menampilkannya di website.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Contoh: Siska Rahman"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors text-black placeholder-gray-400"
                />
              </div>

              {/* Location Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Lokasi/Area *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Contoh: Jakarta Selatan"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors text-black placeholder-gray-400"
                />
              </div>

              {/* Rating Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Rating *
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          rating: star,
                        }))
                      }
                      className="transition-transform duration-200 hover:scale-110"
                    >
                      <FaStar
                        size={28}
                        className={
                          star <= formData.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {formData.rating} dari 5 bintang
                </p>
              </div>

              {/* Testimonial Text */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Testimoni Anda *
                </label>
                <textarea
                  name="quote"
                  value={formData.quote}
                  onChange={handleChange}
                  placeholder="Ceritakan pengalaman Anda dengan layanan kami... Contoh: Rumah jadi kinclong dalam 3 jam! Pekerja ramah dan rapi."
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors resize-none text-black placeholder-gray-400"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.quote.length}/200 karakter
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={
                  loading ||
                  !formData.name ||
                  !formData.location ||
                  !formData.quote
                }
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 disabled:cursor-not-allowed"
              >
                {loading ? "Mengirim..." : "Kirim Testimoni via WhatsApp"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Testimoni akan dikirim ke WhatsApp kami untuk verifikasi
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
