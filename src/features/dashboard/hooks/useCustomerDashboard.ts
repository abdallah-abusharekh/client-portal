import { useQuery } from "@tanstack/react-query";
import { delay } from "@/src/shared/utils/delay";

import { customerStats, freelancers } from "../mocks/dashboard.mock";
import { projectsMock } from "../../projects/mocks/projects.mock";

export type CustomerDashboardData = {
  stats: typeof customerStats;
  activeProjects: typeof projectsMock;
  freelancers: typeof freelancers;
};

export const customerDashboardQueryKey = ["dashboard", "customer"] as const;

export function useCustomerDashboard() {
  return useQuery({
    queryKey: customerDashboardQueryKey,
    queryFn: async (): Promise<CustomerDashboardData> => {
      await delay(600);

      return {
        stats: customerStats,
        activeProjects: projectsMock.slice(0, 2),
        freelancers,
      };
    },
  });
}
