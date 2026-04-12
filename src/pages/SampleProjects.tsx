import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import project01 from "@/assets/project-01.jpg";
import project02 from "@/assets/project-02.jpg";
import project03 from "@/assets/project-03.jpg";
import project04 from "@/assets/project-04.jpg";
import project05 from "@/assets/project-05.jpg";
import project06 from "@/assets/project-06.jpg";

const projects = [
  {
    title: "Electrical Distribution Panel",
    category: "Pre-commissioning Test Sheet",
    image: project01,
  },
  {
    title: "Instrument — Digital Loop",
    category: "Functional Test Sheet",
    image: project02,
  },
  {
    title: "P&ID Mark-up",
    category: "Condensate Stabilization Unit",
    image: project03,
  },
  {
    title: "Water Supply System — Piping",
    category: "Check List",
    image: project04,
  },
  {
    title: "Power Transformer",
    category: "Function Test Sheet",
    image: project05,
  },
  {
    title: "SLD Mark-up",
    category: "Overall Single Line Diagram",
    image: project06,
  },
];

const SampleProjects = () => (
  <main className="bg-background text-foreground min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 px-6">
      <div className="container mx-auto text-center">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
          Our Work
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Sample Project Files
        </h1>
        <div className="line-accent w-20 mx-auto mb-6" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          A selection of commissioning deliverables showcasing our documentation
          standards, including test sheets, P&ID mark-ups, single line diagrams,
          and checklists.
        </p>
      </div>
    </section>

    {/* Projects grid */}
    <section className="pb-28 px-6">
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="glass rounded-lg overflow-hidden hover:glow-accent transition-all duration-500 group"
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
              <p className="text-primary text-xs font-medium tracking-wider uppercase mb-2">
                {p.category}
              </p>
              <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                {p.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </main>
);

export default SampleProjects;
