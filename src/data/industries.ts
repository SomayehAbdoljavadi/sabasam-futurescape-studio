export interface IndustrySubsection {
  title: string;
  description: string;
}

export interface IndustryData {
  slug: string;
  title: string;
  subtitle: string;
  subsections: IndustrySubsection[];
}

export const industries: IndustryData[] = [
  {
    slug: "chemicals-petrochemicals",
    title: "Chemical & Petrochemical Plants",
    subtitle: "Commissioning consulting for safe startup and performance verification across refinery, petrochemical, and specialty chemical facilities.",
    subsections: [
      {
        title: "Refineries",
        description:
          "For refineries and refinery units, commissioning covers the safe startup and performance verification of crude distillation, hydrocracking, reforming, sulfur recovery, and utility systems. It typically includes flushing, drying, inerting, leak testing, loop checks, and controlled introduction of hydrocarbons to ensure reliable operation and compliance with design requirements.",
      },
      {
        title: "Petrochemical Plants",
        description:
          "For petrochemical plants, commissioning covers the safe startup and performance verification of major process units such as ethylene crackers, propylene units, aromatics units, polymer plants, and derivative units. It includes pre-commissioning, functional testing, utility tie-ins, cleaning and flushing, and controlled startup to ensure the unit reaches design operation reliably.",
      },
      {
        title: "Gas Processing & LNG Facilities",
        description:
          "For gas processing and LNG-related facilities, commissioning covers dehydration, compression, gas treating, and other pretreatment systems so the plant can reach clean, dry, specification gas safely and reliably. It also includes verification of regeneration systems, controls, and utility interfaces needed for stable liquefaction or gas processing operation.",
      },
      {
        title: "Hydrogen & Ammonia Facilities",
        description:
          "For hydrogen and ammonia facilities, commissioning focuses on safe purging, leak testing, drying, inerting, and controlled cooldown before introducing process gases or reaching operating conditions. It also includes verification of safety systems, venting procedures, and readiness checks for equipment and utilities so the plant can be brought into service safely and reliably.",
      },
      {
        title: "Specialty & Fine Chemical Plants",
        description:
          "For specialty and fine chemical plants, commissioning services cover reactors, distillation, filtration, heat transfer, acid recovery, and mixing systems, with a focus on safe startup, performance testing, and process stability. The work typically includes pre-commissioning, functional checks, cleaning/flushing, utility integration, control testing, and handover to operations.",
      },
      {
        title: "Pharmaceuticals & GMP Facilities",
        description:
          "Commissioning services for pharmaceutical and GMP-related process plants verify that facilities, utilities, equipment, and controls are installed, tested, and operating as designed, while generating the documentation needed to support qualification and regulatory compliance.",
      },
      {
        title: "Utility & Balance-of-Plant Systems",
        description:
          "Commissioning services for utility and balance-of-plant systems ensure all support equipment is properly installed, tested, and ready to operate safely and reliably. This includes steam, nitrogen, compressed air, cooling water, and wastewater treatment systems that support the main process.",
      },
    ],
  },
  {
    slug: "oil-and-gas",
    title: "Oil & Gas",
    subtitle: "Pre-commissioning, commissioning, and startup services for upstream, midstream, and downstream oil & gas infrastructure.",
    subsections: [
      {
        title: "Wellhead & Gathering Systems",
        description:
          "Commissioning services for wellhead and gathering systems cover installation verification, hook-up checks, pre-commissioning, functional testing, and startup of wells, piping, valves, instrumentation, and associated facilities. The goal is to ensure the well site and gathering network are safe, connected, and ready for reliable operation.",
      },
      {
        title: "Pipeline Systems",
        description:
          "Services cover pre-commissioning checks, cleaning, flushing, hydrotesting, drying or dewatering, leak testing, pigging, and controlled startup to prove the line is safe and ready for service. They also include verification of valves, instrumentation, safety systems, and line-fill or product introduction procedures to ensure reliable operation.",
      },
      {
        title: "Terminal & Export Facilities",
        description:
          "For terminals and export stations, commissioning services cover storage tanks, loading/unloading systems, pumps, piping, instrumentation, metering, and safety systems to ensure safe product transfer and reliable operation. The work typically includes pre-commissioning, leak and function testing, control checks, and startup readiness for truck, rail, marine, or pipeline export service.",
      },
      {
        title: "Offshore Production",
        description:
          "For offshore production, commissioning services cover mechanical completion, leak testing, nitrogen purging and drying, energization, and dynamic testing of topsides and subsea systems to ensure the facility is safe and ready for start-up. They also include planning, hook-up support, and readiness verification for items like power generation, ESD systems, and export systems before offshore handover.",
      },
    ],
  },
  {
    slug: "power-generation",
    title: "Power Generation & Storage",
    subtitle: "Commissioning and startup support for conventional and renewable power plants, grid systems, and energy storage facilities.",
    subsections: [
      {
        title: "CHP & Industrial Power Plants",
        description:
          "For combined heat and power (CHP) and industrial power plants, commissioning services cover boiler systems, turbines, generators, heat recovery, fuel handling, and electrical distribution. The work ensures safe startup, reliable synchronization, and stable operation under varying load conditions.",
      },
      {
        title: "Backup Power & Microgrid Facilities",
        description:
          "For backup power and microgrid facilities, commissioning services verify generators, switchgear, automatic transfer systems, controls, and energy management platforms. The focus is on proving reliable islanding capability, seamless failover, and coordinated operation of distributed energy resources.",
      },
      {
        title: "Thermal Power Plants",
        description:
          "For thermal power plants, commissioning covers boiler systems, steam turbines, condensers, cooling systems, and emissions controls. Services include pre-commissioning checks, first fire, steam blowing, synchronization, and load testing to verify safe, efficient operation at design capacity.",
      },
      {
        title: "Solar & Wind Storage Projects",
        description:
          "For solar-plus-storage and wind-plus-storage projects, commissioning verifies inverter integration, battery management systems, grid-tie controls, and energy dispatch logic. The work ensures safe energization, performance validation, and compliance with grid interconnection requirements.",
      },
      {
        title: "Grid Substations & Transmission Sites",
        description:
          "For grid substations and transmission-connected storage sites, commissioning covers transformers, switchgear, protection relays, SCADA integration, and communication systems. The process ensures safe energization, correct protection coordination, and readiness for grid-connected operation.",
      },
      {
        title: "Utility-Scale BESS",
        description:
          "For utility-scale BESS, commissioning services cover site verification, electrical and communication checks, safety-system testing, and staged energization of the battery, inverter, and control systems. The work also includes grid compliance testing, performance validation, and handover readiness to ensure safe, reliable operation.",
      },
    ],
  },
  {
    slug: "data-centers",
    title: "Data Centers",
    subtitle: "Commissioning services for mission-critical data center infrastructure, from hyperscale campuses to modular edge deployments.",
    subsections: [
      {
        title: "Hyperscale Data Centers",
        description:
          "For hyperscale data centers, commissioning services focus on validating very large electrical and redundancy, and failover performance before go-live. Because these facilities have little tolerance for downtime, commissioning must prove stable operation under load and catch integration issues early.",
      },
      {
        title: "Colocation Data Centers",
        description:
          "For colocation data centers, commissioning services cover new builds and major expansion phases — mechanical, controls, and backup systems are installed correctly, tested thoroughly, and ready for tenant handover. The process also includes integrated testing, redundancy checks, and black-building style validation.",
      },
      {
        title: "Enterprise Data Centers",
        description:
          "For enterprise data centers, commissioning services verify that power, cooling, controls, and IT infrastructure are ready to support core business systems with high availability. In disaster recovery environments, the focus also includes failover, redundancy, backup power, and recovery testing.",
      },
      {
        title: "AI/HPC Data Centers",
        description:
          "For AI/HPC data centers, commissioning services focus on validating high-density power delivery, advanced cooling, controls, and redundancy before the facility is energized. Because these sites handle unusually high thermal loads and often use liquid cooling, commissioning also includes integrated testing under realistic load conditions.",
      },
      {
        title: "Edge & Micro Data Centers",
        description:
          "For edge and micro data centers, commissioning services verify that compact, mission-critical systems are installed correctly, tested end to end, and ready for reliable local operation before energization. This usually includes factory and site acceptance testing, power and cooling checks, controls and alarm testing, and redundancy/failover testing.",
      },
      {
        title: "Modular & Containerized Data Centers",
        description:
          "For modular or containerized data centers, commissioning services verify factory-built modules and on-site systems are correctly integrated, tested, and ready before energization. This usually includes FAT, site installation checks, SAT, functional testing, and integrated system testing.",
      },
    ],
  },
  {
    slug: "mining-metals",
    title: "Mining & Metal Industries",
    subtitle: "Commissioning and startup consulting for mineral processing, material handling, and mine infrastructure facilities.",
    subsections: [
      {
        title: "Ore Processing Plants & Concentrators",
        description:
          "For ore processing plants and concentrators, commissioning services cover the safe start-up and performance testing of crushing, grinding, flotation, thickening, filtration, and tailings systems. The work typically includes dry and wet checks, water and slurry trials, reagent and ore introduction, control testing, and ramp-up support.",
      },
      {
        title: "Hydrometallurgical Plants",
        description:
          "For hydrometallurgical plants, commissioning services cover the start-up and performance testing of leaching, solvent extraction, precipitation, and refining circuits. The work focuses on safe reagent handling, slurry and solution flows, instrumentation and control checks, and staged testing to ensure the plant produces clean, consistent metal recovery.",
      },
      {
        title: "Pyrometallurgical Plants",
        description:
          "For pyrometallurgical plants, commissioning services cover safe start-up and performance verification of smelters, roasters, furnaces, converters, and off-gas treatment systems. The work typically includes pre-commissioning checks, refractory and mechanical inspections, control and safety testing, heat-up and dry-out procedures, and integrated trials.",
      },
      {
        title: "Mineral Processing & Beneficiation",
        description:
          "For mineral processing and beneficiation plants, commissioning services cover the safe startup and performance verification of crushing, grinding, flotation, thickening, filtration, tailings, and related slurry-handling systems. The work typically includes dry and wet checks, water and reagent trials, control tuning, and ramp-up support.",
      },
      {
        title: "Material Handling Systems",
        description:
          "For material handling systems, commissioning services cover the safe startup and performance testing of conveyors, stockyards, crushers, reclaimers, and shiploaders. The work usually includes alignment checks, dry runs, interlock and control testing, load trials, and integration of feeding, conveying, stacking, reclaiming, and loading functions.",
      },
      {
        title: "Mine Infrastructure & Process Facilities",
        description:
          "For mine infrastructure and process facilities, commissioning services cover pumps, water systems, utilities, and control systems to make sure the site is ready for safe and reliable operation. This usually includes pre-commissioning, wet or hot commissioning, integrated testing, and operational support for process and non-process areas.",
      },
      {
        title: "Water Treatment & Wastewater Facilities",
        description:
          "For water treatment plants and wastewater treatment facilities, commissioning services verify that treatment units, pumps, instruments, controls, and piping are installed correctly and ready for reliable operation. The process usually includes flushing, pressure testing, electrical checks, SAT, operator training, and start-up optimization.",
      },
      {
        title: "Metal Recycling & Secondary Processing",
        description:
          "For metal recycling and secondary processing plants, commissioning services cover the startup and performance testing of shredding, separation, screening, and product recovery lines. The work typically includes dry and wet checks, interlock and control testing, load trials, and ramp-up support to ensure safe operation and high recovery.",
      },
    ],
  },
];
