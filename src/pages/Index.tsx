import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="bg-background text-foreground min-h-screen">
    <SEO
      title="Sabasam E&C | Commissioning Consulting Services"
      description="Pre-commissioning, commissioning & startup consulting for complex industrial projects worldwide — chemical, oil & gas, power, data centers and more."
    />
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
