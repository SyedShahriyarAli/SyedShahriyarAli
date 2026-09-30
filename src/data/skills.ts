export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Back-End",
    skills: [
      "C#",
      ".NET Framework / Core (6 & 8)",
      "ASP.NET Web API",
      "EF Core",
      "LINQ",
      "SignalR",
      "RabbitMQ / MassTransit",
      "SAP Integration",
      "Python",
      "Flask",
    ],
  },
  {
    label: "Front-End",
    skills: [
      "Blazor WASM",
      ".NET MAUI",
      "PWA",
      "React + Vite",
      "Angular",
      "TypeScript",
      "HTML5/CSS3",
      "Radzen",
      "Syncfusion",
    ],
  },
  {
    label: "Databases",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "SQLite",
      "MongoDB",
      "T-SQL",
      "Query Optimization",
    ],
  },
  {
    label: "AI & Data",
    skills: [
      "Graph RAG",
      "LangGraph",
      "Neo4j",
      "Qdrant",
      "Ollama",
      "MCP",
      "EasyOCR",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "Azure App Service",
      "Azure SQL Database",
      "Azure Key Vault",
      "GitHub Actions",
      "Docker",
      "IIS",
    ],
  },
  {
    label: "Tools & Practices",
    skills: [
      "Git",
      "Postman",
      "Clean Architecture",
      "REST",
      "CI/CD",
      "SOLID",
      "Microservices",
      "xUnit",
    ],
  },
];
