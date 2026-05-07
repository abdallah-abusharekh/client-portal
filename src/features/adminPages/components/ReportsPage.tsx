"use client";

import PageHeader from "@/src/shared/components/PageHeader";
import Pagination from "@/src/shared/components/Pagination";
import { usePagination } from "@/src/shared/hooks/usePagination";
import Table from "../../adminTables/components/Table";
import ReportsFiltersBar from "./ReportsFiltersBar";
import { useReportsPageState } from "../hooks/useReportsPageState";

export default function ReportsPage() {
  const {
    search,
    setSearch,
    categoryFilter,
    setCategoryFilter,
    categoryOptions,
    reportRows,
    handleDownloadReport,
  } = useReportsPageState();

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

  return (
    <div className="flex flex-col space-y-5 h-full">
      <PageHeader title="Reports" subtitle="Review generated operational reports" />

      <ReportsFiltersBar
        search={search}
        onSearchChange={setSearch}
        categoryFilter={categoryFilter}
        onCategoryFilterChange={setCategoryFilter}
        categoryOptions={categoryOptions}
      />

      <Table
        users={paginatedItems}
        variant="reports"
        onDownloadReport={handleDownloadReport}
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
