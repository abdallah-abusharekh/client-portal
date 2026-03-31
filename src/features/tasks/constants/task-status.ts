import { TaskStatus } from "../types/task.types";

export const TASK_COLUMNS: {
  key: TaskStatus;
  title: string;
  color: string;
}[] = [
  {
    key: "TODO",
    title: "To Do",
    color: "bg-gray-400",
  },
  {
    key: "IN_PROGRESS",
    title: "In Progress",
    color: "bg-blue-500",
  },
  {
    key: "REVIEW",
    title: "Review",
    color: "bg-purple-500",
  },
  {
    key: "COMPLETED",
    title: "Completed",
    color: "bg-green-500",
  },
];
