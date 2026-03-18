export type DeadlinePriority = "low" | "medium" | "high";

export type Deadline = {
  id: string;
  title: string;
  project: string;
  dueDate: string;
  priority: DeadlinePriority;
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

export type StatIcon = "projects" | "users" | "tasks" | "hours" | "earnings";

export type DashboardStat = {
  title: string;
  value: string;
  icon: StatIcon;
  trend: string;
  trendLabel: string;
};

export type ActivityType = "update" | "task" | "comment" | "upload";

export type Activity = {
  id: string;
  type: ActivityType;
  user: string;
  avatar: string;
  action: string;
  project: string;
  description?: string;
  date: string;
};

export type UserRole = "Customer" | "Freelancer" | "Admin";

export type UserStatus = "active" | "pending" | "suspended";

export type RecentUser = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
  status: UserStatus;
};
