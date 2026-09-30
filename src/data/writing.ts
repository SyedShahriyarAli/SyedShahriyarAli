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
    title: "Seamless File Management in ASP.NET Core: Azure Blob Storage with Configurable Local Mode",
    date: "Dec 2024",
    excerpt:
      "A file-upload setup that uses Azure Blob Storage in production and a configurable local mode in development.",
    href: "https://medium.com/@shahriyarali08/seamless-file-management-in-asp-net-core-azure-blob-storage-with-configurable-local-mode-55485c5f703d",
  },
  {
    title: "Dynamic UI Updates in Blazor: Using Action Delegates to Communicate Between Components",
    date: "Oct 2024",
    excerpt:
      "Using custom events with Action delegates so a child component can refresh the main layout without tight coupling.",
    href: "https://medium.com/@shahriyarali08/dynamic-ui-updates-in-blazor-using-action-delegates-to-communicate-between-components-0f8f16ac0a27",
  },
  {
    title: "My Experience with .NET MAUI Blazor Hybrid and Creating Installers for Windows",
    date: "Sep 2024",
    excerpt:
      "Reusing Blazor components in a .NET MAUI Blazor Hybrid app without XAML, and packaging Windows installers.",
    href: "https://medium.com/@shahriyarali08/my-experience-with-net-maui-blazor-hybrid-and-creating-installers-for-windows-7ea9682208e3",
  },
  {
    title: "Building Real-Time Web Apps with SignalR, WebAssembly, and ASP.NET Core API",
    date: "Jul 2024",
    excerpt:
      "A full-stack real-time pattern with SignalR hubs, Blazor WebAssembly clients, and ASP.NET Core APIs.",
    href: "https://medium.com/@shahriyarali08/building-real-time-web-apps-with-signalr-webassembly-and-asp-net-core-api-2f94b662782a",
  },
  {
    title: "Dynamic Database Connection Management in SaaS Applications with EF Core",
    date: "May 2024",
    excerpt:
      "Managing per-tenant database connections in multi-tenant SaaS apps using Entity Framework Core.",
    href: "https://medium.com/@shahriyarali08/dynamic-database-connection-management-in-saas-applications-with-ef-core-bd219a01e1b8",
  },
];

export const mediumProfile = "https://medium.com/@shahriyarali08";
