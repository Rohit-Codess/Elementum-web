import { Hero } from "@/components/hero/Hero";
import { NextSection } from "@/components/nextSection/NextSection";
import { OfferSection } from "@/components/offerSection/OfferSection";
import { TestimonialSection } from "@/components/testimonialSection/TestimonialSection";
import { FooterSection } from "@/components/footerSection/FooterSection";
import { Navbar } from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-background">
      <Navbar />

      <main className="flex-1 pb-0">
        <Hero />
        <NextSection />
        <OfferSection />
        <TestimonialSection />
        <FooterSection />
      </main>
    </div>
  );
}
