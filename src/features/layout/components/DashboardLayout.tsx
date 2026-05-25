"use client";

import { useAuth } from "@/src/features/auth/contexts/AuthContext";
import Header from "@/src/features/layout/components/header/Header";
import Sidebar from "@/src/features/layout/components/sidebar/Sidebar";
import DashboardMobileSidebar from "@/src/features/layout/components/DashboardMobileSidebar";
import { dashboardNavigation } from "../utils/navigation.config";
import { useDashboardLayout } from "@/src/features/layout/hooks/useDashboardLayout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { role } = useAuth();
  const navigation = dashboardNavigation[role!];

  const { mobileOpen, collapsed, openMobile, closeMobile, toggleSidebar } =
    useDashboardLayout();

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden lg:block">
        <Sidebar
          collapsed={collapsed}
          primaryNav={navigation.primary}
          mainNav={navigation.workspace}
        />
      </div>

      <DashboardMobileSidebar
        open={mobileOpen}
        onClose={closeMobile}
        primaryNav={navigation.primary}
        mainNav={navigation.workspace}
      />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header onMenuClick={openMobile} onCollapseClick={toggleSidebar} />

        <main className="flex-1 p-6 overflow-y-auto bg-(--color-background-sky)">
          {children}
        </main>
      </div>
    </div>
  );
}
