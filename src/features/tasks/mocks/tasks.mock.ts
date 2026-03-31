import { Task } from "../types/task.types";

export const tasksDB: Task[] = [
  {
    id: "1",
    title: "Implement checkout flow",
    description: "Build multi-step checkout process",
    status: "TODO",
    priority: "high",
    dueDate: "Jul 25",
  },
  {
    id: "2",
    title: "Develop product listing page",
    description: "Implement product grid with filters",
    status: "IN_PROGRESS",
    priority: "high",
    dueDate: "Jul 10",
  },
  {
    id: "3",
    title: "Create push notification service",
    description: "Setup Firebase for push notifications",
    status: "REVIEW",
    priority: "medium",
    dueDate: "Aug 10",
  },
];
