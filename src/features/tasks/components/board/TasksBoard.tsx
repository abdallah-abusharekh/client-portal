import TasksColumn from "./TasksColumn";
import { TASK_COLUMNS } from "../../constants/task-status";
import { Task, TaskStatus } from "../../types/task.types";

type Props = {
  tasks: Task[];
  onAddTask: (status: TaskStatus) => void;
};

export default function TasksBoard({ tasks, onAddTask }: Props) {
  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {TASK_COLUMNS.map((col) => (
        <TasksColumn
          key={col.key}
          status={col.key}
          title={col.title}
          tasks={tasks.filter((t) => t.status === col.key)}
          onAddTask={onAddTask}
        />
      ))}
    </div>
  );
}
