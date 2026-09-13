export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
};

export const profile = {
  name: "Jiawei Li",
  preferredName: "Chris",
  role: "Full Stack Developer",
  location: "Brisbane, QLD",
  status: "Australian Permanent Resident",
  email: "lijiawei0708@gmail.com",
  phone: "+61 420 960 510",
  summary:
    "Full Stack Developer with strong frontend expertise and hands-on backend, cloud and DevOps experience. I build and modernise enterprise web applications with React, TypeScript, GraphQL, C#/.NET, SQL Server and Azure, and I am comfortable supporting software from development through release and production.",
};

export const highlights = [
  { value: "8+", label: "Years in software development" },
  { value: "7+", label: "Years building enterprise apps at ENData" },
  { value: "Full Stack", label: "Frontend, backend, cloud & delivery" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "GraphQL",
      "Relay",
      "Vite",
      "RTK Query",
      "HTML5",
      "CSS",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "C#",
      ".NET 6/8",
      "ASP.NET MVC",
      "REST APIs",
      "Apollo Server",
      "Ocelot",
      "Microsoft Graph API",
      "Azure Event Hubs",
    ],
  },
  {
    title: "Database",
    items: [
      "SQL Server",
      "Stored Procedures",
      "Views",
      "Functions",
      "Complex Queries",
      "Database Migration",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Microsoft Azure",
      "Azure DevOps",
      "GitHub Actions",
      "CI/CD",
      "Docker",
      "Kubernetes / AKS",
      "Helm",
      "Azure Container Registry",
      "Azure Key Vault",
    ],
  },
  {
    title: "Observability & Delivery",
    items: [
      "Serilog",
      "New Relic",
      "Release Management",
      "Production Support",
      "Troubleshooting",
      "AI-assisted Development",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "ENData",
    role: "Full Stack Developer",
    period: "June 2019 — Present",
    location: "Brisbane, Australia",
    bullets: [
      "Progressed from frontend development into a full-stack role spanning frontend, backend, APIs, databases, cloud infrastructure, CI/CD and production delivery.",
      "Built and modernised enterprise web applications using React, TypeScript, Relay, GraphQL, REST APIs, C# and .NET.",
      "Developed and maintained SQL Server stored procedures, views, functions and complex queries, including database maintenance and migration work.",
      "Designed, maintained and troubleshot Azure DevOps CI/CD pipelines and contributed to the migration toward GitHub Actions.",
      "Worked with Docker, Helm, Kubernetes/AKS, Azure Container Registry and Azure Key Vault across multiple environments.",
      "Supported formal enterprise releases and production troubleshooting across applications, APIs, databases and Kubernetes workloads.",
    ],
  },
  {
    company: "Infosys Technologies Ltd",
    role: "Software Engineer",
    period: "November 2014 — December 2015",
    location: "Shanghai, China",
    bullets: [
      "Developed .NET applications using C#, ASP.NET and SQL Server.",
      "Worked with backend functionality, SQL Server stored procedures/functions and SSIS-based data workflows.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Enterprise Frontend Modernisation",
    description:
      "Modernised production web applications with React, TypeScript, Relay and GraphQL, replacing and extending legacy functionality with maintainable modern solutions.",
    stack: ["React", "TypeScript", "Relay", "GraphQL"],
  },
  {
    title: "Automatic Reporting Platform",
    description:
      "Built a modern reporting frontend with React, TypeScript, Vite and RTK Query as part of a broader legacy application modernisation initiative.",
    stack: ["React", "TypeScript", "Vite", "RTK Query"],
  },
  {
    title: "Full-stack APIs & Integrations",
    description:
      "Contributed to C#/.NET backend services, GraphQL and REST gateway architectures, Microsoft Graph API integrations and Azure Event Hubs based workflows.",
    stack: ["C#", ".NET", "REST", "GraphQL", "Azure"],
  },
  {
    title: "Enterprise Delivery & Production Support",
    description:
      "Supported CI/CD, release coordination, Kubernetes deployments, production troubleshooting and post-release validation across multiple environments.",
    stack: ["Azure DevOps", "GitHub Actions", "Docker", "Kubernetes", "Helm"],
  },
];
