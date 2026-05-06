"use client";

import { useAuth } from "@/src/features/auth/contexts/AuthContext";
import { FiLogOut } from "react-icons/fi";

type Props = {
  collapsed?: boolean;
};

export default function SidebarUser({ collapsed }: Props) {
  const { user, logout } = useAuth();

  if (!user) return null;

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="px-4 py-4 border-gray-200 border-t">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm bg-primary/10 text-(--color-primary)">
          {initials}
        </div>

        {!collapsed && (
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-(--color-text)">
                {user.name}
              </span>

              <span className="text-gray-500 text-xs capitalize">
                {user.role}
              </span>
            </div>
            <button
              onClick={logout}
              className="text-gray-600 hover:text-red-500"
            >
              <FiLogOut />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
