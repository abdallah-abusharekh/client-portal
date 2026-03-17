"use client";

import { NavItem } from "../types/layout";
import Sidebar from "./sidebar/Sidebar";

type Props = {
  open: boolean;
  onClose: () => void;
  primaryNav: NavItem[];
  mainNav: NavItem[];
};

export default function DashboardMobileSidebar({
  open,
  onClose,
  primaryNav,
  mainNav,
}: Props) {
  if (!open) return null;

  return (
    <div className="md:hidden z-50 fixed inset-0 flex">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative bg-white shadow-lg w-64 h-full">
        <Sidebar collapsed={false} primaryNav={primaryNav} mainNav={mainNav} />
      </div>
    </div>
  );
}
