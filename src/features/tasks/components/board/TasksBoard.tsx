"use client";

import TasksColumn from "./TasksColumn";
import { Task, TaskStatus } from "../../types/task.types";
import Button from "@/src/shared/components/Button";

type Column = {
  key: string;
  title: string;
  color: string;
};

type Props = {
  tasks: Task[];
  columns: Column[];
  onAddTask: (status: TaskStatus) => void;
  openEditModal: (task: Task) => void;
  onDeleteColumn: (status: string) => void;
  onAddColumn: () => void;
};

export default function TasksBoard({
  tasks,
  columns,
  onAddTask,
  openEditModal,
  onDeleteColumn,
  onAddColumn,
}: Props) {
  return (
    <div className="items-start gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {columns.map((col) => {
        const columnTasks = tasks.filter((task) => task.status === col.key);

        return (
          <TasksColumn
            key={col.key}
            status={col.key}
            title={col.title}
            color={col.color}
            tasks={columnTasks}
            onAddTask={onAddTask}
            openEditModal={openEditModal}
            onDeleteColumn={onDeleteColumn}
          />
        );
      })}

      <Button
        onClick={onAddColumn}
        className="flex justify-center items-center bg-gray-100 hover:bg-gray-200 p-4 rounded-2xl text-gray-600 text-sm transition"
      >
        + Add Column
      </Button>
    </div>
  );
}
