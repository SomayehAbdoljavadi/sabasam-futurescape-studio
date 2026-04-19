import type { Lang } from "./translations";
import { industries as industriesEn, type IndustryData } from "@/data/industries";
import { services as servicesEn, type ServiceData } from "@/data/services";

// German translations of industries (slugs unchanged)
const industriesDe: IndustryData[] = [
  {
    slug: "chemicals-petrochemicals",
    title: "Chemie- und Petrochemieanlagen",
    subtitle:
      "Commissioning-Beratung für sichere Inbetriebnahme und Leistungsverifizierung in Raffinerien, Petrochemie- und Spezialchemieanlagen.",
    subsections: [
      {
        title: "Raffinerien",
        description:
          "Für Raffinerien und Raffinerieeinheiten umfasst das Commissioning die sichere Inbetriebnahme und Leistungsverifizierung von Rohöldestillation, Hydrocracking, Reforming, Schwefelrückgewinnung und Versorgungssystemen. Dies umfasst typischerweise Spülen, Trocknen, Inertisieren, Dichtheitsprüfungen, Loop-Checks und die kontrollierte Einführung von Kohlenwasserstoffen.",
      },
      {
        title: "Petrochemische Anlagen",
        description:
          "Für petrochemische Anlagen umfasst das Commissioning die sichere Inbetriebnahme und Leistungsverifizierung wichtiger Prozesseinheiten wie Ethylen-Cracker, Propylen-, Aromaten-, Polymer- und Folgeanlagen. Dazu gehören Pre-Commissioning, Funktionsprüfungen, Versorgungsanschlüsse, Reinigung und kontrollierte Inbetriebnahme.",
      },
      {
        title: "Gasaufbereitung & LNG-Anlagen",
        description:
          "Für Gasaufbereitungs- und LNG-Anlagen umfasst das Commissioning Trocknung, Verdichtung, Gasaufbereitung und weitere Vorbehandlungssysteme, damit die Anlage sauberes, trockenes Spezifikationsgas sicher und zuverlässig erreicht. Dazu gehört auch die Verifizierung von Regenerationssystemen, Steuerungen und Versorgungsschnittstellen.",
      },
      {
        title: "Wasserstoff- & Ammoniakanlagen",
        description:
          "Für Wasserstoff- und Ammoniakanlagen konzentriert sich das Commissioning auf sicheres Spülen, Dichtheitsprüfung, Trocknen, Inertisieren und kontrollierte Abkühlung vor der Einführung von Prozessgasen. Es umfasst auch die Verifizierung von Sicherheitssystemen, Entlüftungsverfahren und Bereitschaftsprüfungen.",
      },
      {
        title: "Spezial- und Feinchemieanlagen",
        description:
          "Für Spezial- und Feinchemieanlagen umfassen die Commissioning-Dienste Reaktoren, Destillation, Filtration, Wärmeübertragung, Säurerückgewinnung und Mischsysteme mit Fokus auf sichere Inbetriebnahme, Leistungstests und Prozessstabilität.",
      },
      {
        title: "Pharma & GMP-Anlagen",
        description:
          "Commissioning-Dienste für pharmazeutische und GMP-relevante Prozessanlagen verifizieren, dass Einrichtungen, Versorgungssysteme, Geräte und Steuerungen wie geplant installiert, getestet und betrieben werden – einschließlich der Dokumentation für Qualifizierung und behördliche Compliance.",
      },
      {
        title: "Versorgung & Balance-of-Plant Systeme",
        description:
          "Commissioning-Dienste für Versorgungs- und Balance-of-Plant-Systeme stellen sicher, dass alle Hilfssysteme korrekt installiert, getestet und einsatzbereit sind. Dies umfasst Dampf, Stickstoff, Druckluft, Kühlwasser und Abwasserbehandlungssysteme.",
      },
    ],
  },
  {
    slug: "oil-and-gas",
    title: "Öl & Gas",
    subtitle:
      "Pre-Commissioning, Commissioning und Anfahrleistungen für Upstream-, Midstream- und Downstream-Öl- und Gasinfrastruktur.",
    subsections: [
      {
        title: "Bohrkopf- & Sammelsysteme",
        description:
          "Commissioning-Dienste für Bohrkopf- und Sammelsysteme umfassen Installationsverifizierung, Hook-up-Checks, Pre-Commissioning, Funktionstests und Inbetriebnahme von Bohrungen, Rohrleitungen, Ventilen, Instrumentierung und zugehörigen Anlagen.",
      },
      {
        title: "Pipeline-Systeme",
        description:
          "Die Leistungen umfassen Pre-Commissioning-Prüfungen, Reinigung, Spülen, Hydrotests, Trocknung oder Entwässerung, Dichtheitsprüfung, Pigging und kontrollierte Inbetriebnahme – sowie die Verifizierung von Ventilen, Instrumentierung und Sicherheitssystemen.",
      },
      {
        title: "Terminal- & Exportanlagen",
        description:
          "Für Terminals und Exportstationen umfassen die Commissioning-Dienste Lagertanks, Be- und Entladesysteme, Pumpen, Rohrleitungen, Instrumentierung, Messung und Sicherheitssysteme zur Sicherstellung sicherer Produktübertragung.",
      },
      {
        title: "Offshore-Produktion",
        description:
          "Für die Offshore-Produktion umfassen Commissioning-Dienste mechanische Fertigstellung, Dichtheitsprüfung, Stickstoffspülung und Trocknung, Energetisierung sowie dynamische Tests von Topsides- und Subsea-Systemen.",
      },
    ],
  },
  {
    slug: "power-generation",
    title: "Energieerzeugung & Speicherung",
    subtitle:
      "Commissioning- und Anfahrunterstützung für konventionelle und erneuerbare Kraftwerke, Netzsysteme und Energiespeicheranlagen.",
    subsections: [
      {
        title: "KWK & Industriekraftwerke",
        description:
          "Für Kraft-Wärme-Kopplungs- (KWK) und Industriekraftwerke umfassen die Commissioning-Dienste Kessel, Turbinen, Generatoren, Wärmerückgewinnung, Brennstoffhandling und Stromverteilung – mit Sicherstellung sicherer Inbetriebnahme und stabiler Synchronisierung.",
        },
      {
        title: "Notstrom- & Microgrid-Anlagen",
        description:
          "Für Notstrom- und Microgrid-Anlagen verifizieren die Commissioning-Dienste Generatoren, Schaltanlagen, automatische Umschaltsysteme, Steuerungen und Energiemanagementplattformen.",
      },
      {
        title: "Thermische Kraftwerke",
        description:
          "Für thermische Kraftwerke umfasst das Commissioning Kessel, Dampfturbinen, Kondensatoren, Kühlsysteme und Emissionskontrollen – inklusive Pre-Commissioning, First Fire, Dampfblasen, Synchronisierung und Lasttests.",
      },
      {
        title: "Solar- & Wind-Speicherprojekte",
        description:
          "Für Solar-plus-Speicher- und Wind-plus-Speicher-Projekte verifiziert das Commissioning Wechselrichterintegration, Batteriemanagementsysteme, Netzanschluss-Steuerungen und Energieverteilungslogik.",
      },
      {
        title: "Netzunterstationen & Übertragungsstellen",
        description:
          "Für Netzunterstationen und übertragungsangebundene Speicherstandorte umfasst das Commissioning Transformatoren, Schaltanlagen, Schutzrelais, SCADA-Integration und Kommunikationssysteme.",
      },
      {
        title: "BESS im Versorgungsmaßstab",
        description:
          "Für BESS im Versorgungsmaßstab umfassen die Commissioning-Dienste Standortverifizierung, elektrische und Kommunikationsprüfungen, Sicherheitssystemtests und gestufte Energetisierung.",
      },
    ],
  },
  {
    slug: "data-centers",
    title: "Rechenzentren",
    subtitle:
      "Commissioning-Dienste für missionskritische Rechenzentrumsinfrastruktur, von Hyperscale-Campus bis zu modularen Edge-Bereitstellungen.",
    subsections: [
      {
        title: "Hyperscale-Rechenzentren",
        description:
          "Für Hyperscale-Rechenzentren konzentrieren sich die Commissioning-Dienste auf die Validierung sehr großer elektrischer Systeme, Redundanz und Failover-Leistung vor Inbetriebnahme.",
      },
      {
        title: "Colocation-Rechenzentren",
        description:
          "Für Colocation-Rechenzentren umfassen die Commissioning-Dienste Neubauten und große Erweiterungen – mit gründlicher Prüfung mechanischer, Steuerungs- und Backup-Systeme zur Übergabe an Mieter.",
      },
      {
        title: "Enterprise-Rechenzentren",
        description:
          "Für Enterprise-Rechenzentren verifizieren die Commissioning-Dienste, dass Strom, Kühlung, Steuerungen und IT-Infrastruktur kerngeschäftliche Systeme mit hoher Verfügbarkeit unterstützen können.",
      },
      {
        title: "AI/HPC-Rechenzentren",
        description:
          "Für AI/HPC-Rechenzentren konzentrieren sich die Commissioning-Dienste auf die Validierung von Hochleistungsstromversorgung, fortschrittlicher Kühlung, Steuerungen und Redundanz vor Energetisierung.",
      },
      {
        title: "Edge- & Mikro-Rechenzentren",
        description:
          "Für Edge- und Mikro-Rechenzentren verifizieren die Commissioning-Dienste, dass kompakte, missionskritische Systeme korrekt installiert und für zuverlässigen lokalen Betrieb bereit sind.",
      },
      {
        title: "Modulare & containerisierte Rechenzentren",
        description:
          "Für modulare oder containerisierte Rechenzentren verifizieren die Commissioning-Dienste, dass werksgebaute Module und Vor-Ort-Systeme korrekt integriert, getestet und vor Energetisierung bereit sind.",
      },
    ],
  },
  {
    slug: "mining-metals",
    title: "Bergbau & Metallindustrie",
    subtitle:
      "Commissioning- und Anfahrberatung für Mineralverarbeitung, Materialhandling und Bergbauinfrastruktur.",
    subsections: [
      {
        title: "Erzaufbereitungsanlagen & Konzentratoren",
        description:
          "Für Erzaufbereitungsanlagen und Konzentratoren umfassen die Commissioning-Dienste die sichere Inbetriebnahme und Leistungstests von Brechen, Mahlen, Flotation, Eindickung, Filtration und Tailings-Systemen.",
      },
      {
        title: "Hydrometallurgische Anlagen",
        description:
          "Für hydrometallurgische Anlagen umfassen die Commissioning-Dienste Inbetriebnahme und Leistungstests von Laugung, Solventextraktion, Fällung und Raffinerieprozessen.",
      },
      {
        title: "Pyrometallurgische Anlagen",
        description:
          "Für pyrometallurgische Anlagen umfassen die Commissioning-Dienste sichere Inbetriebnahme und Leistungsverifizierung von Schmelzern, Röstern, Öfen, Konvertern und Abgasbehandlungssystemen.",
      },
      {
        title: "Mineralverarbeitung & Aufbereitung",
        description:
          "Für Mineralverarbeitungs- und Aufbereitungsanlagen umfassen die Commissioning-Dienste sichere Inbetriebnahme von Brechen, Mahlen, Flotation, Eindickung, Filtration, Tailings und zugehörigen Slurry-Handling-Systemen.",
      },
      {
        title: "Materialhandhabungssysteme",
        description:
          "Für Materialhandhabungssysteme umfassen die Commissioning-Dienste sichere Inbetriebnahme und Leistungstests von Förderbändern, Lagerplätzen, Brechern, Reclaimern und Schiffsbeladern.",
      },
      {
        title: "Bergwerksinfrastruktur & Prozessanlagen",
        description:
          "Für Bergwerksinfrastruktur und Prozessanlagen umfassen die Commissioning-Dienste Pumpen, Wassersysteme, Versorgungssysteme und Steuerungen, um sicheren und zuverlässigen Betrieb sicherzustellen.",
      },
      {
        title: "Wasser- & Abwasseraufbereitung",
        description:
          "Für Wasseraufbereitungsanlagen und Abwasserbehandlungsanlagen verifizieren die Commissioning-Dienste, dass Behandlungseinheiten, Pumpen, Instrumente, Steuerungen und Rohrleitungen korrekt installiert sind.",
      },
      {
        title: "Metallrecycling & Sekundärverarbeitung",
        description:
          "Für Metallrecycling- und Sekundärverarbeitungsanlagen umfassen die Commissioning-Dienste Inbetriebnahme und Leistungstests von Shredder-, Trenn-, Sieb- und Produktrückgewinnungslinien.",
      },
    ],
  },
];

