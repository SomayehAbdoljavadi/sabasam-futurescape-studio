import { useState } from "react";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import project01 from "@/assets/project-01.jpg";
import project02 from "@/assets/project-02.jpg";
import project03 from "@/assets/project-03.jpg";
import project04 from "@/assets/project-04.jpg";
import project05 from "@/assets/project-05.jpg";
import project06 from "@/assets/project-06.jpg";
import { useLanguage, useT } from "@/i18n/LanguageContext";
import SEO from "@/components/SEO";

const images = [project01, project02, project03, project04, project05, project06];

const SampleProjects = () => {
  const t = useT();
  const { lang } = useLanguage();
  const projects = t.sampleProjects.items.map((p, i) => ({ ...p, image: images[i] }));
  const [selected, setSelected] = useState<typeof projects[number] | null>(null);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <SEO
        title={lang === "de" ? "Referenzprojekte | Sabasam E&C" : "Sample Projects | Sabasam E&C"}
        description={lang === "de" ? "Ausgewählte Commissioning-Referenzprojekte von Sabasam E&C in Chemie, Öl & Gas, Energieerzeugung und mehr." : "Selected commissioning reference projects by Sabasam E&C across chemical, oil & gas, power generation and more."}
      />
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">{t.sampleProjects.eyebrow}</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{t.sampleProjects.title}</h1>
          <div className="line-accent w-20 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t.sampleProjects.subtitle}
          </p>
        </div>
      </section>

      <section className="pb-28 px-6">
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <button
              key={p.title}
              onClick={() => setSelected(p)}
              className="glass rounded-lg overflow-hidden hover:glow-accent transition-all duration-500 group text-left cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-secondary/20">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="text-primary text-xs font-medium tracking-wider uppercase mb-2">{p.category}</p>
                <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors z-10"
          >
            <X size={28} />
          </button>
          <div
            className="max-w-[90vw] max-h-[90vh] overflow-auto glass rounded-lg p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.title}
              className="max-w-full h-auto"
            />
            <div className="p-4 text-center">
              <p className="text-primary text-xs font-medium tracking-wider uppercase mb-1">{selected.category}</p>
              <h3 className="font-display text-lg font-semibold">{selected.title}</h3>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default SampleProjects;
