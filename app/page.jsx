"use client";

import BackgroundEffects from "@/components/landing/BackgroundEffects";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import VisionSection from "@/components/landing/VisionSection";
import CoreFeaturesSection from "@/components/landing/CoreFeaturesSection";
import RoadmapSection from "@/components/landing/RoadmapSection";
import ProductsSection from "@/components/landing/ProductsSection";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#050B14] text-white min-h-screen overflow-hidden selection:bg-[#00E5FF] selection:text-black">
      <BackgroundEffects />
      <Header />
      <HeroSection />
      <VisionSection />
      <CoreFeaturesSection />
      <RoadmapSection />
      <ProductsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}