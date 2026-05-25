import PlatformAlertsWidget from "./AdminCharts/PlatformAlertsWidget";
import ProjectStatusWidget from "./AdminCharts/ProjectStatusWidget";
import QuickStatsWidget from "./AdminCharts/QuickStatsWidget";
import RevenueChartWidget from "./AdminCharts/RevenueChartWidget";
import UserGrowthWidget from "./AdminCharts/UserGrowthWidget";
import AdminDashboardHeader from "./AdminDashboardHeader";
import RecentUsersWidget from "./users/RecentUsersWidget";

export default function AdminDashboardView() {
  return (
    <div className="space-y-4 sm:space-y-5 lg:space-y-6">
      <AdminDashboardHeader />

      <div className="grid gap-x-6 gap-y-4 md:grid-cols-3">
        <RevenueChartWidget />
        <ProjectStatusWidget />
      </div>

      <div className="grid gap-x-6 gap-y-4 lg:grid-cols-3">
        <PlatformAlertsWidget />
        <UserGrowthWidget />
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-3">
        <div className="hidden sm:block md:col-span-3 lg:col-span-2">
          <RecentUsersWidget />
        </div>
        <div className="md:col-span-3 lg:col-span-1">
          <QuickStatsWidget />
        </div>
      </div>
    </div>
  );
}
