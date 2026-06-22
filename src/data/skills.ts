export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "back-end",
    skills: [
      "C#",
      ".NET 6/8",
      "ASP.NET Web API",
      "EF Core",
      "LINQ",
    ],
  },
  {
    label: "front-end",
    skills: [
      "Blazor WASM",
      "Angular",
      "TypeScript",
      "Radzen",
      "Syncfusion",
    ],
  },
  {
    label: "databases",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "T-SQL",
    ],
  },
  {
    label: "cloud/devops",
    skills: [
      "Azure",
      "GitHub Actions",
      "Docker",
      "IIS",
    ],
  },
  {
    label: "practices",
    skills: [
      "Clean Architecture",
      "REST",
      "CI/CD",
      "SOLID",
      "Microservices",
      "xUnit",
    ],
  },
];
