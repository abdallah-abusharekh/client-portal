import { Project } from "../types/project.types";

export const projectsMock: Project[] = [
  {
    id: "p1",
    name: "E-Commerce Platform",
    description:
      "Full-stack multi-vendor marketplace with payment integration.",
    clientId: "c1",
    clientName: "Acme Corp",

    budget: 15000,
    status: "active",
    progress: 65,

    startDate: "2026-01-05",
    dueDate: "2026-03-20",
    createdAt: "2025-12-20",

    teamSize: 4,
  },

  {
    id: "p2",
    name: "Marketing Website Redesign",
    description: "Modern responsive redesign with SEO optimization.",
    clientId: "c2",
    clientName: "Bright Studio",

    budget: 6000,
    status: "completed",
    progress: 100,

    startDate: "2025-10-01",
    dueDate: "2026-01-15",
    createdAt: "2025-09-20",

    teamSize: 2,
  },

  {
    id: "p3",
    name: "Internal CRM System",
    description:
      "Custom CRM system with role-based access and analytics dashboard.",
    clientId: "c3",
    clientName: "Nova Solutions",

    budget: 22000,
    status: "on_hold",
    progress: 40,

    startDate: "2026-02-01",
    dueDate: "2026-05-30",
    createdAt: "2026-01-15",

    teamSize: 5,
  },

  {
    id: "p4",
    name: "Mobile App Prototype",
    description: "Cross-platform prototype for investor demonstration.",
    clientId: "c4",
    clientName: "Skyline Ventures",

    budget: 8000,
    status: "cancelled",
    progress: 10,

    startDate: "2026-03-01",
    dueDate: "2026-04-15",
    createdAt: "2026-02-10",

    teamSize: 3,
  },
];
