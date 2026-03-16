import { customerStats } from "../mocks/dashboard.mock";
import RecentActivityWidget from "./activities/RecentActivityWidget";
import CustomerProjectsSection from "./CustomerProjectsSection";
import StatsGrid from "./stats/StatsCards";

export default function CustomerDashboardView() {
  return (
    <div className="space-y-10">
      <StatsGrid stats={customerStats} />
      <CustomerProjectsSection />
      <RecentActivityWidget />
    </div>
  );
}
