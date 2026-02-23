export type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

export type Project = {
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
