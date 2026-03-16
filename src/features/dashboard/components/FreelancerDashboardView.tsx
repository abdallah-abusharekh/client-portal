import { freelancerStats } from "../mocks/dashboard.mock";
import DashboardHeader from "./DashboardHeader";
import CurrentProjectsSection from "./projects/CurrentProjectsSection";
import StatsGrid from "./stats/StatsCards";
import TasksSection from "./tasks/TasksSection";
import FreelancerActivitySection from "./FreelancerActivitySection";

export default function FreelancerDashboardView() {
  return (
    <div className="space-y-6">
      <DashboardHeader name="Alex" />

      <StatsGrid stats={freelancerStats} />
      <FreelancerActivitySection />
      <CurrentProjectsSection />
      <TasksSection />
    </div>
  );
}
