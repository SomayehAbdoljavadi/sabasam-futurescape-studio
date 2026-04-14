import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="bg-background text-foreground min-h-screen">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <WhyUsSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
