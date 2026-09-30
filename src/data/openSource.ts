export interface OpenSourceRepo {
  name: string;
  description: string;
  href: string;
  stack: string[];
  stars?: number;
  badge?: string;
}

export const openSourceRepos: OpenSourceRepo[] = [
  {
    name: "Architect-NET",
    description:
      "Gamified learning platform for C# developers — refactor codebases using SOLID principles and GoF patterns with Roslyn analyzers.",
    href: "https://github.com/SyedShahriyarAli/Architect-NET",
    stack: [".NET", "Roslyn", "Design Patterns"],
  },
  {
    name: "Executr",
    description:
      "API automation platform for scheduling and monitoring recurring API calls. Clean Architecture with ASP.NET Core 8 and Blazor WASM.",
    href: "https://github.com/SyedShahriyarAli/Executr",
    stack: [".NET 8", "Blazor WASM", "MudBlazor"],
    stars: 1,
  },
  {
    name: "DejaPlay",
    description:
      "Finds historically similar football possessions with vector similarity in Qdrant, then compares them on an interactive timeline and pitch animation. ASP.NET Core API with a React, TypeScript and D3 front-end.",
    href: "https://github.com/SyedShahriyarAli/DejaPlay",
    stack: ["ASP.NET Core", "Qdrant", "React", "D3"],
    badge: "Qdrant Hackathon 2026 · Honorable mention",
  },
  {
    name: "TextToSql",
    description:
      "Natural language to SQL using Ollama embeddings, Qdrant vector search, and Google Gemini. ASP.NET Core Web API with Blazor front-end.",
    href: "https://github.com/SyedShahriyarAli/TextToSql",
    stack: ["ASP.NET Core", "Blazor", "Qdrant", "AI"],
    stars: 1,
  },
  {
    name: "SqlMcpServer",
    description:
      "Secure Model Context Protocol server providing read-only SQL Server access for AI assistants and MCP clients.",
    href: "https://github.com/SyedShahriyarAli/SqlMcpServer",
    stack: ["C#", "SQL Server", "MCP"],
  },
  {
    name: "Microservices",
    description:
      "Event-driven microservices with .NET 9, MongoDB, and RabbitMQ via MassTransit — independent services communicating asynchronously.",
    href: "https://github.com/SyedShahriyarAli/Microservices",
    stack: [".NET 9", "MassTransit", "MongoDB", "RabbitMQ"],
  },
];

export const githubProfile = "https://github.com/SyedShahriyarAli?tab=repositories";
