"use client";

import { useAuth } from "@/src/features/auth/contexts/AuthContext";
import { useRef, useState } from "react";
import { useClickOutside } from "@/src/shared/hooks/useClickOutside";

import UserMenuButton from "./UserMenuButton";
import UserMenuDropdown from "./UserMenuDropdown";

export default function HeaderUserMenu() {
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setOpen(false));

  if (!user) return null;

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div ref={ref} className="relative">
      <UserMenuButton
        name={user.name}
        initials={initials}
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && <UserMenuDropdown onLogout={logout} />}
    </div>
  );
}
