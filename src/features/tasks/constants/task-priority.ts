import { PriorityFilter } from "../types/task.types";

export const priorityOptions: { label: string; value: PriorityFilter }[] = [
  { label: "All", value: "all" },
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];
