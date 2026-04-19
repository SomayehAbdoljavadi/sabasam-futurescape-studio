import { Link } from "react-router-dom";
import aboutBg from "@/assets/about-bg.jpg";
import { useT } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const t = useT();
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            {t.aboutSection.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t.aboutSection.title}
          </h2>
          <div className="line-accent w-16 mb-8" />
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t.aboutSection.p1}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {t.aboutSection.p2}
          </p>
          <Link
            to="/about-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300"
          >
            {t.aboutSection.learnMore}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <Link to="/about-us" className="relative rounded-lg overflow-hidden glow-accent group cursor-pointer">
          <img
            src={aboutBg}
            alt="Sabasam engineering team"
            loading="lazy"
            width={1280}
            height={860}
            className="w-full h-80 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
