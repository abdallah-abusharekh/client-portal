"use client";

import { AnimatePresence, motion } from "framer-motion";
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
  return (
    <AnimatePresence>
      {open && (
        <div className="lg:hidden z-50 fixed inset-0">
          <motion.button
            aria-label="Close sidebar"
            onClick={onClose}
            className="absolute inset-0 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative bg-white shadow-lg w-64 h-full"
          >
            <Sidebar
              collapsed={false}
              primaryNav={primaryNav}
              mainNav={mainNav}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
