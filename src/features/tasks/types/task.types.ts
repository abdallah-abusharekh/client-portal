export type TaskStatus = string;

export type TaskPriority = "low" | "medium" | "high";
export type PriorityFilter = "all" | TaskPriority;

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string;
  order: number;
  assignee?: string;
}

export type TaskFormBase = {
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string;
  assignee?: string;
};

export type Filters = {
  search: string;
  priority: PriorityFilter;
};
