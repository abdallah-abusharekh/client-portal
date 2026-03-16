import DashboardActivitySection from "./DashboardActivitySection";
import DashboardHeader from "./DashboardHeader";
import CurrentProjectsSection from "./projects/CurrentProjectsSection";
import StatsGrid from "./StatsCards";
import TasksSection from "./tasks/TasksSection";

export default function FreelancerDashboardView() {
  return (
    <div className="space-y-6">
      <DashboardHeader name="Alex" />

      <StatsGrid />

      <DashboardActivitySection />
      <CurrentProjectsSection />
      <TasksSection />
    </div>
  );
}