const servicesDe: ServiceData[] = [
  {
    slug: "engineering",
    title: "Commissioning Engineering Dienstleistungen",
    subtitle:
      "Umfassende Engineering-Unterstützung für Commissioning-Planung, Ausführung und Verifizierung.",
    intro:
      "Wir bieten Beratungsdienste für Pre-Commissioning, Commissioning, Anfahren und Übergabe nach einem System- und Subsystem-Ansatz. Diese Beratung verbessert die Commissioning-Phase und auch frühere Phasen wie Engineering, Beschaffung und Bau.",
    subsections: [
      {
        title: "System- und Subsystem-Definition",
        description:
          "Die Aufteilung der Gesamtanlage in Systeme und Subsysteme für Fertigstellungsaktivitäten ist Teil der Engineering-Phase. Die Aufteilungsdefinition ist eine zentrale Vorbereitung mit großem Einfluss auf alle Aspekte der Fertigstellungsausführung.",
      },
      {
        title: "PFD-, P&ID-, SLD-Berechnungen und Markups",
        description:
          "Dies umfasst die Definition der Grenzen und Inhalte jedes Subsystems durch Markups auf Engineering-Zeichnungen, Lieferanten-P&IDs und Einlinienschaltbildern – aller Leitungen, Behälter, mechanischen Geräte, elektrischen Abgänge und Sammelschienen.",
      },
      {
        title: "Anfahrprioritäts-Definition",
        description:
          "System- und Subsystem-Prioritäten werden während der Engineering-Phase definiert, um Beschaffung und Bau zu lenken und Commissioning- und Anfahraktivitäten zu beschleunigen. Eine Anfahrsequenz wird als Leitfaden für die Hauptaktivitäten erstellt.",
      },
      {
        title: "Frühproduktionsszenarien",
        description:
          "Frühproduktionsszenarien werden vorbereitet, sofern dies plausibel und sicher entsprechend den Kundenanforderungen ist. Dies umfasst die Verkürzung einiger Projektanforderungen mit temporären Lösungen oder Modifikationen.",
      },
      {
        title: "Erkennung von Pre-Commissioning- und Commissioning-Workfronts",
        description:
          "Pre-Commissioning- und Commissioning-Workfronts sind Tests und Prüfungen, die nicht durch Mangel an etwas behindert werden, sondern aufgrund von Nicht-Dringlichkeit verschoben wurden. Sie können erkannt und parallel zu anderen Aktivitäten ausgeführt werden.",
      },
      {
        title: "RFC- und RFSU-Planung",
        description:
          "RFC ist erreicht, wenn alle Pre-Commissioning-Aktivitäten für das nominierte System oder Subsystem ausgeführt sind. RFSU ist erreicht, wenn alle Commissioning-Aktivitäten ausgeführt sind. Beides erfordert Planung und Nachverfolgung.",
      },
      {
        title: "Betriebliche Kommentare",
        description:
          "Während aller Schritte von Engineering, Beschaffung und Bau sollte eine Aufsichtsperspektive auf den Prozess bestehen, um die Betriebsfähigkeit zu berücksichtigen. Betriebliche Kommentare berücksichtigen die Sicht der Betriebsphase.",
      },
    ],
  },
  {
    slug: "system-implementation",
    title: "Implementierung von Commissioning-Systemen",
    subtitle:
      "Einrichtung und Konfiguration strukturierter Commissioning-Systeme zur Verfolgung, Steuerung und Berichterstattung.",
    intro:
      "Ein vollständiges und reibungsloses Fertigstellungsverfahren erfordert ein System, das alle Aktivitäten mit den relevanten Dokumenten, Testblättern und Checklisten abdeckt. Bei Großprojekten ist eine spezielle Software für Nachverfolgung und Zusatzdienste erforderlich.",
    subsections: [
      {
        title: "Datenbankvorbereitung",
        description:
          "Umfasst alle Projektgeräte und ihre Verbindungen wie in der Engineering-Phase definiert mit der erforderlichen Datenbank. Allgemein wird Microsoft Access oder SQL verwendet.",
      },
      {
        title: "Dateneingabe",
        description:
          "Dateneingabe ist eine wichtige Projektphase, in der Informationen zu Systemen, Subsystemen, Geräten, Engineering-Dokumenten, Inspektionen, Testblättern und Checklisten eingegeben werden. Sie wird mit dem Projektfortschritt aktualisiert.",
      },
      {
        title: "Berichterstattung",
        description:
          "Während der Ausführung von Fertigstellungsaktivitäten von Pre-Commissioning bis Anfahren und Übergabe sind zahlreiche Berichtsaufgaben zu erledigen. Das Softwaresystem hilft, die erforderlichen Berichte zu erstellen.",
      },
    ],
  },
  {
    slug: "documentation",
    title: "Commissioning-Dokumentation",
    subtitle:
      "Vollständiges Dokumentationsmanagement für Compliance, Nachvollziehbarkeit und nahtlose Übergabe.",
    intro:
      "Umfasst Sammlung, Vorbereitung, Aktualisierung und Finalisierung von Dokumenten zu den Fertigstellungsaktivitäten von Pre-Commissioning bis mechanischer Fertigstellung und Übergabe.",
    subsections: [
      {
        title: "Pre-Commissioning",
        description:
          "Pre-Commissioning-Dokumente umfassen alle Verfahren, Spezifikationen, Koordinations- und Managementdokumente, die zur Ausführung und Finalisierung von Pre-Commissioning-Aktivitäten erforderlich sind.",
      },
      {
        title: "Commissioning",
        description:
          "Commissioning-Dokumente umfassen alle Verfahren, Vorbereitungspläne, Koordinations- und Managementdokumente, die zur Ausführung und Finalisierung von Commissioning-Aktivitäten erforderlich sind.",
      },
      {
        title: "Anfahren und Übergabe",
        description:
          "Anfahr- und Übergabedokumente umfassen alle Verfahren, Vorbereitungspläne, Sicherheitsanforderungen, Koordinations- und Managementdokumente für die Pre-Start-up-, Start-up- und Übergabephase.",
      },
      {
        title: "Übergabedossiers",
        description:
          "Übergabedossiers umfassen die Sammlung der Projekthistorie von der Engineering-Phase bis zu Commissioning, Anfahren und Übergabe – einschließlich aller projektrelevanten Dokumente.",
      },
    ],
  },
];

export const getIndustries = (lang: Lang): IndustryData[] =>
  lang === "de" ? industriesDe : industriesEn;

export const getServices = (lang: Lang): ServiceData[] =>
  lang === "de" ? servicesDe : servicesEn;
