import { activityIcons } from "@/src/features/dashboard/mocks/dashboard.mock";
import { Activity } from "../../types/shared.type";

type Props = {
  activity: Activity;
};

export default function ActivityItem({ activity }: Props) {
  const { icon: Icon, className } = activityIcons[activity.type];

  return (
    <div className="flex justify-between items-start hover:bg-gray-50 py-4">
      <div className="flex items-start gap-4">
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-lg ${className}`}
        >
          <Icon className="w-4 h-4" />
        </div>

        <div className="space-y-1">
          <p className="text-sm">
            <span className="font-medium">{activity.userName}</span>{" "}
            <span className="text-gray-500">{activity.action}</span>
          </p>

          <p className="font-medium text-indigo-600 text-sm">
            {activity.project}
          </p>

          {activity.description && (
            <p className="text-gray-500 text-sm">{activity.description}</p>
          )}
        </div>
      </div>

      <span className="text-gray-400 text-sm">{activity.date}</span>
    </div>
  );
}
