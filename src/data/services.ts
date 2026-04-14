export interface ServiceSubsection {
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  subsections: ServiceSubsection[];
}

export const services: ServiceData[] = [
  {
    slug: "engineering",
    title: "Commissioning Engineering Services",
    subtitle:
      "End-to-end engineering support for commissioning planning, execution, and verification.",
    intro:
      "We provide consulting services for pre-commissioning, commissioning, start-up, and hand-over based on system and sub-system approach. This consultancy helps improve the commissioning phase and also in previous stages like engineering, procurement, and construction.",
    subsections: [
      {
        title: "System and Sub-system Definition",
        description:
          "To divide the overall plant into systems and subsystems for completion activities is a part of engineering phase of the project. The divisions definition is a key preparation activity that has a major impact on all aspects of completion execution.",
      },
      {
        title: "PFD, P&ID, SLD etc. Calculations and Mark-up",
        description:
          "It includes the definition of the limits and contents of each subsystem by marking-up on engineering drawings, vendors P&I's and single line diagrams, all lines vessels, mechanical equipment, electrical feeders and bus bars belonging to that subsystem. The marked-up P&ID's and SLD's warrants that any item or equipment will not be energized unless pre-commissioning and commissioning checks and tests has been carried out before.",
      },
      {
        title: "Start-up Priority Definition",
        description:
          "System and subsystem priority will be defined during engineering phase of the project conducting procurement and construction to expedite commissioning and start-up activities. Preparing Start-Up sequence, as a guideline for the project main activities will be prepared based on the units of the project. The guideline should be prepared at the engineering phase of the project to lead and expedite engineering, procurement, and construction activities.",
      },
      {
        title: "Early Production Scenarios",
        description:
          "Early production scenarios would be prepared if it were plausible and safe according to requirements of the clients. It includes shortening some requirements of the project with temporary solutions or modifications.",
      },
      {
        title: "Pre-commissioning and Commissioning Work-front Detection",
        description:
          "Pre-Commissioning and commissioning work-fronts are tests and checks which are not suffer from lack of anything but due to the non-urgency postponed. They can be detected and executed alongside the other activities of the completion process.",
      },
      {
        title: "Ready for Commissioning (RFC) and Ready for Start-up (RFSU) Planning",
        description:
          "RFC is when all pre-commissioning activities are executed for the nominated system or sub-system. RFSU is when all commissioning activities are executed for the system or sub system. Both of above requires planning and follow-ups.",
      },
      {
        title: "Operational Comments",
        description:
          "Alongside all steps of engineering, procurement and construction, there should be a supervision viewpoint on the process to consider the operability of the executed activity. Operational comments consider the viewpoint of the operation phase of the project.",
      },
    ],
  },
  {
    slug: "system-implementation",
    title: "Commissioning System Implementation",
    subtitle:
      "Setup and configuration of structured commissioning systems for tracking, control, and reporting.",
    intro:
      "A complete and smooth completion procedure requires a system that can cover all activities with the relevant documents, test sheets and check lists. In large scale projects, it requires a dedicated software for follow-ups and additional services.",
    subsections: [
      {
        title: "Database Preparation",
        description:
          "It includes all the project equipment and their interconnections as defined in the engineering phase of the project with the required database. Generally Microsoft Access or SQL would be used.",
      },
      {
        title: "Data Entry",
        description:
          "Data Entry is one of the important phases of the project that requires entering information of the systems, sub-systems, equipment, engineering documents, inspection, test sheets and check lists and the same. It would be updated with the progress of the project.",
      },
      {
        title: "Reporting",
        description:
          "During execution of completion activities from pre-commissioning to start-up and hand-over, numerous reporting tasks should be done. The software system can help generate the required report for project follow-ups.",
      },
    ],
  },
  {
    slug: "documentation",
    title: "Commissioning Documentation",
    subtitle:
      "Complete documentation management ensuring compliance, traceability, and seamless handover.",
    intro:
      "It includes collection, preparation, updating, and finalization of documents related to the completion activities from pre-commissioning to mechanical completion and hand-over.",
    subsections: [
      {
        title: "Pre-commissioning",
        description:
          "Pre-commissioning documents includes all procedures, specifications, coordination and management documents that required to execute and finalize pre-commissioning activities.",
      },
      {
        title: "Commissioning",
        description:
          "Commissioning documents includes all procedures, preparation plans, coordination and management documents that required to execute and finalize commissioning activities.",
      },
      {
        title: "Start-up and Hand-over",
        description:
          "Start-up and Hand-over documents includes all procedures, preparation plans, safety requirements, coordination and management documents that required to execute and finalize pre-start-up, start-up, hand-over phase.",
      },
      {
        title: "Hand-over Dossiers",
        description:
          "Hand over dossier includes the collection of the history of the project from engineering phase to commissioning, start-up and hand over. It should include all the documents relevant to the project.",
      },
    ],
  },
];
