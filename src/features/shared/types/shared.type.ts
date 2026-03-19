export type ActivityType = "update" | "task" | "comment" | "upload";

export type Activity = {
  id: string;
  type: ActivityType;
  userName: string;
  avatar: string;
  action: string;
  project: string;
  description?: string;
  date: string;
};
