export const PROJECT_STATUSES = [
  "active",
  "completed",
  "on_hold",
  "cancelled",
] as const;

export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

export interface Project {
  id: string;
  name: string;
  description: string;

  clientId: string;
  clientName: string;

  budget: number;
  status: ProjectStatus;

  progress: number;
  startDate: string;
  dueDate: string;
  createdAt: string;

  teamSize: number;
}
