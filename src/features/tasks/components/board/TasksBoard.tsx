"use client";

import TasksColumn from "./TasksColumn";
import { TASK_COLUMNS } from "../../constants/task-status";
import { Task, TaskStatus } from "../../types/task.types";
import { useState } from "react";
import { getRandomColumnColor } from "../../services/tasks.service";
import Button from "@/src/shared/components/Button";
import { useDeleteColumnModal } from "../../hooks/useDeleteColumnModal";
import ConfirmModal from "@/src/shared/components/ConfirmModal";
import toast from "react-hot-toast";

type Props = {
  tasks: Task[];
  onAddTask: (status: TaskStatus) => void;
  openEditModal: (task: Task) => void;
};

export default function TasksBoard({ tasks, onAddTask, openEditModal }: Props) {
  const [columns, setColumns] = useState(TASK_COLUMNS);
  const deleteModal = useDeleteColumnModal();

  function handleAddColumn() {
    const newKey = `CUSTOM_${Date.now()}`;

    setColumns((prev) => [
      ...prev,
      {
        key: newKey,
        title: "New Column",
        color: getRandomColumnColor(),
      },
    ]);
  }

  function handleDeleteColumn(status: string) {
    deleteModal.openModal(status);
  }

  function confirmDeleteColumn() {
    if (!deleteModal.columnKey) return;

    setColumns((prev) =>
      prev.filter((col) => col.key !== deleteModal.columnKey),
    );

    deleteModal.closeModal();
    toast.success("Column deleted successfully");
  }

  return (
    <div className="items-start gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {columns.map((col) => (
        <TasksColumn
          key={col.key}
          status={col.key}
          title={col.title}
          color={col.color}
          tasks={tasks.filter((t) => t.status === col.key)}
          onAddTask={onAddTask}
          openEditModal={openEditModal}
          onDeleteColumn={handleDeleteColumn}
        />
      ))}

      <ConfirmModal
        open={deleteModal.open}
        onClose={deleteModal.closeModal}
        onConfirm={confirmDeleteColumn}
        title="Delete Column"
        description="Are you sure you want to delete this column? This action cannot be undone."
        confirmText="Delete"
        variant="danger"
      />

      <Button
        onClick={handleAddColumn}
        className="flex justify-center items-center bg-gray-100 hover:bg-gray-200 p-4 rounded-2xl text-gray-600 text-sm transition"
      >
        + Add Column
      </Button>
    </div>
  );
}
