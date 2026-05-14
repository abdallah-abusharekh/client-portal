import { useQuery } from "@tanstack/react-query";
import { alertsService } from "../services/alerts.service";

export const alertsQueryKey = ["admin", "alerts"] as const;

export const useAlertsQuery = () => {
  return useQuery({
    queryKey: alertsQueryKey,
    queryFn: alertsService.getAlerts,
  });
};
