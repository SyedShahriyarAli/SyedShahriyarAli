export interface Project {
  slug: string;
  name: string;
  client: string;
  role: string;
  problem: string;
  stack: string[];
  bullets: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "aku-pos",
    name: "ERA POS & E-Commerce",
    client: "Agha Khan University",
    role: "Senior Software Engineer / Technical Lead",
    problem:
      "High-volume point-of-sale and e-commerce for a university hospital, requiring reliable online/offline transaction handling.",
    stack: ["Blazor WASM", "ASP.NET Core", "EF Core", "SQL Server"],
    bullets: [
      "Supports 10k+ daily transactions with 99.9% uptime.",
      "Integrated online/offline sales and reconciliation system.",
      "Reduced checkout latency by 45% across POS flows.",
    ],
  },
  {
    slug: "colgate-pwa",
    name: "GIFT & POSM Inventory PWA",
    client: "Colgate Palmolive",
    role: "Senior Software Engineer",
    problem:
      "Field teams needed an inventory workflow integrated with SAP, without relying on manual reconciliation.",
    stack: ["Blazor", "SAP Integration", "PWA", "REST APIs"],
    bullets: [
      "Reduced manual reconciliation effort by 35%.",
      "Integrated inventory workflows with SAP backend systems.",
      "Delivered offline-capable PWA for field teams.",
    ],
  },
  {
    slug: "pmac",
    name: "PMAC Platform Modernization",
    client: "AME Software Solutions",
    role: "Senior Software Engineer",
    problem:
      "Legacy parcel audit and shipping cost recovery platform needed modernization without disrupting production workflows.",
    stack: [".NET 8", "ASP.NET Core MVC", "xUnit", "REST APIs"],
    bullets: [
      "Migrating PMAC from legacy systems to .NET 8 MVC.",
      "Modernizing core architecture while maintaining high test coverage with xUnit.",
      "Supporting parcel visibility, billing audit, and carrier management at scale.",
    ],
    link: "https://www.parcelmanagement.com/",
  },
];
