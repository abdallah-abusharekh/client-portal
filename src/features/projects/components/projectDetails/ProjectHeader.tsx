"use client";

import Card from "@/src/shared/components/Card";

import HeaderTop from "./HeaderTop";
import HeaderStats from "./HeaderStats";
import {
  ProjectDetails,
  ProjectFormBase,
  ProjectStatus,
} from "../../types/project.types";
import { useState } from "react";
import toast from "react-hot-toast";
import { useEditProjectModal } from "../../hooks/useEditProjectModal";
import { updateProjectService } from "../../services/projects.service";
import EditProjectModal from "../forms/edit-project/EditProjectModal";

type Props = {
  project: ProjectDetails;
};

export default function ProjectHeader({ project }: Props) {
  const [projectState, setProjectState] = useState(project);

  function handleStatusChange(status: ProjectStatus) {
    setProjectState((prev) => ({
      ...prev,
      status,
    }));

    toast.success(`Project moved to ${status.replace("-", " ")}`);
  }

  const editModal = useEditProjectModal();

  const handleUpdateProject = async (data: ProjectFormBase) => {
    await toast.promise(updateProjectService(projectState, data), {
      loading: "Updating project...",
      success: (updatedProject) => {
        setProjectState(updatedProject);
        editModal.closeModal();
        return "Project updated successfully";
      },
      error: "Failed to update project",
    });
  };

  return (
    <div className="space-y-4">
      <p className="text-gray-500 text-sm">
        Projects / <span className="text-gray-900">{projectState.title}</span>
      </p>

      <Card className="space-y-6">
        <HeaderTop
          project={projectState}
          onStatusChange={handleStatusChange}
          onEdit={editModal.openModal}
        />

        <EditProjectModal
          open={editModal.open}
          onClose={editModal.closeModal}
          project={projectState}
          onUpdate={handleUpdateProject}
        />

        <div className="bg-gray-200 h-px" />

        <HeaderStats project={projectState} />
      </Card>
    </div>
  );
}
