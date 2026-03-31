import { Task } from "../types/task.types";

export const STATUSES = ["TODO", "IN_PROGRESS", "REVIEW", "COMPLETED"] as const;

export function getStatusFromOver(overId: string, tasks: Task[]) {
  if (STATUSES.includes(overId as any)) return overId;

  const task = tasks.find((t) => t.id === overId);
  return task?.status ?? null;
}
