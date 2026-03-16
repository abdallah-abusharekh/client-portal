import StatCard from "./StatCard";
import { FiDollarSign, FiFolder, FiCheckSquare, FiClock } from "react-icons/fi";

export default function StatsGrid() {
  return (
    <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Earnings"
        value="$45,600"
        icon={FiDollarSign}
        trend="+12%"
        trendLabel="from last month"
      />

      <StatCard
        title="Active Projects"
        value="3"
        icon={FiFolder}
        trend="+0%"
        trendLabel="this month"
      />

      <StatCard
        title="Tasks Completed"
        value="18"
        icon={FiCheckSquare}
        trend="+25%"
        trendLabel="from last month"
      />

      <StatCard
        title="Hours This Week"
        value="32"
        icon={FiClock}
        trend="-5%"
        trendLabel="vs last week"
      />
    </div>
  );
}
