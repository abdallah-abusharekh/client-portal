"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { ProjectTask } from "../../types/project.types";
import TaskCard from "./TaskCard";
import ActionLink from "@/src/shared/components/ActionLink";
import { formatStatus } from "../../utils/project.utils";
import { useParams } from "next/navigation";

type Props = {
  tasks: ProjectTask[];
};

export default function ProjectTasks({ tasks }: Props) {
  const { id } = useParams();
  const [taskList, setTaskList] = useState(tasks);

  function handleStatusChange(taskId: string, status: ProjectTask["status"]) {
    setTaskList((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, status } : task)),
    );

    toast.success(`Task moved to ${formatStatus(status)}`);
  }

  return (
    <div className="flex flex-col bg-white shadow-sm rounded-2xl h-full">
      <div className="flex justify-between items-center px-6 py-4 border-gray-300 border-b shrink-0">
        <h3 className="font-semibold">Project Tasks</h3>
        <ActionLink href={`/projects/${id}/tasks`}>See All</ActionLink>
      </div>

      <div className="flex-1 space-y-4 p-4">
        {taskList.length === 0 ? (
          <div className="mt-10 text-gray-500 text-sm text-center">
            No tasks yet
          </div>
        ) : (
          taskList.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onStatusChange={handleStatusChange}
            />
          ))
        )}
      </div>
    </div>
  );
}
