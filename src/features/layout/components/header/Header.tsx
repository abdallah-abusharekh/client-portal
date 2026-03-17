"use client";

import { FiMenu } from "react-icons/fi";
import { LuPanelLeft, LuSearch } from "react-icons/lu";

import HeaderNotifications from "./HeaderNotifications";
import HeaderUserMenu from "./HeaderUserMenu";

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

        <div className="hidden sm:block relative">
          <LuSearch className="top-1/2 left-3 absolute text-gray-400 text-lg -translate-y-1/2" />

          <input
            type="text"
            placeholder="Search projects, tasks..."
            className="pl-10 pr-4 py-2 w-65 rounded-lg border border-gray-200 bg-(--color-background-sky) focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <HeaderNotifications />
        <HeaderUserMenu />
      </div>
    </header>
  );
}
