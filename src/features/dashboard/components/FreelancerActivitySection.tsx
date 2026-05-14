import UpcomingDeadlinesWidget from "./deadLine/UpcomingDeadlinesWidget";
import EarningsOverviewWidget from "./earnings/EarningsOverviewWidget";
import type { Deadline } from "../types/dashboard.types";

type Props = {
  deadlines: Deadline[];
};

export default function FreelancerActivitySection({ deadlines }: Props) {
  return (
    <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <EarningsOverviewWidget />
      </div>

      <UpcomingDeadlinesWidget deadlines={deadlines} />
    </div>
  );
}
