export interface Project {
  slug: string;
  name: string;
  client: string;
  role: string;
  problem: string;
  stack: string[];
  bullets: string[];
  links?: { label: string; href: string }[];
  diagram?: "era";
}

export const projects: Project[] = [
  {
    slug: "aku-pos",
    name: "ERA POS & E-Commerce",
    client: "Aga Khan University",
    role: "Senior Software Engineer / Technical Lead",
    problem:
      "High-volume point-of-sale and e-commerce for a university hospital, requiring reliable online/offline transaction handling.",
    stack: [
      "Blazor WASM",
      "ASP.NET Core",
      "EF Core",
      "SQL Server",
      ".NET MAUI",
      "SQLite",
    ],
    bullets: [
      "Supports 10k+ daily transactions with 99.9% uptime.",
      "Integrated online/offline sales and reconciliation system.",
      "Reduced checkout latency by 45% across POS flows.",
      "Offline-first .NET MAUI POS with local SQLite that syncs to a central Back Office API.",
    ],
    diagram: "era",
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
    links: [{ label: "View site", href: "https://www.parcelmanagement.com/" }],
  },
  {
    slug: "ai-legal-advisor",
    name: "AI Legal Advisor",
    client: "Dawood University · Final Year Project",
    role: "Team member, four-person project team",
    problem:
      "Keyword search misses legal passages that share few words with the question, so a legal assistant has to retrieve and reason over statutes and case law and cite its sources.",
    stack: ["Python", "Graph RAG", "LangGraph", "Neo4j", "Flask", "React + Vite"],
    bullets: [
      "Graph RAG over PECA 2016, its 2025 amendment, and the Electronic Transactions Ordinance 2002, stored in Neo4j and orchestrated with LangGraph.",
      "Answers grounded in cited statutes and related case law.",
      "OCR evidence analysis with EasyOCR, plus petition and complaint drafting.",
      "Selenium and BeautifulSoup pipelines that collect High Court case law.",
    ],
    links: [
      { label: "Live app", href: "https://ailegaladvisor.eraconnect.net" },
      { label: "Source", href: "https://github.com/SyedShahriyarAli/AiLegalAdvisor" },
      {
        label: "Demo video",
        href: "https://github.com/SyedShahriyarAli/AILegalAdvisor/raw/main/FYP-Demo-Video.webm",
      },
    ],
  },
];
