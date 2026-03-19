"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ProjectFormFields from "../project-form/ProjectFormFields";
import Button from "@/src/shared/components/Button";

import { createProjectSchema } from "../../../schemas/createProject.schema";
import { ProjectFormBase } from "../../../types/project.types";

type Props = {
  open: boolean;
  onClose: () => void;
  onCreate: (data: ProjectFormBase) => void;
};

export default function CreateProjectModal({ open, onClose, onCreate }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProjectFormBase>({
    resolver: zodResolver(createProjectSchema),
  });

  useEffect(() => {
    if (open) {
      reset({
        title: "",
        description: "",
        budget: undefined,
        dueDate: "",
        priority: "medium",
        status: "in-progress",
        tags: "",
      });
    }
  }, [open, reset]);

  if (!open) return null;

  const onSubmit = (data: ProjectFormBase) => {
    onCreate(data);
    reset();
    onClose();
  };

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs h-dvh"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative space-y-5 bg-white shadow-lg p-6 rounded-2xl w-full max-w-lg">
        {/* Header */}
        <div>
          <h2 className="font-semibold text-lg">Create New Project</h2>
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
              Create Project
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
