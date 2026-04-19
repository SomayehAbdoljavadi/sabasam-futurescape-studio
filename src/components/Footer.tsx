import { useT } from "@/i18n/LanguageContext";

const Footer = () => {
  const t = useT();
  return (
    <footer className="border-t border-border/30 py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Sabasam E&C GmbH. {t.footer.rights}</p>
        <div className="flex gap-6">
          <a href="/#hero" className="hover:text-foreground transition-colors">{t.footer.home}</a>
          <a href="/#services" className="hover:text-foreground transition-colors">{t.footer.services}</a>
          <a href="/about-us" className="hover:text-foreground transition-colors">{t.footer.about}</a>
          <a href="/#contact" className="hover:text-foreground transition-colors">{t.footer.contact}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
