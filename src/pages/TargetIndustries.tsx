import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { getIndustries } from "@/i18n/data";

const TargetIndustries = () => {
  const { lang, t } = useLanguage();
  const industries = getIndustries(lang);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            {t.targetIndustriesPage.eyebrow}
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t.targetIndustriesPage.title}
          </h1>
          <div className="line-accent w-20 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t.targetIndustriesPage.subtitle}
          </p>
        </div>
      </section>

      <section className="pb-28 px-6">
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              to={`/target-industries/${ind.slug}`}
              className="glass rounded-lg p-8 hover:glow-accent transition-all duration-500 group"
            >
              <h2 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {ind.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {ind.subtitle}
              </p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                {t.targetIndustriesPage.explore}{" "}
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

export default TargetIndustries;
