"use client";

import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ProjectFormBase } from "../../types/project.types";

type Props = {
  register: UseFormRegister<ProjectFormBase>;
  errors: FieldErrors<ProjectFormBase>;
};

export default function ProjectFormFields({ register, errors }: Props) {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <label className="block font-medium text-gray-700 text-sm">
          Project Title
        </label>
        <input
          {...register("title")}
          placeholder="e.g. E-commerce Dashboard"
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
          placeholder="Short description about the project..."
          rows={3}
          className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition resize-none"
        />
        {errors.description && (
          <p className="mt-1 text-red-500 text-xs">
            {String(errors.description.message)}
          </p>
        )}
      </div>

      {/* Budget + Due Date */}
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
        {/* Budget */}
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Budget
          </label>
          <input
            type="number"
            {...register("budget", { valueAsNumber: true })}
            placeholder="5000"
            className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition"
          />
          {errors.budget && (
            <p className="mt-1 text-red-500 text-xs">
              {String(errors.budget.message)}
            </p>
          )}
        </div>

        {/* Due Date */}
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
      </div>

      {/* Priority + Status */}
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
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

        {/* Status */}
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Status
          </label>
          <select
            {...register("status")}
            className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition"
          >
            <option value="in-progress">In Progress</option>
            <option value="review">Review</option>
            <option value="completed">Completed</option>
            <option value="paused">Paused</option>
          </select>
          {errors.status && (
            <p className="mt-1 text-red-500 text-xs">
              {String(errors.status.message)}
            </p>
          )}
        </div>
      </div>

      {/* Tags */}
      <div>
        <label className="block font-medium text-gray-700 text-sm">Tags</label>
        <input
          {...register("tags")}
          placeholder="react, dashboard, api"
          className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition"
        />
        {errors.tags && (
          <p className="mt-1 text-red-500 text-xs">
            {String(errors.tags.message)}
          </p>
        )}
      </div>
    </div>
  );
}
