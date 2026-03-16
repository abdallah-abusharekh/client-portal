import QuickActions from "@/src/features/dashboard/components/QuickActions";
import RecentActivity from "@/src/features/dashboard/components/RecentActivity";

import ProjectsOverviewSection from "@/src/features/dashboard/components/ProjectsOverviewSection";
import {
  activities,
  freelancerProjects,
  freelancerStats,
} from "@/src/features/dashboard/mocks/dashboard.mock";
import StatsCards from "./StatsCards";

export default function FreelancerDashboardView() {
  return (
    <div className="space-y-10">
      <StatsCards stats={freelancerStats} />
      <div className="gap-6 grid lg:grid-cols-3">
        <ProjectsOverviewSection projects={freelancerProjects} />
        <div className="space-y-6">
          <RecentActivity items={activities} />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
