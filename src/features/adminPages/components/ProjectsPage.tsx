"use client";

import PageHeader from "@/src/shared/components/PageHeader";
import Pagination from "@/src/shared/components/Pagination";
import { usePagination } from "@/src/shared/hooks/usePagination";
import Table from "../../adminTables/components/Table";
import ProjectsFiltersBar from "./ProjectsFiltersBar";
import { useProjectsPageState } from "../hooks/useProjectsPageState";

export default function ProjectsPage() {
  const {
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    statusOptions,
    projectRows,
    handleDeleteProject,
  } = useProjectsPageState();

  const {
    currentPage,
    totalPages,
    paginatedItems,
    canGoPrev,
    canGoNext,
    goToPage,
    goToPrevPage,
    goToNextPage,
  } = usePagination(projectRows, { pageSize: 7 });

  return (
    <div className="flex flex-col space-y-5 h-full">
      <PageHeader title="All projects" subtitle="Manage client-portal projects" />

      <ProjectsFiltersBar
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        statusOptions={statusOptions}
      />

      <Table
        users={paginatedItems}
        variant="projects"
        onDeleteProject={handleDeleteProject}
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
