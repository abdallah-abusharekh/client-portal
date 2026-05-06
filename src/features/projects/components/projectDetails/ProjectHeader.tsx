"use client";

import Card from "@/src/shared/components/Card";
import HeaderTop from "./HeaderTop";
import HeaderStats from "./HeaderStats";
import { ProjectDetails, ProjectStatus } from "../../types/project.types";
import toast from "react-hot-toast";
import { useEditProjectModal } from "../../hooks/useEditProjectModal";

import { useUpdateProject } from "../../hooks/useUpdateProject";
import { EditProjectData } from "../../schemas/editProject.schema";
import Link from "next/link";
import { BiArrowBack, BiCheckCircle } from "react-icons/bi";
import Button from "@/src/shared/components/Button";
import { useParams } from "next/navigation";
import EditProjectModal from "../forms/EditProjectModal";

type Props = {
  project: ProjectDetails;
};

export default function ProjectHeader({ project }: Props) {
  const { id } = useParams();

  const editModal = useEditProjectModal();
  const updateMutation = useUpdateProject(project.id);

  function handleStatusChange(status: ProjectStatus) {
    updateMutation.mutate({ status } as EditProjectData, {
      onSuccess: () => {
        toast.success(`Project moved to ${status.replace("-", " ")}`);
      },
      onError: () => {
        toast.error("Failed to update status");
      },
    });
  }

  function handleUpdateProject(data: EditProjectData) {
    updateMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Project updated successfully");
        editModal.closeModal();
      },
      onError: () => {
        toast.error("Failed to update project");
      },
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="flex items-center gap-1 text-gray-500 text-sm">
          <Link href="/projects" className="flex items-center gap-2">
            <BiArrowBack />
            Projects /
          </Link>{" "}
          <span className="text-gray-900">{project.title}</span>
        </p>
        <Button href={`/projects/${id}/tasks`} variant="primary">
          View tasks <BiCheckCircle className="w-4 h-4" />
        </Button>
      </div>

      <Card className="space-y-6">
        <HeaderTop
          project={project}
          onStatusChange={handleStatusChange}
          onEdit={editModal.openModal}
        />

        <EditProjectModal
          open={editModal.open}
          onClose={editModal.closeModal}
          project={project}
          onUpdate={handleUpdateProject}
        />

        <div className="bg-gray-200 h-px" />

        <HeaderStats project={project} />
      </Card>
    </div>
  );
}
