import { Task } from "../types/task.types";

export const tasksDB: Task[] = [
  {
    id: "1",
    title: "Implement checkout flow",
    description: "Build multi-step checkout process",
    status: "TODO",
    priority: "high",
    dueDate: "2026-07-25",
    order: 0,
  },
  {
    id: "2",
    title: "Design cart UI",
    description: "Create responsive cart page layout",
    status: "TODO",
    priority: "medium",
    dueDate: "2026-07-20",
    order: 1,
  },

  {
    id: "3",
    title: "Develop product listing page",
    description: "Implement product grid with filters",
    status: "IN_PROGRESS",
    priority: "high",
    dueDate: "2026-07-10",
    order: 0,
  },
  {
    id: "4",
    title: "Integrate API with frontend",
    description: "Connect product API endpoints",
    status: "IN_PROGRESS",
    priority: "medium",
    dueDate: "2026-07-15",
    order: 1,
  },

  {
    id: "5",
    title: "Create push notification service",
    description: "Setup Firebase for push notifications",
    status: "REVIEW",
    priority: "medium",
    dueDate: "2026-08-10",
    order: 0,
  },

  {
    id: "6",
    title: "Deploy to production",
    description: "Finalize CI/CD and deploy app",
    status: "COMPLETED",
    priority: "low",
    dueDate: "2026-06-30",
    order: 0,
  },
];
