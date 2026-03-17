import PlatformAlertsWidget from "./AdminCharts/PlatformAlertsWidget";
import ProjectStatusWidget from "./AdminCharts/ProjectStatusWidget";
import QuickStatsWidget from "./AdminCharts/QuickStatsWidget";
import RevenueChartWidget from "./AdminCharts/RevenueChartWidget";
import UserGrowthWidget from "./AdminCharts/UserGrowthWidget";
import AdminDashboardHeader from "./AdminDashboardHeader";
import PlatformActivityWidget from "./PlatformActivityWidget";
import RecentUsersWidget from "./users/RecentUsersWidget";

export default function AdminDashboardView() {
  return (
    <div className="space-y-10">
      <AdminDashboardHeader />

      <div className="gap-6 grid lg:grid-cols-2">
        <RevenueChartWidget />
        <UserGrowthWidget />
      </div>

      <div className="gap-6 grid lg:grid-cols-3">
        <ProjectStatusWidget />
        <PlatformAlertsWidget />
        <QuickStatsWidget />
      </div>

      <div className="gap-6 grid lg:grid-cols-2">
        <RecentUsersWidget />
        <PlatformActivityWidget />
      </div>
    </div>
  );
}
