import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PromoSection from "@/components/PromoSection";
import GallerySection from "@/components/GallerySection";
import TestimonialSection from "@/components/TestimonialSection";
import LocationMapSection from "@/components/LocationMapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <HeroSection />
      <ServicesSection />
      <PromoSection />
      <GallerySection />
      <TestimonialSection />
      <LocationMapSection />
      <Footer />
    </main>
  );
}
