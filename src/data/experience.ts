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
      "Leading migration of PMAC (Parcel Management Auditing and Consulting) from legacy systems to <span class=\"text-accent\">.NET 8 MVC</span>, maintaining high code coverage with xUnit.",
      "Modernizing enterprise parcel audit, billing, and logistics platforms used by shipping and freight management clients.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Turf Tech",
    period: "2022 – 2025",
    bullets: [
      "Led development of an integrated online/offline sales and reconciliation system supporting <span class=\"text-accent\">10k+ daily transactions</span> with <span class=\"text-success\">99.9% uptime</span>.",
      "Architected Blazor WebAssembly front-ends with ASP.NET Core APIs and EF Core, cutting page load times by <span class=\"text-success\">40%</span> and boosting POS conversion by <span class=\"text-success\">12%</span>.",
      "Reduced P95 API latency from <span class=\"text-accent\">420ms to 180ms</span> by optimizing SQL Server queries and indexes.",
      "Mentored three junior developers, decreasing post-release defects by <span class=\"text-success\">30%</span>.",
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
