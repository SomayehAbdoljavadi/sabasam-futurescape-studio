import { Shield, Users, Award, Globe } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

const icons = [Shield, Users, Award, Globe];

const WhyUsSection = () => {
  const t = useT();
  return (
    <section id="why-us" className="py-28 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3 text-center">
          {t.whyUs.eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          {t.whyUs.title}
        </h2>
        <div className="line-accent w-16 mx-auto mb-16" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.whyUs.items.map((r, i) => {
            const Icon = icons[i];
            return (
              <div
                key={r.title}
                className="glass rounded-lg p-8 text-center hover:glow-accent transition-all duration-500 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={26} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
