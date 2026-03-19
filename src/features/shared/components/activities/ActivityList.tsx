import ActivityItem from "./ActivityItem";
import type { Activity } from "../../dashboard/types/dashboard.types";

type Props = {
  activities: Activity[];
};

export default function ActivityList({ activities }: Props) {
  return (
    <div className="space-y-2">
      {activities.map((activity) => (
        <ActivityItem key={activity.id} activity={activity} />
      ))}
    </div>
  );
}
