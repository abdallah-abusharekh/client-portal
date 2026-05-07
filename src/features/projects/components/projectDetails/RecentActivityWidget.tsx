import ActivityList from "@/src/features/dashboard/components/activities/ActivityList";
import { activities } from "@/src/features/dashboard/mocks/dashboard.mock";
import Card from "@/src/shared/components/Card";

export default function RecentActivityWidget() {
  return (
    <Card className="flex flex-col p-0 h-105">
      <div className="flex justify-between items-center p-5">
        <h3 className="font-semibold text-lg">Recent Activity</h3>
      </div>

      <div className="flex-1 px-5 overflow-auto">
        <ActivityList activities={activities} />
      </div>
    </Card>
  );
}
