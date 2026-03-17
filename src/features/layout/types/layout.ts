import { ComponentType } from "react";

export type NavItem = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

export type RoleNavigation = {
  primary: NavItem[];
  workspace: NavItem[];
};

export type Notification = {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  read: boolean;
};
