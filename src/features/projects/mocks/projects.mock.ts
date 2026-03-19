import { Project } from "../types/project.types";

export const projectsMock: Project[] = [
  {
    id: "1",
    title: "Mobile Banking App",
    description:
      "Design and development of a secure mobile banking application with modern UX.",
    status: "in-progress",
    priority: "high",
    progress: 75,
    budget: 12000,
    spent: 8500,
    dueDate: "2026-04-15",

    client: {
      id: "c1",
      name: "FinCorp",
      avatar: "/avatars/avatar1.png",
    },

    members: [
      {
        id: "m1",
        name: "Ahmad",
        avatar: "/avatars/avatar2.png",
        role: "Project Manager",
      },
      {
        id: "m2",
        name: "Sara",
        avatar: "/avatars/avatar3.png",
        role: "Lead Developer",
      },
      {
        id: "m3",
        name: "Omar",
        avatar: "/avatars/avatar4.png",
        role: "UI/UX Designer",
      },
    ],

    tags: [
      { label: "Mobile", type: "category" },
      { label: "Fintech", type: "category" },
      { label: "React Native", type: "tech" },
    ],

    createdAt: "2026-02-01",
    updatedAt: "2026-03-10",
  },

  {
    id: "2",
    title: "E-commerce Dashboard",
    description:
      "Admin dashboard for managing products, orders, and analytics.",
    status: "review",
    priority: "medium",
    progress: 60,
    budget: 8000,
    spent: 5000,
    dueDate: "2026-03-28",

    client: {
      id: "c2",
      name: "Shoply",
      avatar: "/avatars/avatar2.png",
    },

    members: [
      {
        id: "m4",
        name: "Lina",
        avatar: "/avatars/avatar3.png",
        role: "Full Stack Developer",
      },
      {
        id: "m5",
        name: "Kareem",
        avatar: "/avatars/avatar4.png",
        role: "QA Engineer",
      },
    ],

    tags: [
      { label: "Dashboard", type: "category" },
      { label: "E-commerce", type: "category" },
      { label: "Next.js", type: "tech" },
    ],

    createdAt: "2026-01-20",
    updatedAt: "2026-03-05",
  },

  {
    id: "3",
    title: "Portfolio Website",
    description: "Personal portfolio website with animations and modern UI.",
    status: "completed",
    priority: "low",
    progress: 100,
    budget: 1500,
    spent: 1400,
    dueDate: "2026-02-20",

    client: {
      id: "c3",
      name: "Freelancer Client",
      avatar: "/avatars/avatar3.png",
    },

    members: [
      {
        id: "m6",
        name: "You",
        avatar: "/avatars/avatar5.png",
        role: "Freelancer",
      },
    ],

    tags: [
      { label: "Portfolio", type: "category" },
      { label: "Animation", type: "category" },
      { label: "Framer Motion", type: "tech" },
    ],

    createdAt: "2026-01-01",
    updatedAt: "2026-02-20",
  },

  {
    id: "4",
    title: "AI Chat Application",
    description: "Real-time AI chat app with streaming responses and history.",
    status: "in-progress",
    priority: "high",
    progress: 45,
    budget: 10000,
    spent: 4000,
    dueDate: "2026-05-01",

    client: {
      id: "c4",
      name: "AI Labs",
      avatar: "/avatars/avatar4.png",
    },

    members: [
      {
        id: "m7",
        name: "Hassan",
        avatar: "/avatars/avatar1.png",
        role: "Project Manager",
      },
      {
        id: "m8",
        name: "Maya",
        avatar: "/avatars/avatar2.png",
        role: "Lead Developer",
      },
      {
        id: "m9",
        name: "Noor",
        avatar: "/avatars/avatar3.png",
        role: "AI Specialist",
      },
      {
        id: "m10",
        name: "Ali",
        avatar: "/avatars/avatar4.png",
        role: "Frontend Developer",
      },
    ],

    tags: [
      { label: "AI", type: "category" },
      { label: "Chat", type: "category" },
      { label: "WebSockets", type: "tech" },
    ],

    createdAt: "2026-02-10",
    updatedAt: "2026-03-12",
  },

  {
    id: "5",
    title: "Learning Management System",
    description: "Platform for managing courses, students, and instructors.",
    status: "paused",
    priority: "medium",
    progress: 30,
    budget: 15000,
    spent: 3000,
    dueDate: "2026-06-10",

    client: {
      id: "c5",
      name: "EduTech",
      avatar: "/avatars/avatar5.png",
    },

    members: [
      {
        id: "m11",
        name: "Rami",
        avatar: "/avatars/avatar2.png",
        role: "Backend Developer",
      },
      {
        id: "m12",
        name: "Dina",
        avatar: "/avatars/avatar3.png",
        role: "UI/UX Designer",
      },
    ],

    tags: [
      { label: "Education", type: "category" },
      { label: "Platform", type: "category" },
      { label: "React", type: "tech" },
    ],

    createdAt: "2026-01-15",
    updatedAt: "2026-03-01",
  },
];
