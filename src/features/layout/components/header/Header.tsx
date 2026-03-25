"use client";

import { FiMenu } from "react-icons/fi";
import { LuPanelLeft } from "react-icons/lu";

import HeaderNotifications from "./HeaderNotifications";
import HeaderUserMenu from "./HeaderUserMenu";
import SearchInput from "@/src/shared/components/SearchInput";

type Props = {
  onMenuClick: () => void;
  onCollapseClick: () => void;
};

export default function Header({ onMenuClick, onCollapseClick }: Props) {
  return (
    <header className="flex items-center justify-between px-6 h-16 bg-(--color-background) border-b border-gray-200">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-lg hover:bg-(--color-background-sky)"
        >
          <FiMenu className="text-xl text-(--color-text)" />
        </button>

        <button
          onClick={onCollapseClick}
          className="hidden md:flex p-2 rounded-lg hover:bg-(--color-background-sky)"
        >
          <LuPanelLeft className="text-xl text-(--color-text)" />
        </button>

        <SearchInput placeholder="Search projects, tasks..." className="w-65" />
      </div>

      <div className="flex items-center gap-6">
        <HeaderNotifications />
        <HeaderUserMenu />
      </div>
    </header>
  );
}
