import UpcomingDeadlinesWidget from "./deadLine/UpcomingDeadlinesWidget";
import EarningsOverviewWidget from "./earnings/EarningsOverviewWidget";

export default function FreelancerActivitySection() {
  return (
    <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <EarningsOverviewWidget />
      </div>

      <UpcomingDeadlinesWidget />
    </div>
  );
}
