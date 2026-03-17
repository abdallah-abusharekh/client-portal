"use client";

import clsx from "clsx";
import { NavItem } from "../../types/layout";

import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import SidebarUser from "./SidebarUser";

type Props = {
  primaryNav: NavItem[];
  mainNav: NavItem[];
  collapsed?: boolean;
};

export default function Sidebar({ primaryNav, mainNav, collapsed }: Props) {
  return (
    <aside
      className={clsx(
        "flex flex-col bg-(--color-background) shadow-sm h-full transition-all duration-300",
        collapsed ? "w-20" : "w-64",
      )}
    >
      <SidebarHeader collapsed={collapsed} />

      <nav className="flex-1 space-y-6 p-4 overflow-y-auto">
        <div className="space-y-1">
          <SidebarNav items={primaryNav} collapsed={collapsed} />
        </div>

        {mainNav.length > 0 && (
          <div>
            {!collapsed && (
              <p className="mb-2 px-3 font-semibold text-gray-400 text-xs uppercase tracking-wider">
                Workspace
              </p>
            )}

            <div className="space-y-1">
              <SidebarNav items={mainNav} collapsed={collapsed} />
            </div>
          </div>
        )}
      </nav>

      <SidebarUser collapsed={collapsed} />
    </aside>
  );
}
