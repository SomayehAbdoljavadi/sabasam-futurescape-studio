import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="bg-background text-foreground min-h-screen">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <IndustriesSection />
    <AboutSection />
    <WhyUsSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
