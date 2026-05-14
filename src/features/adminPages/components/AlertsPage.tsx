"use client";

import PageHeader from "@/src/shared/components/PageHeader";
import Pagination from "@/src/shared/components/Pagination";
import { usePagination } from "@/src/shared/hooks/usePagination";
import Table from "../../adminTables/components/Table";
import AlertsFiltersBar from "./AlertsFiltersBar";
import { useAlertsQuery } from "../hooks/useAlertsQuery";
import { useAlertsFilters } from "../hooks/useAlertsFilters";
import ListPageSkeleton from "./ListPageSkeleton";
import ErrorState from "@/src/shared/components/ErrorState";
import EmptyState from "@/src/shared/components/EmptyState";

export default function AlertsPage() {
  const { data = [], isLoading, error } = useAlertsQuery();

  const {
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    statusOptions,
    alertRows,
  } = useAlertsFilters(data);

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

  if (isLoading) {
    return <ListPageSkeleton />;
  }

  if (error) {
    return <ErrorState message="Failed to fetch alerts." />;
  }

  if (paginatedItems.length === 0) {
    return <EmptyState message="No alerts found." />;
  }

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
