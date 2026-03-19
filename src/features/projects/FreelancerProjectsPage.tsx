"use client";

import { useState } from "react";
import CreateProjectModal from "./components/forms/create-project/CreateProjectModal";
import ProjectsGrid from "./components/ProjectsGrid";
import ProjectsHeader from "./components/ProjectsHeader";
import ProjectsTabs from "./components/ProjectsTabs";
import ProjectsToolbar from "./components/ProjectsToolbar";
import { useCreateProjectModal } from "./hooks/useCreateProjectModal";

import { useProjectsFilters } from "./hooks/useProjectsFilters";
import { projectsMock } from "./mocks/projects.mock";
import { createProjectService } from "./services/projects.service";
import toast from "react-hot-toast";
import { ProjectFormBase } from "./types/project.types";

export default function FreelancerProjectsPage() {
  const [projectsState, setProjectsState] = useState(projectsMock);
  const {
    search,
    setSearch,
    view,
    setView,
    status,
    setStatus,
    tabs,
    filteredProjects,
  } = useProjectsFilters(projectsState);

  const modal = useCreateProjectModal();

  const handleCreateProject = async (data: ProjectFormBase) => {
    await toast.promise(createProjectService(data), {
      loading: "Creating project...",
      success: (project) => {
        setProjectsState((prev) => [project, ...prev]);
        return "Project created successfully";
      },
      error: "Failed to create project",
    });
  };

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
      <ProjectsGrid projects={filteredProjects} view={view} />
    </div>
  );
}
