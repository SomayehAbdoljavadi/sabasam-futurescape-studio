import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

const setMeta = (selector: string, attr: string, value: string, create?: () => HTMLElement) => {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el && create) {
    el = create();
    document.head.appendChild(el);
  }
  if (el) el.setAttribute(attr, value);
};

const SEO = ({ title, description, canonicalPath }: SEOProps) => {
  const location = useLocation();
  const path = canonicalPath ?? location.pathname;

  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', "content", description, () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    });

    setMeta('meta[property="og:title"]', "content", title, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:title");
      return m;
    });

    setMeta('meta[property="og:description"]', "content", description, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:description");
      return m;
    });

    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const href = `${origin}${path}`;

    setMeta('meta[property="og:url"]', "content", href, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:url");
      return m;
    });

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", href);
  }, [title, description, path]);

  return null;
};

export default SEO;
