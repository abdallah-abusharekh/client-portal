"use client";

import { useEffect, useState } from "react";

export function useDashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [isBelowLg, setIsBelowLg] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");

    const syncSidebarState = () => {
      const belowLg = media.matches;
      setIsBelowLg(belowLg);

      if (belowLg) {
        setCollapsed(true);
      }
    };

    syncSidebarState();
    media.addEventListener("change", syncSidebarState);

    return () => {
      media.removeEventListener("change", syncSidebarState);
    };
  }, []);

  const openMobile = () => setMobileOpen(true);
  const closeMobile = () => setMobileOpen(false);

  const toggleSidebar = () => {
    if (isBelowLg) return;

    setCollapsed((prev) => !prev);
  };

  return {
    mobileOpen,
    collapsed,
    openMobile,
    closeMobile,
    toggleSidebar,
  };
}
