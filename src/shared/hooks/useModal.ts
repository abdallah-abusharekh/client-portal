import { useState } from "react";

export function useModal<T = null>() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<T | null>(null);

  function openModal(payload?: T) {
    if (payload !== undefined) {
      setData(payload);
    }
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setData(null);
  }

  return {
    open,
    data,
    openModal,
    closeModal,
  };
}
