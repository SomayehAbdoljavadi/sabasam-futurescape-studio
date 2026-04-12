import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { industries } from "@/data/industries";

const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "Services", href: "/#services" },
  // Target Industries inserted separately
  // Sample Projects inserted separately
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
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

  const linkClass = "text-sm text-muted-foreground hover:text-foreground transition-colors duration-300";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="font-display text-xl font-bold tracking-tight text-gradient">
          SABASAM
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {/* Home & Services */}
          {navLinks.slice(0, 2).map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkClass}>{l.label}</a>
            </li>
          ))}

          {/* Target Industries dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 ${linkClass}`}
            >
              Target Industries
              <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 glass rounded-lg border border-border/30 py-2 animate-fade-in">
                <Link
                  to="/target-industries"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                >
                  All Industries
                </Link>
                <div className="h-px bg-border/30 my-1" />
                {industries.map((ind) => (
                  <Link
                    key={ind.slug}
                    to={`/target-industries/${ind.slug}`}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                  >
                    {ind.title}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* Sample Projects */}
          <li>
            <Link to="/sample-projects" className={linkClass}>Sample Projects</Link>
          </li>

          {/* About Us & Contact */}
          {navLinks.slice(2).map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkClass}>{l.label}</a>
            </li>
          ))}

          <li>
            <a
              href="/#contact"
              className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border/30 animate-fade-in">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.slice(0, 2).map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className={linkClass}>{l.label}</a>
              </li>
            ))}

            {/* Mobile Target Industries */}
            <li>
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className={`flex items-center gap-1 ${linkClass}`}
              >
                Target Industries
                <ChevronDown size={14} className={`transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileIndustriesOpen && (
                <ul className="mt-2 ml-4 flex flex-col gap-2">
                  <li>
                    <Link to="/target-industries" onClick={() => setOpen(false)} className={linkClass}>
                      All Industries
                    </Link>
                  </li>
                  {industries.map((ind) => (
                    <li key={ind.slug}>
                      <Link to={`/target-industries/${ind.slug}`} onClick={() => setOpen(false)} className={linkClass}>
                        {ind.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Sample Projects */}
            <li>
              <Link to="/sample-projects" onClick={() => setOpen(false)} className={linkClass}>
                Sample Projects
              </Link>
            </li>

            {navLinks.slice(2).map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className={linkClass}>{l.label}</a>
              </li>
            ))}

            <li>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="inline-block text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-md"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
