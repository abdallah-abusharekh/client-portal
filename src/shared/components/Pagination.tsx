"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "./Button";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  className?: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  onPrevPage,
  onNextPage,
  canGoPrev,
  canGoNext,
  className = "",
}: Props) {
  if (totalPages <= 1) return null;
  return (
    <div className={`flex justify-end mt-auto items-center gap-2 ${className}`}>
      <Button
        variant="secondary"
        size="sm"
        onClick={onPrevPage}
        disabled={!canGoPrev}
      >
        <FaArrowLeft />
      </Button>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1.5 rounded-md text-sm transition ${
                isActive
                  ? "bg-primary text-white"
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <Button
        variant="secondary"
        size="sm"
        onClick={onNextPage}
        disabled={!canGoNext}
      >
        <FaArrowRight />
      </Button>
    </div>
  );
}
