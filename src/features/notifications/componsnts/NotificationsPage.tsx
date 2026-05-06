"use client";

import NotificationsSkeleton from "../components/NotificationsSkeleton";
import Card from "../../../shared/components/Card";
import Link from "next/link";
import EmptyState from "../../../shared/components/EmptyState";
import Badge from "../../../shared/components/Badge";
import { getNotificationLink } from "../utils/notifications.utils";

import { useNotifications } from "../hooks/useNotifications";

export default function NotificationsPage() {
  const { notifications, isLoading } = useNotifications();

  return (
    <div className="space-y-6">
      <h1 className="mb-6 font-bold text-2xl">Notifications</h1>
      {isLoading ? (
        <NotificationsSkeleton />
      ) : notifications.length === 0 ? (
        <EmptyState message="No notifications yet." />
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => {
            const link = getNotificationLink(notification);
            const cardContent = (
              <Card
                className={`flex flex-col gap-1 cursor-pointer transition hover:bg-gray-50 ${notification.read ? "opacity-60" : ""}`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{notification.title}</span>
                    <Badge
                      value={notification.type}
                      variant={
                        notification.type === "project"
                          ? "success"
                          : notification.type === "task"
                            ? "warning"
                            : notification.type === "meeting"
                              ? "status"
                              : "default"
                      }
                    />
                  </div>
                  <span className="text-gray-400 text-xs">
                    {new Date(notification.date).toLocaleString()}
                  </span>
                </div>
                <div className="text-gray-700 text-sm">
                  {notification.message}
                </div>
              </Card>
            );
            return link ? (
              <Link
                key={notification.id}
                href={link}
                className="block rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {cardContent}
              </Link>
            ) : (
              <div key={notification.id}>{cardContent}</div>
            );
          })}
        </div>
      )}
    </div>
  );
}
