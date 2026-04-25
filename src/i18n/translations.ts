export type Lang = "en" | "de";

export const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      services: "Services",
      targetIndustries: "Target Industries",
      allIndustries: "All Industries",
      sampleProjects: "Sample Projects",
      aboutUs: "About Us",
      contact: "Contact",
      language: "Language",
    },
    // Hero
    hero: {
      eyebrow: "Sabasam E&C",
      titlePart1: "Experts in",
      titleHighlight: "Commissioning",
      titlePart2: "Consulting Services",
      subtitle:
        "Pre-commissioning, commissioning & startup solutions for complex industrial projects worldwide.",
      ctaServices: "Our Services",
      ctaConsult: "Request a Consultation",
    },
    // Services section (homepage)
    servicesSection: {
      eyebrow: "What We Do",
      title: "Our Services",
      learnMore: "Learn More",
      items: {
        engineering: {
          title: "Commissioning Engineering Services",
          description:
            "We provide consulting solutions for pre-commissioning, commissioning, startup, and handover of complex systems with a structured approach.",
        },
        "system-implementation": {
          title: "Commissioning System Implementation",
          description:
            "We manage, set up, and configure all data relevant to the commissioning process, ensuring systems are properly integrated and validated.",
        },
        documentation: {
          title: "Commissioning Documentation",
          description:
            "Complete documentation management from initial planning through final acceptance, ensuring regulatory compliance and quality assurance.",
        },
      },
    },
    // Industries section (homepage)
    industriesSection: {
      eyebrow: "Industries We Serve",
      title: "Target Industries",
      subtitle:
        "We deliver commissioning consulting across five major industrial sectors, bringing deep domain expertise to every project.",
      explore: "Explore",
      viewAll: "View All Industries",
    },
    // About section (homepage)
    aboutSection: {
      eyebrow: "Who We Are",
      title: "About Us",
      p1: "Sabasam E&C is a leading consulting company specializing in pre-commissioning, commissioning, startup, and performance testing in oil & gas, power, and industrial sectors.",
      p2: "We pride ourselves on our team's expertise and our commitment to delivering exceptional services to our clients. With decades of combined experience, we bring precision, reliability, and innovation to every project.",
      learnMore: "Learn More",
    },
    // About page
    aboutPage: {
      eyebrow: "Who We Are",
      title: "About Us",
      intro1:
        "With over 20 years of experience in the oil and gas industry, we specialize in delivering comprehensive commissioning consulting services across the final stages of project lifecycle—from pre-commissioning and commissioning to pre-start-up, start-up, performance test and successful handover.",
      intro2:
        "Our expertise is built on hands-on involvement in complex industrial projects, ensuring that systems are safely, efficiently, and reliably brought into operation. We support clients in achieving smooth project execution while minimizing risks, delays, and operational issues.",
      whatWeOffer: "What We Offer",
      ourServices: "Our Services",
      missionTitle: "Our Mission",
      mission:
        "Our mission is to deliver commissioning excellence by combining technical expertise, structured methodologies, and practical field experience. We are committed to supporting our clients in achieving safe start-ups, optimal performance, and long-term operational reliability.",
      services: [
        {
          number: "01",
          title: "Commissioning Engineering Services",
          description:
            "We provide end-to-end engineering support, including commissioning planning, system definition, method statements, procedures, and execution strategies. Our approach ensures that every system is prepared, tested, and verified in line with project specifications and industry standards.",
        },
        {
          number: "02",
          title: "Commissioning System Implementation",
          description:
            "We assist in the setup and implementation of structured commissioning systems, enabling effective tracking, control, and reporting. This includes systemization, tagging, database management, and digital tools to ensure full visibility and coordination throughout the commissioning phase.",
        },
        {
          number: "03",
          title: "Commissioning Documentation",
          description:
            "We develop and manage all required commissioning documentation, including checklists, test packages, dossiers, and handover documentation. Our structured documentation approach ensures compliance, traceability, and a seamless transition from project completion to operations.",
        },
      ],
    },
    // Why us
    whyUs: {
      eyebrow: "Why Sabasam",
      title: "Why Choose Us",
      items: [
        {
          title: "Proven Track Record",
          description:
            "Successfully delivered commissioning projects across multiple industries and continents.",
        },
        {
          title: "Expert Team",
          description:
            "Highly qualified engineers with deep domain expertise in commissioning and startup.",
        },
        {
          title: "Quality First",
          description:
            "Rigorous quality assurance processes that meet international standards and regulations.",
        },
        {
          title: "Global Reach",
          description:
            "Operating worldwide with an understanding of regional regulations and requirements.",
        },
      ],
    },
    // Contact
    contact: {
      eyebrow: "Reach Out",
      title: "Get in Touch",
      thankYou: "Thank you!",
      thankYouSub: "We'll get back to you shortly.",
      fullName: "Full Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      sending: "Sending…",
      submit: "Submit",
      headOffice: "Head Office",
      careers: "Careers",
      careersText: "Join our team of dedicated professionals. Send your cover letter and resume to",
      requestConsult: "Request a Consultation",
    },
    // Footer
    footer: {
      rights: "All rights reserved.",
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      imprint: "Imprint",
    },
    // Sample projects
    sampleProjects: {
      eyebrow: "Our Work",
      title: "Sample Project Files",
      subtitle:
        "A selection of commissioning deliverables showcasing our documentation standards, including test sheets, P&ID mark-ups, single line diagrams, and checklists.",
      items: [
        { title: "Electrical Distribution Panel", category: "Pre-commissioning Test Sheet" },
        { title: "Instrument — Digital Loop", category: "Functional Test Sheet" },
        { title: "P&ID Mark-up", category: "Condensate Stabilization Unit" },
        { title: "Water Supply System — Piping", category: "Check List" },
        { title: "Power Transformer", category: "Function Test Sheet" },
        { title: "SLD Mark-up", category: "Overall Single Line Diagram" },
      ],
    },
    // Target industries page
    targetIndustriesPage: {
      eyebrow: "Industries We Serve",
      title: "Target Industries",
      subtitle:
        "We deliver commissioning consulting across five major industrial sectors, bringing deep domain expertise to every project.",
      explore: "Explore",
    },
    industryPage: {
      back: "All Industries",
    },
    servicePage: {
      eyebrow: "Our Services",
    },
  },

  de: {
    nav: {
      home: "Startseite",
      services: "Leistungen",
      targetIndustries: "Zielbranchen",
      allIndustries: "Alle Branchen",
      sampleProjects: "Referenzprojekte",
      aboutUs: "Über uns",
      contact: "Kontakt",
      language: "Sprache",
    },
    hero: {
      eyebrow: "Sabasam E&C",
      titlePart1: "Experten für",
      titleHighlight: "Inbetriebnahme",
      titlePart2: "Beratungsdienstleistungen",
      subtitle:
        "Pre-Commissioning-, Commissioning- und Anfahrlösungen für komplexe Industrieprojekte weltweit.",
      ctaServices: "Unsere Leistungen",
      ctaConsult: "Beratung anfragen",
    },
    servicesSection: {
      eyebrow: "Was wir tun",
      title: "Unsere Leistungen",
      learnMore: "Mehr erfahren",
      items: {
        engineering: {
          title: "Commissioning Engineering Dienstleistungen",
          description:
            "Wir bieten Beratungslösungen für Pre-Commissioning, Commissioning, Anfahren und Übergabe komplexer Systeme mit einem strukturierten Ansatz.",
        },
        "system-implementation": {
          title: "Implementierung von Commissioning-Systemen",
          description:
            "Wir verwalten, konfigurieren und richten alle für den Commissioning-Prozess relevanten Daten ein und stellen sicher, dass Systeme korrekt integriert und validiert sind.",
        },
        documentation: {
          title: "Commissioning-Dokumentation",
          description:
            "Vollständiges Dokumentationsmanagement von der Planung bis zur endgültigen Abnahme – mit Sicherstellung der Compliance und Qualitätssicherung.",
        },
      },
    },
    industriesSection: {
      eyebrow: "Branchen, die wir bedienen",
      title: "Zielbranchen",
      subtitle:
        "Wir bieten Commissioning-Beratung in fünf großen Industriesektoren und bringen tiefes Fachwissen in jedes Projekt ein.",
      explore: "Entdecken",
      viewAll: "Alle Branchen anzeigen",
    },
    aboutSection: {
      eyebrow: "Wer wir sind",
      title: "Über uns",
      p1: "Sabasam E&C ist ein führendes Beratungsunternehmen, spezialisiert auf Pre-Commissioning, Commissioning, Anfahren und Leistungstests in den Bereichen Öl & Gas, Energie und Industrie.",
      p2: "Wir sind stolz auf die Expertise unseres Teams und unser Engagement, unseren Kunden außergewöhnliche Dienstleistungen zu bieten. Mit jahrzehntelanger gemeinsamer Erfahrung bringen wir Präzision, Zuverlässigkeit und Innovation in jedes Projekt.",
      learnMore: "Mehr erfahren",
    },
    aboutPage: {
      eyebrow: "Wer wir sind",
      title: "Über uns",
      intro1:
        "Mit über 20 Jahren Erfahrung in der Öl- und Gasindustrie sind wir auf umfassende Commissioning-Beratungsdienstleistungen in den letzten Phasen des Projektlebenszyklus spezialisiert – von Pre-Commissioning und Commissioning über Pre-Start-up und Start-up bis hin zu Leistungstests und erfolgreicher Übergabe.",
      intro2:
        "Unsere Expertise basiert auf praktischer Mitarbeit an komplexen Industrieprojekten und stellt sicher, dass Systeme sicher, effizient und zuverlässig in Betrieb genommen werden. Wir unterstützen Kunden bei der reibungslosen Projektabwicklung und minimieren Risiken, Verzögerungen und Betriebsprobleme.",
      whatWeOffer: "Was wir bieten",
      ourServices: "Unsere Leistungen",
      missionTitle: "Unsere Mission",
      mission:
        "Unsere Mission ist es, Commissioning-Exzellenz durch die Kombination von technischem Know-how, strukturierten Methoden und praktischer Felderfahrung zu liefern. Wir unterstützen unsere Kunden bei sicheren Anfahrten, optimaler Leistung und langfristiger Betriebszuverlässigkeit.",
      services: [
        {
          number: "01",
          title: "Commissioning Engineering Dienstleistungen",
          description:
            "Wir bieten umfassende Engineering-Unterstützung, einschließlich Commissioning-Planung, Systemdefinition, Verfahrensanweisungen, Prozeduren und Ausführungsstrategien. Unser Ansatz stellt sicher, dass jedes System gemäß Projektspezifikationen und Industriestandards vorbereitet, getestet und verifiziert wird.",
        },
        {
          number: "02",
          title: "Implementierung von Commissioning-Systemen",
          description:
            "Wir unterstützen bei der Einrichtung und Implementierung strukturierter Commissioning-Systeme zur effektiven Verfolgung, Steuerung und Berichterstattung. Dies umfasst Systematisierung, Tagging, Datenbankmanagement und digitale Tools für volle Transparenz und Koordination während der Commissioning-Phase.",
        },
        {
          number: "03",
          title: "Commissioning-Dokumentation",
          description:
            "Wir erstellen und verwalten alle erforderlichen Commissioning-Dokumente, einschließlich Checklisten, Testpakete, Dossiers und Übergabedokumentation. Unser strukturierter Dokumentationsansatz gewährleistet Compliance, Nachvollziehbarkeit und einen nahtlosen Übergang vom Projektabschluss zum Betrieb.",
        },
      ],
    },
    whyUs: {
      eyebrow: "Warum Sabasam",
      title: "Warum uns wählen",
      items: [
        {
          title: "Bewährte Erfolgsbilanz",
          description:
            "Erfolgreich umgesetzte Commissioning-Projekte in mehreren Branchen und auf mehreren Kontinenten.",
        },
        {
          title: "Expertenteam",
          description:
            "Hochqualifizierte Ingenieure mit tiefer Fachkenntnis in Commissioning und Anfahren.",
        },
        {
          title: "Qualität zuerst",
          description:
            "Strenge Qualitätssicherungsprozesse nach internationalen Standards und Vorschriften.",
        },
        {
          title: "Globale Reichweite",
          description:
            "Weltweit tätig mit Verständnis für regionale Vorschriften und Anforderungen.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt aufnehmen",
      title: "Schreiben Sie uns",
      thankYou: "Vielen Dank!",
      thankYouSub: "Wir melden uns in Kürze bei Ihnen.",
      fullName: "Vollständiger Name",
      email: "E-Mail",
      subject: "Betreff",
      message: "Nachricht",
      sending: "Senden…",
      submit: "Absenden",
      headOffice: "Hauptsitz",
      careers: "Karriere",
      careersText:
        "Werden Sie Teil unseres Teams engagierter Fachkräfte. Senden Sie Ihr Anschreiben und Ihren Lebenslauf an",
      requestConsult: "Beratung anfragen",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      home: "Startseite",
      services: "Leistungen",
      about: "Über uns",
      contact: "Kontakt",
      imprint: "Impressum",
    },
    sampleProjects: {
      eyebrow: "Unsere Arbeit",
      title: "Beispielprojekte",
      subtitle:
        "Eine Auswahl an Commissioning-Lieferungen, die unsere Dokumentationsstandards zeigen, einschließlich Testblättern, P&ID-Markups, Einlinienschaltbildern und Checklisten.",
      items: [
        { title: "Elektrische Verteilung", category: "Pre-Commissioning Testblatt" },
        { title: "Instrument — Digitalschleife", category: "Funktionstestblatt" },
        { title: "P&ID Markup", category: "Kondensat-Stabilisierungseinheit" },
        { title: "Wasserversorgungssystem — Rohrleitungen", category: "Checkliste" },
        { title: "Leistungstransformator", category: "Funktionstestblatt" },
        { title: "SLD Markup", category: "Gesamtes Einlinienschaltbild" },
      ],
    },
    targetIndustriesPage: {
      eyebrow: "Branchen, die wir bedienen",
      title: "Zielbranchen",
      subtitle:
        "Wir bieten Commissioning-Beratung in fünf großen Industriesektoren und bringen tiefes Fachwissen in jedes Projekt ein.",
      explore: "Entdecken",
    },
    industryPage: {
      back: "Alle Branchen",
    },
    servicePage: {
      eyebrow: "Unsere Leistungen",
    },
  },
};

export type Translation = typeof translations.en;
