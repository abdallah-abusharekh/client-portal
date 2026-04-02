import { useModal } from "@/src/shared/hooks/useModal";
import { TaskStatus } from "../types/task.types";

export function useCreateTaskModal() {
  const modal = useModal<TaskStatus>();

  function openModal() {
    modal.openModal("TODO");
  }

  function openWithStatus(status: TaskStatus) {
    modal.openModal(status);
  }

  function closeModal() {
    modal.closeModal();
  }

  return {
    open: modal.open,
    defaultStatus: modal.data ?? "TODO",
    openModal,
    openWithStatus,
    closeModal,
  };
}
