"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ProjectFormFields from "./ProjectFormFields";
import Button from "@/src/shared/components/Button";
import ModalOverlay from "@/src/shared/components/ModalOverlay";

import { Project, ProjectFormBase } from "../../types/project.types";
import { editProjectSchema } from "../../schemas/editProject.schema";

type Props = {
  open: boolean;
  onClose: () => void;
  project: Project;
  onUpdate: (data: ProjectFormBase) => void;
};

export default function EditProjectModal({
  open,
  onClose,
  project,
  onUpdate,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProjectFormBase>({
    resolver: zodResolver(editProjectSchema),
  });

  useEffect(() => {
    if (open) {
      reset({
        title: project.title,
        description: project.description,
        budget: project.budget,
        dueDate: project.dueDate?.slice(0, 10),
        priority: project.priority,
        status: project.status,
        tags: project.tags.map((t) => t.label).join(", "),
      });
    }
  }, [project, open, reset]);

  if (!open) return null;

  const onSubmit = (data: ProjectFormBase) => {
    onUpdate(data);
    onClose();
  };

  return (
    <ModalOverlay open={open} onClose={onClose}>
      {/* Modal Content */}
      <div className="relative space-y-5 bg-white shadow-lg p-6 rounded-2xl w-full max-w-lg">
        {/* Header */}
        <div>
          <h2 className="font-semibold text-lg">Edit Project</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <ProjectFormFields register={register} errors={errors} />

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>

            <Button type="submit" loading={isSubmitting}>
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </ModalOverlay>
  );
}
