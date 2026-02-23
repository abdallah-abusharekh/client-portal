import RecentFiles from "@/src/features/dashboard/components/customer/RecentFiles";
import ProjectsOverviewSection from "@/src/features/dashboard/components/shared/ProjectsOverviewSection";
import QuickActions from "@/src/features/dashboard/components/shared/QuickActions";
import RecentActivity from "@/src/features/dashboard/components/shared/RecentActivity";
import {
  activities,
  customerFiles,
  customerProjects,
} from "@/src/features/dashboard/mocks/dashboard.mock";

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
