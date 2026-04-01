import { useState } from "react";
import { Task } from "../types/task.types";

export function useDeleteTaskModal() {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState<Task | null>(null);

  function openModal(task: Task) {
    setTask(task);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setTask(null);
  }

  return {
    open,
    task,
    openModal,
    closeModal,
  };
}
