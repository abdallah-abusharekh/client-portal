import { Stat } from "../../types/dashboard.types";

type Props = {
  stats: Stat[];
};

export default function StatsCards({ stats }: Props) {
  return (
    <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.id}
            className="flex justify-between items-center bg-(--color-background) shadow-sm hover:shadow-md p-5 rounded-xl transition"
          >
            <div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <p className="mt-1 text-2xl font-semibold text-(--color-text)">
                {stat.value}
              </p>
            </div>

            <div className="flex justify-center items-center bg-primary-light/20 rounded-lg w-10 h-10">
              <Icon className="text-lg text-(--color-primary)" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
