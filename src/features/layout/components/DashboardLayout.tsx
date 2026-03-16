"use client";

import { useAuth } from "@/src/features/auth/contexts/AuthContext";
import Header from "@/src/features/layout/components/Header";
import Sidebar from "@/src/features/layout/components/Sidebar";
import { useState } from "react";
import { dashboardNavigation } from "../utils/navigation.config";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { role } = useAuth();
  const navigation = dashboardNavigation[role!];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar
          primaryNav={navigation.primary}
          mainNav={navigation.workspace}
        />
      </div>

      {/* Mobile Sidebar Drawer */}
      {isOpen && (
        <div className="md:hidden z-50 fixed inset-0 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-white shadow-lg w-64 h-full">
            <Sidebar
              primaryNav={navigation.primary}
              mainNav={navigation.workspace}
            />
          </div>
        </div>
      )}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header onMenuClick={() => setIsOpen(true)} />
        <main className="flex-1  p-6 overflow-y-auto bg-(--color-background-sky)">
          {children}
        </main>
      </div>
    </div>
  );
}
