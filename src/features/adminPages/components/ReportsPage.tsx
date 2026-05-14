"use client";

import PageHeader from "@/src/shared/components/PageHeader";
import Pagination from "@/src/shared/components/Pagination";
import { usePagination } from "@/src/shared/hooks/usePagination";
import Table from "../../adminTables/components/Table";
import ReportsFiltersBar from "./ReportsFiltersBar";
import { useReportsQuery } from "../hooks/useReportsQuery";
import { useReportsFilters } from "../hooks/useReportsFilters";
import { useDownloadReport } from "../hooks/useDownloadReport";
import ListPageSkeleton from "./ListPageSkeleton";
import ErrorState from "@/src/shared/components/ErrorState";
import EmptyState from "@/src/shared/components/EmptyState";

export default function ReportsPage() {
  const { data = [], isLoading, error } = useReportsQuery();

  const {
    search,
    setSearch,
    categoryFilter,
    setCategoryFilter,
    categoryOptions,
    reportRows,
  } = useReportsFilters(data);

  const { mutate: downloadReport } = useDownloadReport();

  const {
    currentPage,
    totalPages,
    paginatedItems,
    canGoPrev,
    canGoNext,
    goToPage,
    goToPrevPage,
    goToNextPage,
  } = usePagination(reportRows, { pageSize: 7 });

  if (isLoading) {
    return <ListPageSkeleton />;
  }

  if (error) {
    return <ErrorState message="Failed to fetch reports." />;
  }

  if (paginatedItems.length === 0) {
    return <EmptyState message="No reports found." />;
  }

  return (
    <div className="flex flex-col space-y-5 h-full">
      <PageHeader
        title="Reports"
        subtitle="Review generated operational reports"
      />

      <ReportsFiltersBar
        search={search}
        onSearchChange={setSearch}
        categoryFilter={categoryFilter}
        onCategoryFilterChange={setCategoryFilter}
        categoryOptions={categoryOptions}
      />

      <Table
        items={paginatedItems}
        variant="reports"
        onDownloadReport={(reportId) => downloadReport({ id: reportId })}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
        onPrevPage={goToPrevPage}
        onNextPage={goToNextPage}
        canGoPrev={canGoPrev}
        canGoNext={canGoNext}
      />
    </div>
  );
}
