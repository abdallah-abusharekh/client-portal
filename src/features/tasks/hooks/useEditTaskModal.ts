import { useModal } from "@/src/shared/hooks/useModal";
import { Task } from "../types/task.types";

export function useEditTaskModal() {
  const modal = useModal<Task>();

  return {
    open: modal.open,
    task: modal.data,
    openModal: modal.openModal,
    closeModal: modal.closeModal,
  };
}
