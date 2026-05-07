import PlatformAlertsWidget from "./AdminCharts/PlatformAlertsWidget";
import ProjectStatusWidget from "./AdminCharts/ProjectStatusWidget";
import QuickStatsWidget from "./AdminCharts/QuickStatsWidget";
import RevenueChartWidget from "./AdminCharts/RevenueChartWidget";
import UserGrowthWidget from "./AdminCharts/UserGrowthWidget";
import AdminDashboardHeader from "./AdminDashboardHeader";
import RecentUsersWidget from "./users/RecentUsersWidget";

export default function AdminDashboardView() {
  return (
    <div className="space-y-10">
      <AdminDashboardHeader />

      <div className="gap-6 grid lg:grid-cols-3">
        <RevenueChartWidget />
        <ProjectStatusWidget />
      </div>

      <div className="gap-6 grid lg:grid-cols-3">
        <PlatformAlertsWidget />
        <UserGrowthWidget />
      </div>

      <div className="gap-6 grid lg:grid-cols-3">
        <RecentUsersWidget />
        <QuickStatsWidget />
      </div>
    </div>
  );
}
