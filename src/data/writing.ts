export interface Article {
  title: string;
  date: string;
  excerpt: string;
  href: string;
}

export const articles: Article[] = [
  {
    title: "Beyond RAG: Building an Intelligent Shipment Query System with Tool Calling",
    date: "Dec 2025",
    excerpt:
      "How tool calling goes beyond retrieval-augmented generation for structured shipment and logistics queries.",
    href: "https://medium.com/@shahriyarali08/beyond-rag-building-an-intelligent-shipment-query-system-with-tool-calling-e111a23ffa9d",
  },
  {
    title: "Dynamic Database Connection Management in SaaS Applications with EF Core",
    date: "May 2024",
    excerpt:
      "Managing per-tenant database connections in multi-tenant SaaS apps using Entity Framework Core.",
    href: "https://medium.com/@shahriyarali08/dynamic-database-connection-management-in-saas-applications-with-ef-core-bd219a01e1b8",
  },
  {
    title: "Building Real-Time Web Apps with SignalR, WebAssembly, and ASP.NET Core API",
    date: "Jul 2024",
    excerpt:
      "A full-stack real-time pattern with SignalR hubs, Blazor WebAssembly clients, and ASP.NET Core APIs.",
    href: "https://medium.com/@shahriyarali08/building-real-time-web-apps-with-signalr-webassembly-and-asp-net-core-api-2f94b662782a",
  },
];

export const mediumProfile = "https://medium.com/@shahriyarali08";
