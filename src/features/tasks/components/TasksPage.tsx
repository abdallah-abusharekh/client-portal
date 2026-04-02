"use client";

import TasksBoard from "./board/TasksBoard";
import TasksHeader from "./TasksHeader";
import TasksToolbar from "./TasksToolbar";
import CreateTaskModal from "./modals/CreateTaskModal";
import ErrorState from "@/src/shared/components/ErrorState";
import EmptyState from "@/src/shared/components/EmptyState";
import TasksSkeleton from "./board/TasksSkeleton";
import EditTaskModal from "./modals/EditTaskModal";
import { useTasksPageController } from "../hooks/useTasksPageController";
import { useTasksBoardController } from "../hooks/useTasksBoardController";
import ConfirmModal from "@/src/shared/components/ConfirmModal";

export default function TasksPage() {
  const controller = useTasksPageController();
  const board = useTasksBoardController();

  return (
    <div className="space-y-6">
      <TasksHeader onCreate={controller.modal.openModal} />

      <CreateTaskModal
        open={controller.modal.open}
        onClose={controller.modal.closeModal}
        onCreate={controller.handleCreateTask}
        defaultStatus={controller.modal.defaultStatus}
      />

      <TasksToolbar
        search={controller.filters.search}
        priority={controller.filters.priority}
        onSearchChange={controller.setSearch}
        onPriorityChange={controller.setPriority}
      />

      {controller.isLoading && <TasksSkeleton />}

      {!controller.isLoading && controller.isError && (
        <ErrorState
          title="Failed to load tasks"
          message="Please try again."
          onRetry={controller.refetch}
        />
      )}

      {!controller.isLoading &&
        !controller.isError &&
        controller.tasks.length === 0 && (
          <EmptyState
            title="No tasks yet"
            message="Start by creating your first task."
            actionLabel="Create Task"
            onAction={controller.modal.openModal}
          />
        )}

      {!controller.isLoading &&
        !controller.isError &&
        controller.tasks.length > 0 && (
          <TasksBoard
            tasks={controller.filteredTasks}
            columns={board.columns}
            onAddTask={controller.modal.openWithStatus}
            openEditModal={controller.editModal.openModal}
            onDeleteColumn={board.handleDeleteColumn}
            onAddColumn={board.handleAddColumn}
          />
        )}

      <ConfirmModal
        open={board.deleteModal.open}
        onClose={board.deleteModal.closeModal}
        onConfirm={board.confirmDeleteColumn}
        title="Delete Column"
        description="Are you sure you want to delete this column?"
        confirmText="Delete"
        variant="danger"
      />

      <EditTaskModal
        open={controller.editModal.open}
        onClose={controller.editModal.closeModal}
        task={controller.editModal.task}
        onUpdate={controller.handleUpdateTask}
      />
    </div>
  );
}
