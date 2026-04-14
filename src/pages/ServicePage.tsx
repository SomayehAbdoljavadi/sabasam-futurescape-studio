import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { CheckCircle } from "lucide-react";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto max-w-4xl relative">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Our Services
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {service.title}
          </h1>
          <div className="h-1 w-16 bg-primary rounded-full mb-10" />
          <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl">
            {service.intro}
          </p>
        </div>
      </section>

      {/* Subsections */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-10">
            {service.subsections.map((sub, i) => (
              <div
                key={sub.title}
                className="group relative rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm p-8 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <span className="text-primary/30 font-display text-5xl font-bold leading-none select-none group-hover:text-primary/50 transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle
                        size={18}
                        className="text-primary shrink-0"
                      />
                      {sub.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {sub.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicePage;
