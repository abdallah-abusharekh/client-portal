import { useState } from "react";
import { TASK_COLUMNS } from "../constants/task-status";
import { useDeleteColumnModal } from "./useDeleteColumnModal";
import { getRandomColumnColor } from "../services/tasks.service";
import toast from "react-hot-toast";

export function useTasksBoardController() {
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

  return {
    columns,
    deleteModal,
    handleAddColumn,
    handleDeleteColumn,
    confirmDeleteColumn,
  };
}
