import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { industries } from "@/data/industries";
import sabasamIcon from "@/assets/sabasam-icon.png";

const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "Services", href: "/#services" },
  { label: "About Us", href: "/about-us", isRoute: true },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "relative text-sm text-muted-foreground hover:text-primary transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-primary/50 after:transition-all after:duration-300";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "h-12 bg-background/80 backdrop-blur-xl border-primary/10 shadow-[0_1px_20px_-6px_hsl(var(--primary)/0.15)]"
          : "h-14 bg-background/40 backdrop-blur-md border-border/20"
      }`}
    >
      {/* Top glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto flex items-center justify-between h-full px-6">
        {/* Left: Logo + Brand */}
        <Link to="/" className="shrink-0 flex items-center gap-2.5 group">
          <img
            src={sabasamIcon}
            alt="Sabasam E&C"
            className={`w-auto object-contain transition-all duration-500 drop-shadow-[0_0_8px_hsl(var(--primary)/0.3)] group-hover:drop-shadow-[0_0_14px_hsl(var(--primary)/0.5)] ${
              scrolled ? "h-7 md:h-8" : "h-9 md:h-10"
            }`}
          />
          <div className="hidden sm:flex flex-col leading-none">
            <span
              className={`font-display font-bold tracking-wide text-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.3)] group-hover:drop-shadow-[0_0_16px_hsl(var(--primary)/0.5)] transition-all duration-500 ${
                scrolled ? "text-xs md:text-sm" : "text-sm md:text-base"
              }`}
            >
              SABASAM E&C
            </span>
            <span
              className={`font-display font-medium tracking-widest text-muted-foreground/80 transition-all duration-500 ${
                scrolled ? "text-[8px] md:text-[9px] mt-0" : "text-[10px] md:text-xs mt-0.5"
              }`}
            >
              PRE-COMMISSIONING & COMMISSIONING CONSULTING
            </span>
          </div>
        </Link>

        {/* Right: Nav links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.slice(0, 2).map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkClass}>
                {l.label}
              </a>
            </li>
          ))}

          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 ${linkClass}`}
            >
              Target Industries
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 rounded-xl border border-primary/10 bg-background/80 backdrop-blur-xl shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.15)] py-2 animate-fade-in">
                <Link
                  to="/target-industries"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
                >
                  All Industries
                </Link>
                <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent mx-3 my-1" />
                {industries.map((ind) => (
                  <Link
                    key={ind.slug}
                    to={`/target-industries/${ind.slug}`}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
                  >
                    {ind.title}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link to="/sample-projects" className={linkClass}>
              Sample Projects
            </Link>
          </li>

          {navLinks.slice(2).map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkClass}>
                {l.label}
              </a>
            </li>
          ))}

          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/90 backdrop-blur-xl border-t border-primary/10 animate-fade-in">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.slice(0, 2).map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}

            <li>
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Target Industries
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileIndustriesOpen && (
                <ul className="mt-2 ml-4 flex flex-col gap-2">
                  <li>
                    <Link
                      to="/target-industries"
                      onClick={() => setOpen(false)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      All Industries
                    </Link>
                  </li>
                  {industries.map((ind) => (
                    <li key={ind.slug}>
                      <Link
                        to={`/target-industries/${ind.slug}`}
                        onClick={() => setOpen(false)}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {ind.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/sample-projects"
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Sample Projects
              </Link>
            </li>

            {navLinks.slice(2).map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
