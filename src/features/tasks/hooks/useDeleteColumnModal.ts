import { useState } from "react";

export function useDeleteColumnModal() {
  const [open, setOpen] = useState(false);
  const [columnKey, setColumnKey] = useState<string | null>(null);

  function openModal(key: string) {
    setColumnKey(key);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setColumnKey(null);
  }

  return {
    open,
    columnKey,
    openModal,
    closeModal,
  };
}
