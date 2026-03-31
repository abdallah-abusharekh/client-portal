"use client";

import { useDroppable } from "@dnd-kit/core";
import TaskCard from "../task/TaskCard";
import { Task, TaskStatus } from "../../types/task.types";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { FiPlus } from "react-icons/fi";

type Props = {
  title: string;
  tasks: Task[];
  status: TaskStatus;
  onAddTask: (status: TaskStatus) => void;
};

export default function TasksColumn({
  title,
  tasks,
  status,
  onAddTask,
}: Props) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });

  const sortedTasks = [...tasks].sort((a, b) => a.order - b.order);

  return (
    <div
      ref={setNodeRef}
      className={`bg-gray-50 rounded-2xl shadow-sm p-3 flex flex-col gap-3 min-h-25 max-h-75 overflow-x-hidden overflow-y-auto transition ${
        isOver ? "bg-blue-50" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-sm">{title}</h3>

        <button
          onClick={() => onAddTask(status)}
          className="hover:bg-gray-200 p-1 rounded-md transition"
        >
          <FiPlus className="text-gray-600 text-sm" />
        </button>
      </div>

      <SortableContext
        items={sortedTasks.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-col gap-3">
          {sortedTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}
