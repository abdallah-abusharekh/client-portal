"use client";

import { Task } from "../types/task.types";
import TasksBoard from "./board/TasksBoard";
import TasksHeader from "./TasksHeader";
import TasksToolbar from "./TasksToolbar";

type Props = {
  tasks: Task[];
  isLoading?: boolean;
  isError?: boolean;
};

export default function TasksPage({ tasks, isLoading, isError }: Props) {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <TasksHeader />

      <TasksToolbar />

      <TasksBoard tasks={tasks} isLoading={isLoading} isError={isError} />
    </div>
  );
}
