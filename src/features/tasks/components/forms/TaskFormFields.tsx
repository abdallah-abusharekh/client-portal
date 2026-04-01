"use client";

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TaskFormBase } from "../../types/task.types";

type Props = {
  register: UseFormRegister<TaskFormBase>;
  errors: FieldErrors<TaskFormBase>;
  hideStatus?: boolean;
  hideDueDate?: boolean;
};

export default function TaskFormFields({
  register,
  errors,
  hideStatus,
  hideDueDate,
}: Props) {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <label className="block font-medium text-gray-700 text-sm">
          Task Title
        </label>
        <input
          {...register("title")}
          placeholder="e.g. Implement authentication flow"
          className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition"
        />
        {errors.title && (
          <p className="mt-1 text-red-500 text-xs">
            {String(errors.title.message)}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block font-medium text-gray-700 text-sm">
          Description
        </label>
        <textarea
          {...register("description")}
          placeholder="Short description about the task..."
          rows={3}
          className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition resize-none"
        />
        {errors.description && (
          <p className="mt-1 text-red-500 text-xs">
            {String(errors.description.message)}
          </p>
        )}
      </div>

      {/* Due Date + Priority */}
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
        {/* Due Date */}
        {!hideDueDate && (
          <div>
            <label className="block font-medium text-gray-700 text-sm">
              Due Date
            </label>
            <input
              type="date"
              {...register("dueDate")}
              className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition"
            />
            {errors.dueDate && (
              <p className="mt-1 text-red-500 text-xs">
                {String(errors.dueDate.message)}
              </p>
            )}
          </div>
        )}

        {/* Priority */}
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Priority
          </label>
          <select
            {...register("priority")}
            className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority && (
            <p className="mt-1 text-red-500 text-xs">
              {String(errors.priority.message)}
            </p>
          )}
        </div>
      </div>

      {/* Status */}
      {!hideStatus && (
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Status
          </label>
          <select
            {...register("status")}
            className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition"
          >
            <option value="TODO">To Do</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="REVIEW">Review</option>
            <option value="COMPLETED">Completed</option>
          </select>
          {errors.status && (
            <p className="mt-1 text-red-500 text-xs">
              {String(errors.status.message)}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
