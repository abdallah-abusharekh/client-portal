"use client";

import Card from "@/src/shared/components/Card";
import Button from "@/src/shared/components/Button";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import toast from "react-hot-toast";

import { ProjectTask } from "../../types/project.types";
import TaskCard from "./TaskCard";
import ActionLink from "@/src/shared/components/ActionLink";

type Props = {
  tasks: ProjectTask[];
};

export default function ProjectTasks({ tasks }: Props) {
  const [taskList, setTaskList] = useState(tasks);

  function handleStatusChange(taskId: string, status: ProjectTask["status"]) {
    setTaskList((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, status } : task)),
    );

    toast.success(`Task moved to ${format(status)}`);
  }

  return (
    <Card className="p-0">
      <div className="flex justify-between items-center px-6 py-4 border-gray-300 border-b">
        <h3 className="font-semibold">Project Tasks</h3>

        <Button size="sm" className="flex items-center gap-2">
          <FiPlus />
          Add Task
        </Button>
      </div>

      <div className="space-y-4 p-4">
        {taskList.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>

      <ActionLink href="/freelancer/tasks">See All</ActionLink>
    </Card>
  );
}

function format(val: string) {
  return val.replace("-", " ");
}
