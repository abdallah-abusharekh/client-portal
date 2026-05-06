"use client";

import toast from "react-hot-toast";
import ErrorState from "@/src/shared/components/ErrorState";
import EmptyState from "@/src/shared/components/EmptyState";
import { useProjects } from "../hooks/useProjects";
import { useProjectsFilters } from "../hooks/useProjectsFilters";
import { useCreateProjectModal } from "../hooks/useCreateProjectModal";
import { ProjectFormBase } from "../types/project.types";
import ProjectsHeader from "./ProjectsHeader";

import ProjectsToolbar from "./ProjectsToolbar";
import ProjectsTabs from "./ProjectsTabs";
import ProjectsGridSkeleton from "./skeletons/ProjectsGridSkeleton";
import ProjectsGrid from "./ProjectsGrid";
import CreateProjectModal from "./forms/CreateProjectModal";

export default function FreelancerProjectsPage() {
  const { projects, createProject, isLoading, isError, refetch } =
    useProjects();

  const {
    search,
    setSearch,
    view,
    setView,
    status,
    setStatus,
    tabs,
    filteredProjects,
  } = useProjectsFilters(projects);

  const modal = useCreateProjectModal();

  function handleCreateProject(data: ProjectFormBase) {
    createProject(data, {
      onSuccess: () => {
        toast.success("Project created successfully");
        modal.closeModal();
      },
      onError: () => {
        toast.error("Failed to create project");
      },
    });
  }

  return (
    <div className="space-y-6">
      <ProjectsHeader onCreate={modal.openModal} />

      <CreateProjectModal
        open={modal.open}
        onClose={modal.closeModal}
        onCreate={handleCreateProject}
      />

      <ProjectsToolbar
        search={search}
        onSearchChange={setSearch}
        view={view}
        onViewChange={setView}
      />

      <ProjectsTabs tabs={tabs} active={status} onChange={setStatus} />

      {isLoading && <ProjectsGridSkeleton />}

      {!isLoading && isError && (
        <ErrorState
          title="Failed to load projects"
          message="Please try again."
          onRetry={refetch}
        />
      )}

      {!isLoading && !isError && filteredProjects.length === 0 && (
        <EmptyState
          title="No projects found"
          message={
            search
              ? "Try adjusting your search or filters."
              : "Start by creating your first project."
          }
          actionLabel={!search ? "Create Project" : undefined}
          onAction={!search ? modal.openModal : undefined}
        />
      )}

      {!isLoading && !isError && filteredProjects.length > 0 && (
        <ProjectsGrid projects={filteredProjects} view={view} />
      )}
    </div>
  );
}
