import { Notification } from "@/src/features/notifications/types/notifications.type";
import { getNotificationLink } from "@/src/features/notifications/utils/notifications.utils";
import { clsx } from "clsx";
import Link from "next/link";

export default function NotificationItem({
  notification,
}: {
  notification: Notification;
}) {
  const link = getNotificationLink(notification);

  return (
    <Link
      href={link || "#"}
      className="flex items-start gap-3 px-4 py-3 hover:bg-(--color-background-sky) cursor-pointer"
    >
      <span
        className={clsx(
          "mt-1 rounded-full w-2 h-2 shrink-0",
          notification.read ? "bg-gray-300" : "bg-(--color-primary)",
        )}
      />

      <div className="flex flex-col min-w-0">
        <p className="text-sm font-medium text-(--color-text) break-words">
          {notification.title}
        </p>

        {notification.message && (
          <p className="text-gray-500 text-xs break-words">
            {notification.message}
          </p>
        )}

        <span className="text-gray-400 text-xs">
          {new Date(notification.date).toLocaleString()}
        </span>
      </div>
    </Link>
  );
}
