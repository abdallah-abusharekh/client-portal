import {
  Activity,
  DashboardStat,
  Project,
  Task,
} from "../types/dashboard.types";

import {
  FiFolder,
  FiUsers,
  FiCheckSquare,
  FiClock,
  FiDollarSign,
  FiCheckCircle,
  FiMessageSquare,
  FiUpload,
} from "react-icons/fi";

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

export const customerStats: DashboardStat[] = [
  {
    title: "Active Projects",
    value: "4",
    icon: "projects",
    trend: "+20%",
    trendLabel: "from last month",
  },
  {
    title: "Freelancers",
    value: "3",
    icon: "users",
    trend: "+0%",
    trendLabel: "this month",
  },
  {
    title: "Completed Tasks",
    value: "24",
    icon: "tasks",
    trend: "+15%",
    trendLabel: "from last month",
  },
  {
    title: "Hours Logged",
    value: "128",
    icon: "hours",
    trend: "+8%",
    trendLabel: "this week",
  },
];

export const freelancerStats: DashboardStat[] = [
  {
    title: "Total Earnings",
    value: "$45,600",
    icon: "earnings",
    trend: "+12%",
    trendLabel: "from last month",
  },
  {
    title: "Active Projects",
    value: "3",
    icon: "projects",
    trend: "+0%",
    trendLabel: "this month",
  },
  {
    title: "Tasks Completed",
    value: "18",
    icon: "tasks",
    trend: "+25%",
    trendLabel: "from last month",
  },
  {
    title: "Hours This Week",
    value: "32",
    icon: "hours",
    trend: "-5%",
    trendLabel: "vs last week",
  },
];

export const statIconMap = {
  projects: FiFolder,
  users: FiUsers,
  tasks: FiCheckSquare,
  hours: FiClock,
  earnings: FiDollarSign,
};

export const freelancers = [
  {
    id: "1",
    name: "Alex Chen",
    role: "Full-Stack Development",
    avatar: "/avatars/avatar1.png",
    activeProjects: 2,
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "UI/UX Design",
    avatar: "/avatars/avatar2.png",
    activeProjects: 1,
  },
  {
    id: "3",
    name: "Lisa Park",
    role: "Brand Identity",
    avatar: "/avatars/avatar3.png",
    activeProjects: 1,
  },
];

export const activities: Activity[] = [
  {
    id: "1",
    type: "update",
    user: "Alex Chen",
    avatar: "https://i.pravatar.cc/100?img=12",
    action: "updated project status",
    project: "E-Commerce Platform Redesign",
    date: "Jul 8",
  },
  {
    id: "2",
    type: "task",
    user: "Marcus Johnson",
    avatar: "https://i.pravatar.cc/100?img=33",
    action: "completed task",
    project: "E-Commerce Platform Redesign",
    description: '"Design homepage mockups"',
    date: "Jul 8",
  },
  {
    id: "3",
    type: "comment",
    user: "Sarah Mitchell",
    avatar: "https://i.pravatar.cc/100?img=22",
    action: "left a comment",
    project: "E-Commerce Platform Redesign",
    date: "Jul 8",
  },
  {
    id: "4",
    type: "upload",
    user: "Marcus Johnson",
    avatar: "https://i.pravatar.cc/100?img=33",
    action: "uploaded new files",
    project: "Brand Identity Package",
    date: "Jul 7",
  },
];

export const activityIcons = {
  update: {
    icon: FiFolder,
    className: "bg-blue-100 text-blue-600",
  },
  task: {
    icon: FiCheckCircle,
    className: "bg-green-100 text-green-600",
  },
  comment: {
    icon: FiMessageSquare,
    className: "bg-purple-100 text-purple-600",
  },
  upload: {
    icon: FiUpload,
    className: "bg-yellow-100 text-yellow-600",
  },
};
