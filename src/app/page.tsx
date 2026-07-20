import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/Trust";
import { AboutSection } from "@/components/sections/About";
import { ServicesSection } from "@/components/sections/Services";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/Process";
import { IndustriesSection } from "@/components/sections/Industries";
import { StatsSection } from "@/components/sections/Stats";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <TrustSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <IndustriesSection />
        <StatsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
