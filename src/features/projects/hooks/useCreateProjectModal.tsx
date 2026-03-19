"use client";

import { useState } from "react";

export function useCreateProjectModal() {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return {
    open,
    openModal,
    closeModal,
  };
}
