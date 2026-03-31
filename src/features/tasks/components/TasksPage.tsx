"use client";

import TasksBoard from "./board/TasksBoard";
import TasksHeader from "./TasksHeader";
import TasksToolbar from "./TasksToolbar";
import CreateTaskModal from "./modals/CreateTaskModal";

import { useTasks } from "../hooks/useTasks";

import { useCreateTaskModal } from "../hooks/useCreateTaskModal";

import toast from "react-hot-toast";
import { TaskFormBase } from "../types/task.types";

import ErrorState from "@/src/shared/components/ErrorState";
import EmptyState from "@/src/shared/components/EmptyState";
import { useCreateTask } from "../hooks/useCreateTask";
import TasksSkeleton from "./board/TasksSkeleton";

export default function TasksPage() {
  const { tasks, isLoading, isError, refetch } = useTasks();

  const { mutate: createTask } = useCreateTask();

  const modal = useCreateTaskModal();

  function handleCreateTask(data: TaskFormBase) {
    createTask(data, {
      onSuccess: () => {
        toast.success("Task created successfully");
        modal.closeModal();
      },
      onError: () => {
        toast.error("Failed to create task");
      },
    });
  }

  return (
    <div className="space-y-6">
      <TasksHeader onCreate={modal.openModal} />

      <CreateTaskModal
        open={modal.open}
        onClose={modal.closeModal}
        onCreate={handleCreateTask}
        defaultStatus={modal.defaultStatus}
      />

      <TasksToolbar />

      {isLoading && <TasksSkeleton />}

      {!isLoading && isError && (
        <ErrorState
          title="Failed to load tasks"
          message="Please try again."
          onRetry={refetch}
        />
      )}

      {!isLoading && !isError && tasks.length === 0 && (
        <EmptyState
          title="No tasks yet"
          message="Start by creating your first task."
          actionLabel="Create Task"
          onAction={modal.openModal}
        />
      )}

      {!isLoading && !isError && tasks.length > 0 && (
        <TasksBoard tasks={tasks} onAddTask={modal.openWithStatus} />
      )}
    </div>
  );
}
