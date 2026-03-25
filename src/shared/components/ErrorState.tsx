"use client";

import { FiAlertCircle } from "react-icons/fi";
import Button from "./Button";

type Props = {
  title?: string;
  message?: string;
  onRetry?: () => void;
};

export default function ErrorState({
  title = "Something went wrong",
  message = "An unexpected error occurred. Please try again.",
  onRetry,
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-6 text-center">
      <div className="flex justify-center items-center bg-red-100 rounded-full w-12 h-12">
        <FiAlertCircle className="w-6 h-6 text-red-500" />
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-500 text-sm">{message}</p>
      </div>

      {onRetry && (
        <Button variant="secondary" size="sm" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
}
