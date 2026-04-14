import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const services = [
  {
    slug: "engineering",
    title: "Commissioning Engineering Services",
    description:
      "We provide consulting solutions for pre-commissioning, commissioning, startup, and handover of complex systems with a structured approach.",
    image: service1,
  },
  {
    slug: "system-implementation",
    title: "Commissioning System Implementation",
    description:
      "We manage, set up, and configure all data relevant to the commissioning process, ensuring systems are properly integrated and validated.",
    image: service2,
  },
  {
    slug: "documentation",
    title: "Commissioning Documentation",
    description:
      "Complete documentation management from initial planning through final acceptance, ensuring regulatory compliance and quality assurance.",
    image: service3,
  },
];

const ServicesSection = () => (
  <section id="services" className="py-28 px-6">
    <div className="container mx-auto">
      <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3 text-center">
        What We Do
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
        Our Services
      </h2>
      <div className="line-accent w-16 mx-auto mb-16" />

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="group glass rounded-lg overflow-hidden hover:glow-accent transition-all duration-500"
          >
            <div className="overflow-hidden h-52">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {s.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
