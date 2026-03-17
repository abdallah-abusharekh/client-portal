import { Notification } from "../types/layout";

export const notifications: Notification[] = [
  {
    id: "1",
    title: "New task assigned",
    description: "You were assigned to the Landing Page redesign task.",
    createdAt: "2 minutes ago",
    read: false,
  },
  {
    id: "2",
    title: "Project deadline updated",
    description: "The deadline for the Client Portal project was changed.",
    createdAt: "1 hour ago",
    read: false,
  },
  {
    id: "3",
    title: "New comment on task",
    description: "Alex Johnson commented on your task.",
    createdAt: "Yesterday",
    read: true,
  },
];
