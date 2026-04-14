import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@sabasam.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // silent fail – still show thank-you
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3 text-center">
          Reach Out
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Get in Touch
        </h2>
        <div className="line-accent w-16 mx-auto mb-16" />

        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="glass rounded-lg p-10 text-center">
                <p className="text-primary font-semibold text-lg mb-2">Thank you!</p>
                <p className="text-muted-foreground text-sm">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-secondary/60 border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full bg-secondary/60 border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-secondary/60 border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Message"
                  className="w-full bg-secondary/60 border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition resize-none"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                  Submit
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-semibold text-lg mb-4">Head Office</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                  Erftstraße 102A, Neuss 41460, Germany
                </p>
                <p className="flex items-center gap-3">
                  <Mail size={18} className="text-primary shrink-0" />
                  info@sabasam.com
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={18} className="text-primary shrink-0" />
                  +49 172 7575763
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-lg mb-3">Careers</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Join our team of dedicated professionals. Send your cover letter and resume to{" "}
                <a href="mailto:career@sabasam.com" className="text-primary hover:underline">
                  career@sabasam.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-display font-semibold text-lg mb-3">Request a Consultation</h3>
              <p className="text-sm text-muted-foreground">
                <Phone size={16} className="inline text-primary mr-2" />
                +49 172 7575763
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
