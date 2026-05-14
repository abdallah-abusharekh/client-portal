"use client";

import PageHeader from "@/src/shared/components/PageHeader";
import Pagination from "@/src/shared/components/Pagination";
import { usePagination } from "@/src/shared/hooks/usePagination";
import Table from "../../adminTables/components/Table";
import ProjectsFiltersBar from "./ProjectsFiltersBar";
import { useProjectsQuery } from "../hooks/useProjectsQuery";
import { useProjectsFilters } from "../hooks/useProjectsFilters";
import ListPageSkeleton from "./ListPageSkeleton";
import EmptyState from "@/src/shared/components/EmptyState";
import ErrorState from "@/src/shared/components/ErrorState";
import { useDeleteProjects } from "../hooks/useDeleteProjects";

export default function ProjectsPage() {
  const { data = [], isLoading, error } = useProjectsQuery();

  const {
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    statusOptions,
    projectRows,
  } = useProjectsFilters(data);

  const { mutate: deleteProjects } = useDeleteProjects();

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

  if (isLoading) {
    return <ListPageSkeleton />;
  }

  if (error) {
    return <ErrorState message="Failed to fetch projects." />;
  }

  if (paginatedItems.length === 0) {
    return <EmptyState message="No projects found." />;
  }

  return (
    <div className="flex flex-col space-y-5 h-full">
      <PageHeader
        title="All projects"
        subtitle="Manage client-portal projects"
      />

      <ProjectsFiltersBar
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        statusOptions={statusOptions}
      />

      <Table
        items={paginatedItems}
        variant="projects"
        onDeleteProject={(projectId) => deleteProjects({ ids: [projectId] })}
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
