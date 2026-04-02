import { useModal } from "@/src/shared/hooks/useModal";

export function useDeleteColumnModal() {
  const modal = useModal<string>();

  return {
    open: modal.open,
    columnKey: modal.data,
    openModal: modal.openModal,
    closeModal: modal.closeModal,
  };
}
