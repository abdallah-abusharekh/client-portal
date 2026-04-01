export type TaskStatus = string;

export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string;
  avatar?: string;
  order: number;
}

export type TaskFormBase = {
  title: string;
  description?: string;
  priority: TaskPriority;
  dueDate?: string;
};
