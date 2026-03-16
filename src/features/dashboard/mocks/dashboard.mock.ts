import {
  Activity,
  DahsboardProject,
  FileItem,
  Stat,
} from "../types/dashboard.types";
import {
  FiBarChart2,
  FiCheck,
  FiAlertTriangle,
  FiTrendingUp,
} from "react-icons/fi";

export const freelancerStats: Stat[] = [
  {
    id: "1",
    label: "Active Projects",
    value: 3,
    icon: FiBarChart2,
  },
  {
    id: "2",
    label: "Tasks Completed",
    value: 19,
    icon: FiCheck,
  },
  {
    id: "3",
    label: "Pending Tasks",
    value: 13,
    icon: FiAlertTriangle,
  },
  {
    id: "4",
    label: "This Month",
    value: "$4,200",
    icon: FiTrendingUp,
  },
];
export const freelancerProjects: DahsboardProject[] = [
  {
    id: "1",
    title: "E-commerce Website",
    ownerLabel: "Client",
    ownerName: "TechCorp Inc.",
    progress: 80,
    completedTasks: 8,
    totalTasks: 12,
    dueDate: "2024-02-15",
    status: "in progress",
  },
  {
    id: "2",
    title: "Mobile App Development",
    ownerLabel: "Client",
    ownerName: "StartupXYZ",
    progress: 40,
    completedTasks: 4,
    totalTasks: 10,
    dueDate: "2024-03-10",
    status: "planning",
  },
];

export const customerProjects: DahsboardProject[] = [
  {
    id: "1",
    title: "E-commerce Website",
    ownerLabel: "Owner",
    ownerName: "Abdallah Abusharekh",
    progress: 75,
    completedTasks: 8,
    totalTasks: 12,
    dueDate: "2024-02-15",
    status: "in progress",
  },
];

export const activities: Activity[] = [
  {
    id: "1",
    title: "Task 'Homepage Design' marked as completed",
    subtitle: "E-commerce Website",
    time: "2 hours ago",
  },
  {
    id: "2",
    title: "New comment from TechCorp Inc.",
    subtitle: "Mobile App Development",
    time: "4 hours ago",
  },
];

export const customerFiles: FileItem[] = [
  {
    id: "1",
    name: "Homepage-Design-v2.fig",
    project: "E-commerce Website",
    author: "John Doe",
    time: "2 hours ago",
  },
  {
    id: "2",
    name: "Logo-Concepts.pdf",
    project: "Brand Identity",
    author: "Sarah Wilson",
    time: "1 day ago",
  },
];
