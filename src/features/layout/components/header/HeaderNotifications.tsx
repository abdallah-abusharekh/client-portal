"use client";

import { useRef, useState } from "react";
import { useClickOutside } from "@/src/shared/hooks/useClickOutside";

import NotificationsDropdown from "./NotificationsDropdown";
import NotificationBell from "./NotificationBell";
import { notifications } from "@/src/features/notifications/mocks/notifications.mock";

export default function HeaderNotifications() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setOpen(false));

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div ref={ref} className="relative">
      <NotificationBell
        unreadCount={unreadCount}
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && <NotificationsDropdown onClose={() => setOpen(false)} />}
    </div>
  );
}
