"use client";

import type { ReactNode } from "react";
import clsx from "clsx";

export const DEFAULT_MODAL_CONTAINER_CLASS =
  "z-50 fixed inset-0 h-full flex justify-center items-center";

export const DEFAULT_MODAL_BACKDROP_CLASS =
  "absolute inset-0 bg-black/10 backdrop-blur-[1px]";

type Props = {
  open: boolean;
  children: ReactNode;
  onClose?: () => void;
  containerClassName?: string;
  backdropClassName?: string;
};

export default function ModalOverlay({
  open,
  children,
  onClose,
  containerClassName,
  backdropClassName,
}: Props) {
  if (!open) return null;

  return (
    <div className={clsx(DEFAULT_MODAL_CONTAINER_CLASS, containerClassName)}>
      <div
        className={clsx(DEFAULT_MODAL_BACKDROP_CLASS, backdropClassName)}
        onClick={onClose}
      />
      {children}
    </div>
  );
}
