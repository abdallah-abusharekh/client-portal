import ProjectsOverviewSection from "@/src/features/dashboard/components/ProjectsOverviewSection";
import QuickActions from "@/src/features/dashboard/components/QuickActions";
import RecentActivity from "@/src/features/dashboard/components/RecentActivity";
import {
  activities,
  customerFiles,
  customerProjects,
} from "@/src/features/dashboard/mocks/dashboard.mock";
import RecentFiles from "./RecentFiles";

export default function CustomerDashboardView() {
  return (
    <div className="space-y-10">
      <div className="gap-6 grid lg:grid-cols-3">
        <ProjectsOverviewSection projects={customerProjects}>
          <RecentFiles files={customerFiles} />
        </ProjectsOverviewSection>
        <div className="space-y-6">
          <RecentActivity items={activities} />

          <QuickActions />
        </div>
      </div>
    </div>
  );
}
