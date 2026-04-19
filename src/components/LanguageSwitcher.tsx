import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  const btn = (l: Lang, label: string) => (
    <button
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      className={`px-1.5 py-0.5 text-xs font-semibold rounded transition-colors ${
        lang === l
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex items-center gap-1 text-muted-foreground">
      <Globe size={14} className="opacity-70" />
      {btn("en", "EN")}
      <span className="opacity-30">|</span>
      {btn("de", "DE")}
    </div>
  );
};

export default LanguageSwitcher;
