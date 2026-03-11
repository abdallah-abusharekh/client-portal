import {
  LuBell,
  LuFileText,
  LuFolder,
  LuLayoutDashboard,
  LuSettings,
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
        label: "Tasks",
        href: "/tasks",
        icon: LuFileText,
      },
      {
        label: "Notifications",
        href: "/notifications",
        icon: LuBell,
      },
      {
        label: "Profile",
        href: "/profile",
        icon: LuSettings,
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
        icon: LuSettings,
      },
    ],
  },

  admin: {
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
        label: "Users",
        href: "/users",
        icon: LuUsers,
      },
      {
        label: "Notifications",
        href: "/notifications",
        icon: LuBell,
      },
      {
        label: "Settings",
        href: "/settings",
        icon: LuSettings,
      },
    ],
  },
};
