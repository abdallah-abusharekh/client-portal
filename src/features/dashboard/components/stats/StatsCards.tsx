import StatCard from "./StatCard";
import { DashboardStat } from "../../types/dashboard.types";
import { statIconMap } from "../../constants/statIcons";

type Props = {
  stats: DashboardStat[];
};

export default function StatsGrid({ stats }: Props) {
  return (
    <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = statIconMap[stat.icon];

        return (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={Icon}
            trend={stat.trend}
            trendLabel={stat.trendLabel}
          />
        );
      })}
    </div>
  );
}
