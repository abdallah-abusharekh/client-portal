"use client";

import Button from "./Button";
import { FiAlertTriangle } from "react-icons/fi";

type Props = {
  open: boolean;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onClose: () => void;
  loading?: boolean;
  variant?: "default" | "danger";
};

export default function ConfirmModal({
  open,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onClose,
  loading,
  variant = "default",
}: Props) {
  if (!open) return null;

  const isDanger = variant === "danger";

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative space-y-4 bg-white shadow-lg p-6 rounded-2xl w-full max-w-md text-center">
        {/* 🔥 Icon */}
        {isDanger && (
          <div className="flex justify-center">
            <div className="bg-red-100 p-3 rounded-full">
              <FiAlertTriangle className="text-red-600 text-xl" />
            </div>
          </div>
        )}

        {/* Title */}
        <h2 className="font-semibold text-lg">{title}</h2>

        {/* Description */}
        {description && <p className="text-gray-500 text-sm">{description}</p>}

        {/* Actions */}
        <div className="flex justify-center gap-2 pt-2">
          <Button variant="secondary" onClick={onClose}>
            {cancelText}
          </Button>

          <Button
            onClick={onConfirm}
            loading={loading}
            className={isDanger ? "bg-red-600 hover:bg-red-700 text-white" : ""}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}
