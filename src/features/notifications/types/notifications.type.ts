type NotificationType = "project" | "task" | "meeting";

export type Notification = {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  date: string;
  read: boolean;
  projectId?: string;
  taskId?: string;
  meetingId?: string;
};
