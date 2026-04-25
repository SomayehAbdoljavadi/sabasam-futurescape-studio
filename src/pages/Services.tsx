import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLanguage } from "@/i18n/LanguageContext";
import { getServices } from "@/i18n/data";

const Services = () => {
  const { lang, t } = useLanguage();
  const services = getServices(lang);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <SEO
        title={
          lang === "de"
            ? "Leistungen | Sabasam E&C Commissioning"
            : "Services | Sabasam E&C Commissioning"
        }
        description={
          lang === "de"
            ? "Engineering, System-Implementierung und Dokumentation für Pre-Commissioning, Commissioning und Inbetriebnahme komplexer Industrieanlagen."
            : "Engineering, system implementation and documentation services for pre-commissioning, commissioning and start-up of complex industrial plants."
        }
      />
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            {t.servicesSection.eyebrow}
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t.servicesSection.title}
          </h1>
          <div className="line-accent w-20 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {lang === "de"
              ? "Drei spezialisierte Leistungsbereiche, die den gesamten Commissioning-Lebenszyklus abdecken — von der Planung bis zur Übergabe."
              : "Three specialised service areas covering the full commissioning lifecycle — from planning to handover."}
          </p>
        </div>
      </section>

      <section className="pb-28 px-6">
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="glass rounded-lg p-8 hover:glow-accent transition-all duration-500 group"
            >
              <h2 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {s.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {s.subtitle}
              </p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                {t.servicesSection.learnMore}{" "}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
