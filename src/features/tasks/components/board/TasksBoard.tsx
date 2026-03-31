import TasksColumn from "./TasksColumn";
import TasksSkeleton from "./TasksSkeleton";
import ErrorState from "@/src/shared/components/ErrorState";
import { TASK_COLUMNS } from "../../constants/task-status";
import EmptyState from "@/src/shared/components/EmptyState";
import { Task } from "../../types/task.types";

type Props = {
  tasks: Task[];
  isLoading?: boolean;
  isError?: boolean;
};

export default function TasksBoard({ tasks, isLoading, isError }: Props) {
  if (isLoading) return <TasksSkeleton />;
  if (isError) return <ErrorState />;
  if (!tasks?.length)
    return (
      <EmptyState
        title="No tasks yet"
        message="Start by creating your first task to organize your work."
        actionLabel="Create Task"
        // onAction={onCreateTask}
      />
    );

  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {TASK_COLUMNS.map((col) => (
        <TasksColumn
          key={col.key}
          status={col.key}
          title={col.title}
          tasks={tasks.filter((t) => t.status === col.key)}
        />
      ))}
    </div>
  );
}
