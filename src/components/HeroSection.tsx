import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useT } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const t = useT();
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 text-center max-w-3xl px-6 animate-fade-in-up">
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
          {t.hero.eyebrow}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          {t.hero.titlePart1}{" "}
          <span className="text-gradient">{t.hero.titleHighlight}</span>{" "}
          {t.hero.titlePart2}
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            {t.hero.ctaServices}
          </a>
          <a
            href="#contact"
            className="inline-block border border-border text-foreground font-semibold px-8 py-3 rounded-md hover:bg-secondary transition-colors"
          >
            {t.hero.ctaConsult}
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
};

export default HeroSection;
