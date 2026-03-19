import { customerStats } from "../mocks/dashboard.mock";
import RecentActivityWidget from "./RecentActivityWidget";
import CustomerProjectsSection from "./CustomerProjectsSection";
import DashboardHeader from "./DashboardHeader";
import StatsGrid from "./stats/StatsCards";

export default function CustomerDashboardView() {
  return (
    <div className="space-y-10">
      <DashboardHeader name="Sarah" />
      <StatsGrid stats={customerStats} />
      <CustomerProjectsSection />
      <RecentActivityWidget />
    </div>
  );
}
