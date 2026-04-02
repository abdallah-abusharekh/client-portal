"use client";

import { useModal } from "@/src/shared/hooks/useModal";

export function useCreateProjectModal() {
  const modal = useModal<null>();

  return {
    open: modal.open,
    openModal: modal.openModal,
    closeModal: modal.closeModal,
  };
}
