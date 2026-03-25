"use client";

import CreateProjectModal from "./components/forms/create-project/CreateProjectModal";
import ProjectsGrid from "./components/ProjectsGrid";
import ProjectsHeader from "./components/ProjectsHeader";
import ProjectsTabs from "./components/ProjectsTabs";
import ProjectsToolbar from "./components/ProjectsToolbar";
import { useCreateProjectModal } from "./hooks/useCreateProjectModal";
import { useProjectsFilters } from "./hooks/useProjectsFilters";
import { useProjects } from "./hooks/useProjects";
import toast from "react-hot-toast";
import { ProjectFormBase } from "./types/project.types";
import ProjectsGridSkeleton from "./components/skeletons/ProjectsGridSkeleton";
import ErrorState from "@/src/shared/components/ErrorState";
import EmptyState from "@/src/shared/components/EmptyState";

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
