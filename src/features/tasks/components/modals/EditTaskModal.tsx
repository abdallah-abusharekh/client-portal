"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Button from "@/src/shared/components/Button";
import TaskFormFields from "../forms/TaskFormFields";
import { Task, TaskFormBase } from "../../types/task.types";

type Props = {
  open: boolean;
  onClose: () => void;
  task: Task | null;
  onUpdate: (data: TaskFormBase) => void;
};

export default function EditTaskModal({
  open,
  onClose,
  task,
  onUpdate,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormBase>();

  useEffect(() => {
    if (task && open) {
      reset({
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
        dueDate: task.dueDate,
      });
    }
  }, [task, open, reset]);

  if (!open || !task) return null;

  function onSubmit(data: TaskFormBase) {
    onUpdate(data);
    onClose();
  }

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs"
        onClick={onClose}
      />

      <div className="relative space-y-5 bg-white shadow-lg p-6 rounded-2xl w-full max-w-lg">
        <h2 className="font-semibold text-lg">Edit Task</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <TaskFormFields
            register={register}
            errors={errors}
            hideStatus
            hideDueDate
          />

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
    </div>
  );
}
