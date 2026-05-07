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
