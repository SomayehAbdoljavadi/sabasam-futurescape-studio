import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-background/80" />
    {/* Subtle gradient accent */}
    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

    <div className="relative z-10 text-center max-w-3xl px-6 animate-fade-in-up">
      <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
        Sabasam E&C
      </p>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
        Experts in{" "}
        <span className="text-gradient">Commissioning</span>{" "}
        Consulting Services
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10">
        Pre-commissioning, commissioning & startup solutions for complex industrial projects worldwide.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#services"
          className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
        >
          Our Services
        </a>
        <a
          href="#contact"
          className="inline-block border border-border text-foreground font-semibold px-8 py-3 rounded-md hover:bg-secondary transition-colors"
        >
          Request a Consultation
        </a>
      </div>
    </div>

    <a
      href="#services"
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
    >
      <ChevronDown size={28} />
    </a>
  </section>
);

export default HeroSection;
