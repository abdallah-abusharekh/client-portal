import { clsx } from "clsx";
import { Notification } from "../../types/layout";

export default function NotificationItem({
  notification,
}: {
  notification: Notification;
}) {
  return (
    <div className="flex items-start gap-3 px-4 py-3 hover:bg-(--color-background-sky) cursor-pointer">
      <span
        className={clsx(
          "mt-1 rounded-full w-2 h-2 shrink-0",
          notification.read ? "bg-gray-300" : "bg-(--color-primary)",
        )}
      />

      <div className="flex flex-col">
        <p className="text-sm font-medium text-(--color-text)">
          {notification.title}
        </p>

        {notification.description && (
          <p className="text-gray-500 text-xs">{notification.description}</p>
        )}

        <span className="text-gray-400 text-xs">{notification.createdAt}</span>
      </div>
    </div>
  );
}
