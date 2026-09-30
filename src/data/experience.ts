export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "AME Software Solutions",
    period: "2025 – Present",
    bullets: [
      "Architecting AI-powered chatbots to automate client interactions, targeting a reduction in support ticket volume by <span class=\"text-success\">40%</span> and improving response accuracy.",
      "Modernizing the core product architecture by migrating legacy applications to <span class=\"text-accent\">.NET Core 8 MVC</span>, maintaining high code coverage and reliability using xUnit.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Turf Tech",
    period: "2022 – 2025",
    bullets: [
      "Led development of an integrated online/offline sales and reconciliation system supporting <span class=\"text-accent\">10k+ daily transactions</span> with <span class=\"text-success\">99.9% uptime</span>.",
      "Architected and delivered Blazor WebAssembly front-ends with ASP.NET Core APIs and EF Core, cutting page load times by <span class=\"text-success\">40%</span> and boosting conversion on POS flows by <span class=\"text-success\">12%</span>.",
      "Built and optimized RESTful services backed by SQL Server; reduced P95 API latency from <span class=\"text-accent\">420ms to 180ms</span> by optimizing queries and indexes.",
      "Mentored three junior developers through code reviews and pair programming, which decreased post-release defects by <span class=\"text-success\">30%</span>.",
    ],
  },
  {
    title: "Junior .NET Developer",
    company: "Turf Tech",
    period: "2020 – 2022",
    bullets: [
      "Developed and maintained applications using .NET Framework, WinForms, UWP, and ASP.NET WebForms.",
      "Worked with JavaScript and jQuery to ensure seamless communication within WebForms and APIs.",
    ],
  },
];

export interface EducationItem {
  title: string;
  org: string;
  period: string;
  note?: string;
  href?: string;
  hrefLabel?: string;
}

export const education: EducationItem[] = [
  {
    title: "B.Sc. in Artificial Intelligence",
    org: "Dawood University of Engineering and Technology",
    period: "2022 – 2026",
    note: "Final Year Project: AI Legal Advisor, a Graph RAG assistant for Pakistani cyber law.",
  },
];

export const volunteering: EducationItem[] = [
  {
    title: "Microsoft Learn Student Ambassador",
    org: "Microsoft",
    period: "2023 – 2026",
    note: "Ambassadors Projects Team Lead (Jul 2024) and Azure Responsible AI Workshop coach (Jan 2024).",
    href: "https://www.credly.com/users/syed-shahriyar-ali/badges",
    hrefLabel: "View badges on Credly",
  },
];

export const recognition: EducationItem[] = [
  {
    title: "Honorable Mention, Vector Space Hackathon 2026",
    org: "Qdrant · “Think Outside the Bot”",
    period: "2026",
    note: "Recognized for DejaPlay, a football play similarity search built on Qdrant.",
    href: "https://qdrant.tech/blog/vector-space-hackathon-winners-2026/",
    hrefLabel: "Read the announcement",
  },
  {
    title: "Hackathon participation",
    org: "HackerRank · Google BWAI · remoteBase",
    period: "2025 – 2026",
    note: "Built and submitted an AI agent for HackerRank Orchestrate (May 2026). Also took part in the BWAI Series 24-hour hackathon (2026) and Hackfest 3.0 (Jul 2025).",
  },
];
