"use client";

import { useEffect, useState } from "react";

export function useDashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    setCollapsed(media.matches);
  }, []);

  const openMobile = () => setMobileOpen(true);
  const closeMobile = () => setMobileOpen(false);

  const toggleSidebar = () => setCollapsed((prev) => !prev);

  return {
    mobileOpen,
    collapsed,
    openMobile,
    closeMobile,
    toggleSidebar,
  };
}
