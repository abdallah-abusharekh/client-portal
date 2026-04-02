import { TaskStatus } from "../types/task.types";

export const TASK_COLUMNS: {
  key: TaskStatus;
  title: string;
  color: string;
}[] = [
  {
    key: "TODO",
    title: "To Do",
    color: "bg-orange-100",
  },
  {
    key: "IN_PROGRESS",
    title: "In Progress",
    color: "bg-sky-100",
  },
  {
    key: "REVIEW",
    title: "Review",
    color: "bg-purple-100",
  },
  {
    key: "COMPLETED",
    title: "Completed",
    color: "bg-green-100",
  },
];
