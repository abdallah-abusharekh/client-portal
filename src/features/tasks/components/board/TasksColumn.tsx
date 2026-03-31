"use client";

import { useDroppable } from "@dnd-kit/core";
import TaskCard from "../task/TaskCard";
import { Task, TaskStatus } from "../../types/task.types";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

type Props = {
  title: string;
  tasks: Task[];
  status: TaskStatus;
};

export default function TasksColumn({ title, tasks, status }: Props) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });

  return (
    <div
      ref={setNodeRef}
      className={`bg-gray-50 rounded-2xl shadow-sm p-3 flex flex-col gap-3 min-h-25 max-h-75 overflow-x-hidden overflow-y-auto transition ${
        isOver ? "bg-blue-50" : ""
      }`}
    >
      <h3 className="font-semibold text-sm">{title}</h3>

      <SortableContext
        items={tasks.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-col gap-3">
          {tasks.map((task) => {
            return <TaskCard key={task.id} task={task} />;
          })}
        </div>
      </SortableContext>
    </div>
  );
}
