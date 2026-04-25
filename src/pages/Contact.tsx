import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { lang } = useLanguage();
  return (
    <main className="bg-background text-foreground min-h-screen">
      <SEO
        title={
          lang === "de"
            ? "Kontakt | Sabasam E&C Commissioning"
            : "Contact | Sabasam E&C Commissioning"
        }
        description={
          lang === "de"
            ? "Kontaktieren Sie Sabasam E&C für Commissioning-Beratung, Projektanfragen und Karrieremöglichkeiten."
            : "Get in touch with Sabasam E&C for commissioning consulting, project enquiries and career opportunities."
        }
      />
      <Navbar />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
