import { useState } from "react";
import { TaskStatus } from "../types/task.types";

export function useCreateTaskModal() {
  const [open, setOpen] = useState(false);
  const [defaultStatus, setDefaultStatus] = useState<TaskStatus>("TODO");

  function openModal() {
    setDefaultStatus("TODO");
    setOpen(true);
  }

  function openWithStatus(status: TaskStatus) {
    setDefaultStatus(status);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return {
    open,
    defaultStatus,
    openModal,
    openWithStatus,
    closeModal,
  };
}
