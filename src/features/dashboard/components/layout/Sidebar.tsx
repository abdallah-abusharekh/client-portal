"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NavItem } from "../../types/dashboard.types";
import { mainNav, primaryNav } from "../../utils/constants";

export default function Sidebar() {
  const pathname = usePathname();

  const renderNav = (items: NavItem[]) =>
    items.map((item) => {
      const isActive =
        pathname === item.href || pathname.startsWith(item.href + "/");

      const Icon = item.icon;

      return (
        <Link
          key={item.href}
          href={item.href}
          className={clsx(
            "group flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-all",
            isActive
              ? "bg-primary-light/20 text-(--color-primary)"
              : "text-(--color-text) hover:bg-(--color-background-sky)",
          )}
        >
          <Icon
            className={clsx(
              "text-lg transition",
              isActive
                ? "text-(--color-primary)"
                : "text-gray-500 group-hover:text-(--color-primary)",
            )}
          />
          {item.label}
        </Link>
      );
    });

  return (
    <aside className="flex flex-col border-r border-gray-200 bg-(--color-background) shadow-sm w-64 h-full">
      <div className="flex items-center px-6 h-16">
        <h1 className="font-semibold text-(--color-text) text-lg tracking-tight">
          Client Portal
        </h1>
      </div>
      <nav className="flex-1 space-y-6 p-4 overflow-y-auto">
        <div className="space-y-1">{renderNav(primaryNav)}</div>

        <div>
          <p className="mb-2 px-3 font-semibold text-gray-400 text-xs uppercase tracking-wider">
            Workspace
          </p>
          <div className="space-y-1">{renderNav(mainNav)}</div>
        </div>
      </nav>
    </aside>
  );
}
