import {
  LuBell,
  LuCalendarDays,
  LuFileText,
  LuFolder,
  LuLayoutDashboard,
  LuUser,
  LuUsers,
} from "react-icons/lu";
import { RoleNavigation } from "../types/layout";

export const dashboardNavigation: Record<
  "freelancer" | "customer" | "admin",
  RoleNavigation
> = {
  freelancer: {
    primary: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LuLayoutDashboard,
      },
    ],
    workspace: [
      {
        label: "Projects",
        href: "/projects",
        icon: LuFolder,
      },
      {
        label: "Meetings",
        href: "/meetings",
        icon: LuCalendarDays,
      },
      {
        label: "Notifications",
        href: "/notifications",
        icon: LuBell,
      },
      {
        label: "Profile",
        href: "/profile",
        icon: LuUser,
      },
    ],
  },

  customer: {
    primary: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LuLayoutDashboard,
      },
    ],
    workspace: [
      {
        label: "Projects",
        href: "/projects",
        icon: LuFolder,
      },
      {
        label: "Meetings",
        href: "/meetings",
        icon: LuUsers,
      },
      {
        label: "Notifications",
        href: "/notifications",
        icon: LuBell,
      },
      {
        label: "Profile",
        href: "/profile",
        icon: LuUser,
      },
    ],
  },

  admin: {
    primary: [
      {
        label: "Dashboard",
        href: "/admin/dashboard",
        icon: LuLayoutDashboard,
      },
    ],
    workspace: [
      {
        label: "Users",
        href: "/admin/users",
        icon: LuUsers,
      },
      {
        label: "Projects",
        href: "/admin/projects",
        icon: LuFolder,
      },
      {
        label: "Alerts",
        href: "/admin/notifications",
        icon: LuBell,
      },
      {
        label: "Reports",
        href: "/admin/settings",
        icon: LuFileText,
      },
      {
        label: "Profile",
        href: "/profile",
        icon: LuUser,
      },
    ],
  },
};
