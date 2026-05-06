import Card from "@/src/shared/components/Card";
import { activities } from "../mocks/dashboard.mock";
import ActivityList from "./activities/ActivityList";

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
