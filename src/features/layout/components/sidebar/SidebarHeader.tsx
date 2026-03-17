import Logo from "@/src/shared/components/Logo";
import clsx from "clsx";

type Props = {
  collapsed?: boolean;
};

export default function SidebarHeader({ collapsed }: Props) {
  return (
    <div
      className={clsx(
        "flex items-center border-gray-200 border-b h-16",
        collapsed ? "justify-center px-2" : "gap-2 px-6",
      )}
    >
      <Logo />

      {!collapsed && (
        <h1 className="font-semibold text-(--color-text) text-lg">
          Client Portal
        </h1>
      )}
    </div>
  );
}
