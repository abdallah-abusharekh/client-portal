"use client";

import { NavItem } from "../types/layout";
import Sidebar from "./sidebar/Sidebar";
import ModalOverlay from "@/src/shared/components/ModalOverlay";

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
    <ModalOverlay
      open={open}
      onClose={onClose}
      containerClassName="md:hidden justify-start items-stretch"
    >
      <div className="relative bg-white shadow-lg w-64 h-full">
        <Sidebar collapsed={false} primaryNav={primaryNav} mainNav={mainNav} />
      </div>
    </ModalOverlay>
  );
}
