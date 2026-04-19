import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getIndustries } from "@/i18n/data";

const IndustriesSection = () => {
  const { lang, t } = useLanguage();
  const industries = getIndustries(lang);

  return (
    <section id="industries" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            {t.industriesSection.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t.industriesSection.title}
          </h2>
          <div className="line-accent w-20 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t.industriesSection.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              to={`/target-industries/${ind.slug}`}
              className="group rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm p-8 hover:border-primary/30 hover:bg-card/50 transition-all duration-500"
            >
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {ind.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {ind.subtitle}
              </p>
              <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {t.industriesSection.explore}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/target-industries"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300"
          >
            {t.industriesSection.viewAll}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
