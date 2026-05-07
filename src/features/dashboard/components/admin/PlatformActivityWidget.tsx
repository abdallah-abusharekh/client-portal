"use client";

import Card from "@/src/shared/components/Card";
import ActionLink from "@/src/shared/components/ActionLink";
import { adminActivities } from "../../mocks/dashboard.mock";
import ActivityItem from "../activities/ActivityItem";

export default function PlatformActivityWidget() {
  return (
    <Card className="p-0">
      <div className="flex justify-between items-center px-6 py-4 border-gray-300 border-b">
        <h3 className="font-semibold text-gray-900">Platform Activity</h3>

        <ActionLink href="#">View All</ActionLink>
      </div>

      <div className="px-6">
        {adminActivities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </Card>
  );
}
