import { Notification } from "../types/notifications.type";

export function getNotificationLink(
  notification: Notification,
): string | undefined {
  if (notification.type === "project" && notification.projectId) {
    return `/projects/${notification.projectId}`;
  } else if (notification.type === "task" && notification.projectId) {
    return `/projects/${notification.projectId}/tasks`;
  } else if (notification.type === "meeting") {
    return `/meetings`;
  }
  return undefined;
}
