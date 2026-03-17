"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NavItem } from "../../types/layout";

type Props = {
  items: NavItem[];
  collapsed?: boolean;
};

export default function SidebarNav({ items, collapsed }: Props) {
  const pathname = usePathname();

  return (
    <>
      {items.map((item) => {
        const Icon = item.icon;

        const isActive =
          pathname === item.href || pathname.startsWith(item.href + "/");

        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "group flex items-center rounded-lg font-medium text-sm transition",
              collapsed ? "justify-center px-2 py-3" : "gap-3 px-4 py-3",
              isActive
                ? "bg-primary/10 text-(--color-primary)"
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

            {!collapsed && <span>{item.label}</span>}
          </Link>
        );
      })}
    </>
  );
}
