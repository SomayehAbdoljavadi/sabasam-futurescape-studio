import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import { useT } from "@/i18n/LanguageContext";

const images: Record<string, string> = {
  engineering: service1,
  "system-implementation": service2,
  documentation: service3,
};

const slugs = ["engineering", "system-implementation", "documentation"] as const;

const ServicesSection = () => {
  const t = useT();
  return (
    <section id="services" className="py-28 px-6">
      <div className="container mx-auto">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3 text-center">
          {t.servicesSection.eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          {t.servicesSection.title}
        </h2>
        <div className="line-accent w-16 mx-auto mb-16" />

        <div className="grid md:grid-cols-3 gap-8">
          {slugs.map((slug) => {
            const item = t.servicesSection.items[slug];
            return (
              <Link
                key={slug}
                to={`/services/${slug}`}
                className="group glass rounded-lg overflow-hidden hover:glow-accent transition-all duration-500"
              >
                <div className="overflow-hidden h-52">
                  <img
                    src={images[slug]}
                    alt={item.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {t.servicesSection.learnMore}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
