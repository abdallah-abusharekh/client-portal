import { Activity } from "../../dashboard/types/dashboard.types";
import { ProjectActivity } from "../types/project.types";

export function mapProjectActivityToActivity(
  activity: ProjectActivity,
): Activity {
  return {
    id: activity.id,
    type: "update",
    userName: activity.userName,
    avatar: activity.avatar,
    action: activity.action,
    project: activity.target || "Project update",
    date: activity.date,
  };
}
