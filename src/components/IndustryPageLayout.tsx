import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import type { IndustryData } from "@/data/industries";

interface Props {
  industry: IndustryData;
}

const IndustryPageLayout = ({ industry }: Props) => (
  <main className="bg-background text-foreground min-h-screen">
    <Navbar />

    {/* Hero banner */}
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container mx-auto relative z-10">
        <Link
          to="/target-industries"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          All Industries
        </Link>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          {industry.title}
        </h1>
        <div className="line-accent w-20 mb-6" />
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          {industry.subtitle}
        </p>
      </div>
    </section>

    {/* Subsections grid */}
    <section className="pb-28 px-6">
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {industry.subsections.map((sub) => (
          <div
            key={sub.title}
            className="glass rounded-lg p-8 hover:glow-accent transition-all duration-500 group"
          >
            <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
              {sub.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {sub.description}
            </p>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </main>
);

export default IndustryPageLayout;
