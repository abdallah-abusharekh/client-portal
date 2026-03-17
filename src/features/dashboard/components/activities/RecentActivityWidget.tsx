import Card from "@/src/shared/components/Card";
import ActionLink from "@/src/shared/components/ActionLink";
import { activities } from "../../mocks/dashboard.mock";
import ActivityItem from "./ActivityItem";

export default function RecentActivityWidget() {
  return (
    <Card className="flex flex-col p-0 h-105">
      <div className="flex justify-between items-center p-5">
        <h3 className="font-semibold text-lg">Recent Activity</h3>

        <ActionLink href="/customer/activity">View All</ActionLink>
      </div>

      <div className="flex-1 px-5">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </Card>
  );
}
