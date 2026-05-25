import Link from "next/link";
import NotificationItem from "./NotificationItem";
import { notifications } from "@/src/features/notifications/mocks/notifications.mock";

export default function NotificationsDropdown({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="top-20 sm:top-[calc(100%+0.5rem)] right-3 sm:right-0 left-3 sm:left-auto z-30 fixed sm:absolute bg-white shadow-lg border border-gray-200 rounded-xl w-auto sm:w-80">
      <div className="px-4 py-3 border-gray-200 border-b font-semibold text-sm">
        Notifications
      </div>

      <div className="max-h-72 overflow-y-auto">
        {notifications.slice(0, 3).map((notif) => (
          <NotificationItem key={notif.id} notification={notif} />
        ))}
      </div>

      <Link
        onClick={onClose}
        href="/notifications"
        className="block px-4 py-2 rounded-b-xl text-sm text-center border-t border-gray-200 hover:bg-(--color-background-sky) cursor-pointer"
      >
        View all notifications
      </Link>
    </div>
  );
}
