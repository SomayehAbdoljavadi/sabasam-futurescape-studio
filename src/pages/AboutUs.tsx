import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Target } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

const AboutUs = () => {
  const t = useT();
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto max-w-4xl relative">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            {t.aboutPage.eyebrow}
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t.aboutPage.title}
          </h1>
          <div className="h-1 w-16 bg-primary rounded-full mb-10" />
          <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl">
            {t.aboutPage.intro1}
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mt-6">
            {t.aboutPage.intro2}
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            {t.aboutPage.whatWeOffer}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t.aboutPage.ourServices}
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full mb-14" />

          <div className="space-y-10">
            {t.aboutPage.services.map((s) => (
              <div
                key={s.number}
                className="group relative rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm p-8 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <span className="text-primary/30 font-display text-5xl font-bold leading-none select-none group-hover:text-primary/50 transition-colors duration-500">
                    {s.number}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle size={18} className="text-primary shrink-0" />
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto max-w-4xl relative">
          <div className="rounded-xl border border-primary/20 bg-card/60 backdrop-blur-sm p-10 md:p-14">
            <div className="flex items-center gap-3 mb-6">
              <Target size={24} className="text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                {t.aboutPage.missionTitle}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t.aboutPage.mission}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUs;
