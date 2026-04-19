import { useParams, Navigate } from "react-router-dom";
import IndustryPageLayout from "@/components/IndustryPageLayout";
import { useLanguage } from "@/i18n/LanguageContext";
import { getIndustries } from "@/i18n/data";

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const industry = getIndustries(lang).find((i) => i.slug === slug);

  if (!industry) return <Navigate to="/target-industries" replace />;

  return <IndustryPageLayout industry={industry} />;
};

export default IndustryPage;
