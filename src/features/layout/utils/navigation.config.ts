import {
  LuBell,
  LuFileText,
  LuFolder,
  LuLayoutDashboard,
  LuSettings,
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
        href: "/freelancer/dashboard",
        icon: LuLayoutDashboard,
      },
    ],
    workspace: [
      {
        label: "Projects",
        href: "/freelancer/projects",
        icon: LuFolder,
      },
      {
        label: "Tasks",
        href: "/freelancer/tasks",
        icon: LuFileText,
      },
      {
        label: "Notifications",
        href: "/freelancer/notifications",
        icon: LuBell,
      },
      {
        label: "Profile",
        href: "/freelancer/profile",
        icon: LuUser,
      },
    ],
  },

  customer: {
    primary: [
      {
        label: "Dashboard",
        href: "/customer/dashboard",
        icon: LuLayoutDashboard,
      },
    ],
    workspace: [
      {
        label: "Projects",
        href: "/customer/projects",
        icon: LuFolder,
      },
      {
        label: "Meetings",
        href: "/customer/meetings",
        icon: LuUsers,
      },
      {
        label: "Notifications",
        href: "/customer/notifications",
        icon: LuBell,
      },
      {
        label: "Profile",
        href: "/customer/profile",
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
        label: "Projects",
        href: "/admin/projects",
        icon: LuFolder,
      },
      {
        label: "Users",
        href: "/admin/users",
        icon: LuUsers,
      },
      {
        label: "Notifications",
        href: "/admin/notifications",
        icon: LuBell,
      },
      {
        label: "Settings",
        href: "/admin/settings",
        icon: LuSettings,
      },
    ],
  },
};
