import Link from "next/link";
import { notifications } from "../../mocks/layout.mock";
import NotificationItem from "./NotificationItem";

export default function NotificationsDropdown({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="right-0 z-10 absolute bg-white shadow-lg mt-2 border border-gray-200 rounded-xl w-80">
      <div className="px-4 py-3 border-gray-200 border-b font-semibold text-sm">
        Notifications
      </div>

      <div className="max-h-72 overflow-y-auto">
        {notifications.map((notif) => (
          <NotificationItem key={notif.id} notification={notif} />
        ))}
      </div>

      <Link
        onClick={onClose}
        href="/freelancer/notifications"
        className="block px-4 py-2 rounded-b-xl text-sm text-center border-t border-gray-200 hover:bg-(--color-background-sky) cursor-pointer"
      >
        View all notifications
      </Link>
    </div>
  );
}
