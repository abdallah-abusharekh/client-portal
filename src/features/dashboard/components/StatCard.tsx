import Card from "@/src/shared/components/Card";
import { IconType } from "react-icons";

type Props = {
  title: string;
  value: string;
  icon: IconType;
  trend?: string;
  trendLabel?: string;
};

export default function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  trendLabel,
}: Props) {
  return (
    <Card className="flex justify-between items-start">
      <div>
        <p className="text-gray-500 text-xs uppercase tracking-wide">{title}</p>

        <h3 className="mt-2 font-semibold text-2xl">{value}</h3>

        {trend && (
          <p className="mt-2 text-green-600 text-sm">
            {trend} {trendLabel}
          </p>
        )}
      </div>

      <div className="bg-gray-100 p-3 rounded-xl text-(--color-primary) text-xl">
        <Icon />
      </div>
    </Card>
  );
}
