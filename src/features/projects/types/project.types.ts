export type ProjectStatus = "in-progress" | "review" | "completed" | "paused";

export type ProjectPriority = "low" | "medium" | "high";

export type ProjectClient = {
  id: string;
  name: string;
  avatar: string;
};

export type ProjectTag = {
  label: string;
  type: "tech" | "category";
};

export type Project = {
  id: string;

  title: string;
  description: string;

  status: ProjectStatus;
  priority: ProjectPriority;

  progress: number;

  budget?: number;
  spent: number;

  dueDate: string;

  client: ProjectClient;

  members: ProjectMember[];

  tags: ProjectTag[];

  createdAt: string;
  updatedAt: string;
};

export type ViewMode = "grid" | "list";

export const statusLabels = {
  all: "All",
  "in-progress": "In Progress",
  review: "Review",
  completed: "Completed",
  paused: "Paused",
} as const;

export type StatusFilter = keyof typeof statusLabels;

export type TaskStatus = "todo" | "in-progress" | "review" | "completed";

export interface ProjectTask {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: "low" | "medium" | "high";
  dueDate?: string;
  assignee?: ProjectMember;
}

export type ProjectMember = {
  id: string;
  name: string;
  avatar: string;
  role: string;
};

export type ProjectActivity = {
  id: string;
  userName: string;
  avatar: string;
  action: string;
  target?: string;
  date: string;
};

export type ProjectFile = {
  id: string;
  name: string;
  size: string;
  url: string;
  uploadedBy: ProjectMember;
  createdAt: string;
};

export type ProjectDetails = Project & {
  tasks: ProjectTask[];
  activities: ProjectActivity[];
  files: ProjectFile[];
};

export type ProjectFormBase = {
  title: string;
  description?: string;
  budget?: number;
  dueDate?: string;
  priority: "low" | "medium" | "high";
  status: "in-progress" | "review" | "completed" | "paused";
  tags?: string;
};
