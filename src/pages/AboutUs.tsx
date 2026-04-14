import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Target } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Commissioning Engineering Services",
    description:
      "We provide end-to-end engineering support, including commissioning planning, system definition, method statements, procedures, and execution strategies. Our approach ensures that every system is prepared, tested, and verified in line with project specifications and industry standards.",
  },
  {
    number: "02",
    title: "Commissioning System Implementation",
    description:
      "We assist in the setup and implementation of structured commissioning systems, enabling effective tracking, control, and reporting. This includes systemization, tagging, database management, and digital tools to ensure full visibility and coordination throughout the commissioning phase.",
  },
  {
    number: "03",
    title: "Commissioning Documentation",
    description:
      "We develop and manage all required commissioning documentation, including checklists, test packages, dossiers, and handover documentation. Our structured documentation approach ensures compliance, traceability, and a seamless transition from project completion to operations.",
  },
];

const AboutUs = () => (
  <main className="bg-background text-foreground min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="container mx-auto max-w-4xl relative">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
          Who We Are
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          About Us
        </h1>
        <div className="h-1 w-16 bg-primary rounded-full mb-10" />
        <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl">
          With over 20 years of experience in the oil and gas industry, we
          specialize in delivering comprehensive commissioning consulting
          services across the final stages of project lifecycle—from
          pre-commissioning and commissioning to pre-start-up, start-up,
          performance test and successful handover.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mt-6">
          Our expertise is built on hands-on involvement in complex industrial
          projects, ensuring that systems are safely, efficiently, and reliably
          brought into operation. We support clients in achieving smooth project
          execution while minimizing risks, delays, and operational issues.
        </p>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
          What We Offer
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Our Services
        </h2>
        <div className="h-1 w-16 bg-primary rounded-full mb-14" />

        <div className="space-y-10">
          {services.map((s) => (
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

    {/* Mission */}
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="container mx-auto max-w-4xl relative">
        <div className="rounded-xl border border-primary/20 bg-card/60 backdrop-blur-sm p-10 md:p-14">
          <div className="flex items-center gap-3 mb-6">
            <Target size={24} className="text-primary" />
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Our Mission
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Our mission is to deliver commissioning excellence by combining
            technical expertise, structured methodologies, and practical field
            experience. We are committed to supporting our clients in achieving
            safe start-ups, optimal performance, and long-term operational
            reliability.
          </p>
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default AboutUs;
