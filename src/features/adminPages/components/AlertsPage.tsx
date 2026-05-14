"use client";

import PageHeader from "@/src/shared/components/PageHeader";
import Pagination from "@/src/shared/components/Pagination";
import { usePagination } from "@/src/shared/hooks/usePagination";
import Table from "../../adminTables/components/Table";
import AlertsFiltersBar from "./AlertsFiltersBar";
import { useAlertsPageState } from "../hooks/useAlertsPageState";

export default function AlertsPage() {
  const {
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    statusOptions,
    alertRows,
  } = useAlertsPageState();

  const {
    currentPage,
    totalPages,
    paginatedItems,
    canGoPrev,
    canGoNext,
    goToPage,
    goToPrevPage,
    goToNextPage,
  } = usePagination(alertRows, { pageSize: 7 });

  return (
    <div className="flex flex-col space-y-5 h-full">
      <PageHeader title="Alerts" subtitle="Monitor important system events" />

      <AlertsFiltersBar
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        statusOptions={statusOptions}
      />

      <Table items={paginatedItems} variant="default" />

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
