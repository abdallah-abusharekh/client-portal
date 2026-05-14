import { useQuery } from "@tanstack/react-query";
import { notifications } from "../mocks/notifications.mock";
import type { Notification } from "../types/notifications.type";
import { delay } from "../../../shared/utils/delay";

export function useNotifications() {
  const query = useQuery({
    queryKey: ["notifications"],
    queryFn: async (): Promise<Notification[]> => {
      await delay(400);
      return notifications;
    },
  });

  return {
    notifications: query.data ?? [],
    isLoading: query.isLoading,
  };
}
