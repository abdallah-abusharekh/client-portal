export type DahsboardProject = {
  id: string;
  title: string;
  ownerLabel?: string;
  ownerName?: string;
  progress: number;
  completedTasks: number;
  totalTasks: number;
  dueDate?: string;
  status: string;
};

export type Activity = {
  id: string;
  title: string;
  subtitle?: string;
  time: string;
};

export type FileItem = {
  id: string;
  name: string;
  project: string;
  author: string;
  time: string;
};
export type Stat = {
  id: string;
  label: string;
  value: string | number;
  icon: React.ElementType;
};
//////////////////////////////////////////////////////////////

export type DeadlinePriority = "low" | "medium" | "high";

export type Deadline = {
  id: string;
  title: string;
  project: string;
  dueDate: string;
  priority: DeadlinePriority;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  status: "in-progress" | "completed" | "paused";
  priority: "low" | "medium" | "high";
  tags: string[];
  progress: number;
  budget: number;
  spent: number;
  dueDate: string;
  clientAvatar: string;
};

export type TaskPriority = "low" | "medium" | "high";

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  dueDate: string;
  assigneeAvatar: string;
};
