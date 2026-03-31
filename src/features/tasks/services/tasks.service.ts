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
