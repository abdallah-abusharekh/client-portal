export type ProjectStatus = "in-progress" | "review" | "completed" | "paused";

export type ProjectPriority = "low" | "medium" | "high";

export type ProjectMember = {
  id: string;
  name: string;
  avatar: string;
};

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

  budget: number;
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
