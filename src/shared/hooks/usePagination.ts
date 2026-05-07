"use client";

import { useEffect, useMemo, useState } from "react";

type Options = {
  initialPage?: number;
  pageSize?: number;
};

export function usePagination<T>(items: T[], options?: Options) {
  const pageSize = options?.pageSize ?? 5;
  const initialPage = options?.initialPage ?? 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return items.slice(start, end);
  }, [currentPage, items, pageSize]);

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const goToPage = (page: number) => {
    const safePage = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(safePage);
  };

  const goToPrevPage = () => {
    if (canGoPrev) setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    if (canGoNext) setCurrentPage((prev) => prev + 1);
  };

  return {
    currentPage,
    totalPages,
    totalItems,
    pageSize,
    paginatedItems,
    canGoPrev,
    canGoNext,
    goToPage,
    goToPrevPage,
    goToNextPage,
    setCurrentPage,
  };
}
