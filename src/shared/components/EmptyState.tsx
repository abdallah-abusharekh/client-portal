"use client";

import { FiInbox } from "react-icons/fi";
import Button from "./Button";

type Props = {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function EmptyState({
  title = "No data found",
  message = "There is nothing to display here yet.",
  actionLabel,
  onAction,
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-6 text-center">
      {/* Icon */}
      <div className="flex justify-center items-center bg-gray-100 rounded-full w-12 h-12">
        <FiInbox className="w-6 h-6 text-gray-400" />
      </div>

      {/* Text */}
      <div className="space-y-1">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-500 text-sm">{message}</p>
      </div>

      {/* Action */}
      {actionLabel && onAction && (
        <Button size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
