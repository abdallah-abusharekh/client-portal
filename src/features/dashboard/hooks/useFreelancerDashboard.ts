import { useQuery } from "@tanstack/react-query";
import { delay } from "@/src/shared/utils/delay";

import { freelancerStats, deadlines } from "../mocks/dashboard.mock";
import { projectsMock } from "../../projects/mocks/projects.mock";

export type FreelancerDashboardData = {
  stats: typeof freelancerStats;
  deadlines: typeof deadlines;
  currentProjects: typeof projectsMock;
};

export const freelancerDashboardQueryKey = ["dashboard", "freelancer"] as const;

export function useFreelancerDashboard() {
  return useQuery({
    queryKey: freelancerDashboardQueryKey,
    queryFn: async (): Promise<FreelancerDashboardData> => {
      await delay(600);

      return {
        stats: freelancerStats,
        deadlines,
        currentProjects: projectsMock.slice(0, 2),
      };
    },
  });
}
