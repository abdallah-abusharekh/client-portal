"use client";

import Header from "@/src/features/dashboard/components/layout/Header";
import Sidebar from "@/src/features/dashboard/components/layout/Sidebar";
import { useState } from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Drawer */}
      {isOpen && (
        <div className="md:hidden z-50 fixed inset-0 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-white shadow-lg w-64 h-full">
            <Sidebar />
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
