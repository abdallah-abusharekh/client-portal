import { useQuery } from "@tanstack/react-query";
import { reportsService } from "../services/reports.service";

export const reportsQueryKey = ["admin", "reports"] as const;

export const useReportsQuery = () => {
  return useQuery({
    queryKey: reportsQueryKey,
    queryFn: reportsService.getReports,
  });
};
