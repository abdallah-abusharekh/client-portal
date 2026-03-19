import Card from "@/src/shared/components/Card";
import type { ProjectActivity } from "../../types/project.types";
import { mapProjectActivityToActivity } from "../../mappers/projectDetails.mapper";
import ActivityList from "@/src/features/shared/components/activities/ActivityList";

type Props = {
  activities: ProjectActivity[];
};

export default function ProjectActivity({ activities }: Props) {
  const mappedActivities = activities.map(mapProjectActivityToActivity);

  return (
    <Card className="space-y-4 overflow-auto">
      <h3 className="font-semibold">Recent Activity</h3>

      <ActivityList activities={mappedActivities} />
    </Card>
  );
}
