const Footer = () => (
  <footer className="border-t border-border/30 py-10 px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} Sabasam E&C GmbH. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#hero" className="hover:text-foreground transition-colors">Home</a>
        <a href="#services" className="hover:text-foreground transition-colors">Services</a>
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
