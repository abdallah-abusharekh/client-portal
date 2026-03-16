import { Variants } from "framer-motion";
import {
  HiOutlineFolder,
  HiOutlineUsers,
  HiOutlineChatBubbleLeftRight,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineBriefcase,
} from "react-icons/hi2";

export const features = [
  {
    icon: HiOutlineFolder,
    title: "Project Management",
    description:
      "Organize projects with boards, timelines, and progress tracking. Keep everything in one place.",
  },
  {
    icon: HiOutlineUsers,
    title: "Team Collaboration",
    description:
      "Connect customers with talented freelancers. Build your dream team effortlessly.",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "Real-time Communication",
    description:
      "Chat, share files, and collaborate in real-time. Never miss an update.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Analytics & Insights",
    description:
      "Track performance, budgets, and progress with powerful analytics dashboards.",
  },
  {
    icon: HiOutlineClock,
    title: "Time Tracking",
    description:
      "Monitor time spent on tasks and projects. Ensure accurate billing and productivity.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with encrypted data and secure payment processing.",
  },
];

export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const steps = [
  {
    number: "01",
    title: "Create or Join",
    description:
      "Sign up as a customer to post projects or as a freelancer to find work.",
  },
  {
    number: "02",
    title: "Collaborate",
    description:
      "Work together with real-time messaging, file sharing, and task management.",
  },
  {
    number: "03",
    title: "Deliver Results",
    description:
      "Track progress, review deliverables, and get projects done on time.",
  },
];

export const roles = [
  {
    icon: HiOutlineUsers,
    title: "For Customers",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    points: [
      "Post projects and find talented freelancers",
      "Track project progress in real-time",
      "Secure payments and milestone releases",
    ],
  },
  {
    icon: HiOutlineBriefcase,
    title: "For Freelancers",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    points: [
      "Discover projects matching your skills",
      "Manage tasks and deadlines efficiently",
      "Track earnings and get paid on time",
    ],
  },
  {
    icon: HiOutlineChartBar,
    title: "For Admins",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100",
    points: [
      "Monitor platform activity and metrics",
      "Manage users and permissions",
      "Generate reports and insights",
    ],
  },
];

export const testimonials = [
  {
    text: "Client Portal transformed how we work with freelancers. The project tracking is incredible.",
    name: "Sarah Mitchell",
    role: "CEO, Acme Corp",
    avatar: "/avatars/avatar1.png",
  },
  {
    text: "As a freelancer, this platform helped me manage multiple clients seamlessly.",
    name: "Alex Chen",
    role: "Senior Developer",
    avatar: "/avatars/avatar2.png",
  },
  {
    text: "The analytics dashboard gives us complete visibility into our project portfolio.",
    name: "Emma Wilson",
    role: "Product Manager",
    avatar: "/avatars/avatar3.png",
  },
];
