import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => (
  <section id="about" className="py-28 px-6 relative overflow-hidden">
    <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
      {/* Text */}
      <div>
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
          Who We Are
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          About Us
        </h2>
        <div className="line-accent w-16 mb-8" />
        <p className="text-muted-foreground leading-relaxed mb-6">
          Sabasam E&C is a leading consulting company specializing in pre-commissioning, commissioning, startup, and performance testing in oil & gas, power, and industrial sectors.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          We pride ourselves on our team's expertise and our commitment to delivering exceptional services to our clients. With decades of combined experience, we bring precision, reliability, and innovation to every project.
        </p>
      </div>

      {/* Image */}
      <div className="relative rounded-lg overflow-hidden glow-accent">
        <img
          src={aboutBg}
          alt="Sabasam engineering team"
          loading="lazy"
          width={1280}
          height={860}
          className="w-full h-80 md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>
    </div>
  </section>
);

export default AboutSection;
