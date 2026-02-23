import {
  FiHome,
  FiFolder,
  FiCheckSquare,
  FiFileText,
  FiBell,
  FiCalendar,
  FiUser,
} from "react-icons/fi";
import { NavItem } from "../types/dashboard.types";

export const primaryNav: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: FiHome },
];

export const mainNav: NavItem[] = [
  { label: "Projects", href: "/projects", icon: FiFolder },
  { label: "Tasks", href: "/tasks", icon: FiCheckSquare },
  { label: "Files", href: "/files", icon: FiFileText },
  { label: "Notifications", href: "/notifications", icon: FiBell },
  { label: "Meetings", href: "/meetings", icon: FiCalendar },
  { label: "Profile", href: "/profile", icon: FiUser },
];
