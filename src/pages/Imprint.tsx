import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLanguage } from "@/i18n/LanguageContext";

const Imprint = () => {
  const { lang } = useLanguage();
  const isDe = lang === "de";

  return (
    <main className="bg-background text-foreground min-h-screen">
      <SEO
        title={isDe ? "Impressum | Sabasam E&C" : "Imprint | Sabasam E&C"}
        description={
          isDe
            ? "Impressum und rechtliche Hinweise der Sabasam E&C GmbH, Neuss, Deutschland."
            : "Imprint and legal information for Sabasam E&C GmbH, Neuss, Germany."
        }
      />
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            {isDe ? "Rechtliches" : "Legal"}
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {isDe ? "Impressum" : "Imprint"}
          </h1>
          <div className="line-accent w-20 mb-10" />
        </div>
      </section>

      <section className="pb-28 px-6">
        <div className="container mx-auto max-w-3xl space-y-12">
          {/* Publisher */}
          <div className="glass rounded-lg p-8">
            <h2 className="font-display text-xl font-semibold mb-4">
              {isDe ? "Herausgeber" : "Publisher"}
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-1">
              <p className="text-foreground font-medium">SabaSam E&C GmbH</p>
              <p>Erftstraße 102A, 41460 Neuss</p>
              <p>{isDe ? "Deutschland" : "Germany"}</p>
              <p className="pt-3">T: +49 2131 5395234</p>
              <p>M: +49 172 7575763</p>
            </div>
          </div>

          {/* Management */}
          <div className="glass rounded-lg p-8">
            <h2 className="font-display text-xl font-semibold mb-4">
              {isDe ? "Geschäftsführung" : "Management"}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">Ali Riazati</p>
          </div>

          {/* Commercial Register */}
          <div className="glass rounded-lg p-8">
            <h2 className="font-display text-xl font-semibold mb-4">
              {isDe ? "Handelsregister" : "Commercial Register"}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Amtsgericht Neuss HRB 21159
            </p>
          </div>

          {/* VAT ID */}
          <div className="glass rounded-lg p-8">
            <h2 className="font-display text-xl font-semibold mb-4">
              {isDe ? "Umsatzsteuer-Identifikationsnummer" : "Value Added Tax ID"}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">DE344448964</p>
          </div>

          {/* Exclusion of liability */}
          <div>
            <h2 className="font-display text-2xl font-semibold mb-4">
              {isDe ? "Haftungsausschluss" : "Exclusion of liability"}
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
              <p>
                SabaSam E&C GmbH (hereinafter &quot;publisher&quot;) makes every effort to ensure
                that the information and data contained on its websites is correct. Any liability or
                guarantee for the up-to-dateness, accuracy and completeness of the information and
                data provided is excluded. This is accordingly applicable to damages arising from
                activities directly or indirectly occasioned by the information and data provided.
              </p>
              <p>
                By using the information and data provided there is no entering into contractual
                relations between the user and the publisher.
              </p>
              <p>
                Beyond that the publisher accepts no liability or guarantee whatsoever for the
                content of third-party websites that can be accessed via links from this website.
                Any access to third-party websites is at the sole responsibility of the user. The
                operators of linked sites are solely responsible for the content posted on their
                pages.
              </p>
            </div>
          </div>

          {/* Use of published contact data */}
          <div>
            <h2 className="font-display text-2xl font-semibold mb-4">
              {isDe ? "Verwendung veröffentlichter Kontaktdaten" : "Use of published contact data"}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We hereby expressly prohibit the use of contact data published within the scope of the
              imprint obligation by third parties for sending unsolicited advertising and information
              material. The operators of this website expressly reserve the right to take legal
              action in the event of the unsolicited sending of advertising information, such as
              spam emails.
            </p>
          </div>

          {/* Copyright */}
          <div>
            <h2 className="font-display text-2xl font-semibold mb-4">
              {isDe ? "Urheberrecht" : "Copyright"}
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
              <p>
                SabaSam E&C GmbH shall retain the right, without prior notice, to make any updates,
                changes, or enhancements to the information and data presented. SabaSam E&C GmbH
                owns the copyright to the layout, text, and graphics of all pages on this website,
                thereby forbidding usage of any information or data, in particular the text, parts
                of the text, or images therein, without prior written permission from the publisher.
              </p>
              <p className="text-foreground/80">
                © Copyright {new Date().getFullYear()} SabaSam E&C GmbH. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Imprint;
