"use client";

import { useAuth } from "@/src/features/auth/contexts/AuthContext";
import { FiBell, FiMenu } from "react-icons/fi";

type Props = {
  onMenuClick: () => void;
};

export default function Header({ onMenuClick }: Props) {
  const { user, logout } = useAuth();

  if (!user) return null;

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <header className="flex justify-between items-center px-6 h-16 bg-(--color-background) shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-lg transition hover:bg-(--color-background-sky)"
        >
          <FiMenu className="text-xl text-(--color-text)" />
        </button>

        <div className="flex flex-col">
          <span className="font-semibold text-sm text-(--color-text)">
            {user.name}
          </span>
          <span className="text-(--color-text-muted) text-xs capitalize">
            {user.role}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full transition hover:bg-(--color-background-sky)">
          <FiBell className="text-lg text-(--color-text)" />
        </button>

        <button
          onClick={logout}
          className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm bg-primary/10 text-(--color-primary)"
        >
          {initials}
        </button>
      </div>
    </header>
  );
}
