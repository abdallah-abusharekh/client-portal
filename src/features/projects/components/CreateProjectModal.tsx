"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/src/shared/components/Button";

import {
  createProjectSchema,
  CreateProjectFormValues,
  CreateProjectData,
} from "../schemas/createProject.schema";

type Props = {
  open: boolean;
  onClose: () => void;
  onCreate: (data: CreateProjectData) => void;
};

export default function CreateProjectModal({ open, onClose, onCreate }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateProjectFormValues>({
    resolver: zodResolver(createProjectSchema),
  });

  if (!open) return null;

  const onSubmit = (data: CreateProjectFormValues) => {
    onCreate(data as CreateProjectData);

    reset();
    onClose();
  };

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm h-dvh"
        onClick={onClose}
      />

      <div className="relative space-y-5 bg-white shadow-lg p-6 rounded-2xl w-full max-w-lg">
        {/* Header */}
        <div>
          <h2 className="font-semibold text-lg">Create New Project</h2>
          <p className="text-gray-500 text-sm">
            Fill in the details to create a new project
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <div>
            <label className="font-medium text-sm">Project Title</label>
            <input
              {...register("title")}
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm"
              placeholder="e.g. E-commerce App"
            />
            {errors.title && (
              <p className="mt-1 text-red-500 text-xs">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="font-medium text-sm">Description</label>
            <textarea
              {...register("description")}
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm"
              placeholder="Short project description"
            />
          </div>

          {/* Budget + Due Date */}
          <div className="gap-3 grid grid-cols-2">
            <div>
              <label className="font-medium text-sm">Budget</label>
              <input
                type="number"
                {...register("budget")}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm"
                placeholder="5000"
              />
              {errors.budget && (
                <p className="mt-1 text-red-500 text-xs">
                  {errors.budget.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-medium text-sm">Due Date</label>
              <input
                type="date"
                {...register("dueDate")}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm"
              />
            </div>
          </div>

          {/* Priority */}
          <div>
            <label className="font-medium text-sm">Priority</label>
            <select
              {...register("priority")}
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="font-medium text-sm">Tags</label>
            <input
              {...register("tags")}
              placeholder="react, dashboard, api"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm"
            />
          </div>

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
