// src/features/tasks/components/modals/CreateTaskModal.tsx

"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/src/shared/components/Button";

import { createTaskSchema } from "../../schemas/createTask.schema";
import { TaskFormBase, TaskStatus } from "../../types/task.types";
import TaskFormFields from "../forms/TaskFormFields";

type Props = {
  open: boolean;
  onClose: () => void;
  onCreate: (data: TaskFormBase) => void;
  defaultStatus: TaskStatus;
};

export default function CreateTaskModal({
  open,
  onClose,
  onCreate,
  defaultStatus,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormBase>({
    resolver: zodResolver(createTaskSchema),
  });

  useEffect(() => {
    if (open) {
      reset({
        title: "",
        description: "",
        status: defaultStatus,
        priority: "medium",
        dueDate: new Date().toISOString().split("T")[0],
      });
    }
  }, [open, reset, defaultStatus]);

  if (!open) return null;

  const onSubmit = (data: TaskFormBase) => {
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

      {/* Modal */}
      <div className="relative space-y-5 bg-white shadow-lg p-6 rounded-2xl w-full max-w-lg">
        {/* Header */}
        <div>
          <h2 className="font-semibold text-lg">Create New Task</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <TaskFormFields register={register} errors={errors} />

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>

            <Button type="submit" loading={isSubmitting}>
              Create Task
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
