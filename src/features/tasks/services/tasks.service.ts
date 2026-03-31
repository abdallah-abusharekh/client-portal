import { tasksApi } from "../api/tasks.api";
import { Task, TaskStatus } from "../types/task.types";

export const tasksService = {
  async getTasks(): Promise<Task[]> {
    const data = await tasksApi.getTasks();
    return data;
  },

  async updateTaskStatus(taskId: string, status: TaskStatus): Promise<void> {
    await tasksApi.updateTaskStatus(taskId, status);
  },
};

export function getNextOrder(tasks: Task[], status: Task["status"]) {
  const columnTasks = tasks.filter((t) => t.status === status);

  if (columnTasks.length === 0) return 0;

  const maxOrder = Math.max(...columnTasks.map((t) => t.order));

  return maxOrder + 1;
}

export function reindexColumn(tasks: Task[]): Task[] {
  return tasks.map((task, index) => ({
    ...task,
    order: index,
  }));
}

export function moveTaskBetweenColumns(
  tasks: Task[],
  taskId: string,
  newStatus: TaskStatus,
  overId?: string,
): Task[] {
  const task = tasks.find((t) => t.id === taskId);
  if (!task) return tasks;

  // Source column
  const sourceTasks = tasks.filter((t) => t.status === task.status);

  // Target column
  const targetTasks = tasks.filter((t) => t.status === newStatus);

  //  1. Remove from source and reindex
  const updatedSource = reindexColumn(
    sourceTasks.filter((t) => t.id !== taskId),
  );

  //  2. Prepare moved task
  const movedTask: Task = {
    ...task,
    status: newStatus,
  };

  //  3. Insert into target
  let updatedTarget = [...targetTasks];

  if (overId) {
    const overIndex = targetTasks.findIndex((t) => t.id === overId);

    if (overIndex !== -1) {
      updatedTarget.splice(overIndex, 0, movedTask);
    } else {
      updatedTarget.push(movedTask);
    }
  } else {
    // dropped in empty space
    updatedTarget.push(movedTask);
  }

  //  4. Reindex target column
  updatedTarget = reindexColumn(updatedTarget);

  //  5. Merge everything back
  return [
    ...tasks.filter((t) => t.status !== task.status && t.status !== newStatus),
    ...updatedSource,
    ...updatedTarget,
  ];
}

export function insertTaskAtTop(tasks: Task[], newTask: Task): Task[] {
  const columnTasks = tasks.filter((t) => t.status === newTask.status);

  const otherTasks = tasks.filter((t) => t.status !== newTask.status);

  // shift all existing tasks down
  const shifted = columnTasks.map((t) => ({
    ...t,
    order: t.order + 1,
  }));

  //  new task at top
  newTask.order = 0;

  return [...otherTasks, newTask, ...shifted];
}
