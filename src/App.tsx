import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index.tsx";
import TargetIndustries from "./pages/TargetIndustries.tsx";
import IndustryPage from "./pages/IndustryPage.tsx";
import SampleProjects from "./pages/SampleProjects.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/target-industries" element={<TargetIndustries />} />
            <Route path="/target-industries/:slug" element={<IndustryPage />} />
            <Route path="/sample-projects" element={<SampleProjects />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
