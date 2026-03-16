import {
  Activity,
  DahsboardProject,
  FileItem,
  Project,
  Stat,
  Task,
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

/////////////////////////////////////////////////////////

import { Deadline } from "../types/dashboard.types";

export const deadlines: Deadline[] = [
  {
    id: "1",
    title: "Develop product listing page",
    project: "E-Commerce Platform",
    dueDate: "Jul 10",
    priority: "high",
  },
  {
    id: "2",
    title: "Build authentication screens",
    project: "Mobile App",
    dueDate: "Jul 20",
    priority: "high",
  },
  {
    id: "3",
    title: "Create push notification service",
    project: "Mobile App",
    dueDate: "Aug 10",
    priority: "medium",
  },
];

export const chartData = [
  { month: "Jan", earnings: 6000 },
  { month: "Feb", earnings: 7200 },
  { month: "Mar", earnings: 5800 },
  { month: "Apr", earnings: 8200 },
  { month: "May", earnings: 9400 },
  { month: "Jun", earnings: 8700 },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform Redesign",
    description:
      "Complete redesign of the existing e-commerce platform with modern UI/UX.",
    status: "in-progress",
    priority: "high",
    tags: ["Design", "Development"],
    progress: 65,
    budget: 15000,
    spent: 9750,
    dueDate: "Aug 15",
    clientAvatar: "/avatars/avatar1.png",
  },
  {
    id: "2",
    title: "Mobile App Development",
    description:
      "Native mobile application for iOS and Android with real-time sync.",
    status: "in-progress",
    priority: "high",
    tags: ["Mobile", "React Native"],
    progress: 40,
    budget: 25000,
    spent: 10000,
    dueDate: "Oct 30",
    clientAvatar: "/avatars/avatar2.png",
  },
];

export const tasks: Task[] = [
  {
    id: "1",
    title: "Develop product listing page",
    description: "Implement product grid with filters",
    priority: "high",
    dueDate: "Jul 10",
    assigneeAvatar: "/avatars/avatar1.png",
  },
  {
    id: "2",
    title: "Implement checkout flow",
    description: "Build multi-step checkout process",
    priority: "high",
    dueDate: "Jul 25",
    assigneeAvatar: "/avatars/avatar2.png",
  },
  {
    id: "3",
    title: "Mobile responsive testing",
    description: "Test all pages on mobile devices",
    priority: "medium",
    dueDate: "Aug 1",
    assigneeAvatar: "/avatars/avatar3.png",
  },
  {
    id: "4",
    title: "Build authentication screens",
    description: "Login, signup, and password reset screens",
    priority: "high",
    dueDate: "Jul 20",
    assigneeAvatar: "/avatars/avatar4.png",
  },
];
