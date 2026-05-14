import { tasksDB } from "../mocks/tasks.mock";
import { Task, TaskStatus } from "../types/task.types";

import { delay } from "../../../shared/utils/delay";

async function simulateDelay<T>(data: T, ms = 500): Promise<T> {
  await delay(ms);

  if (Math.random() < 0.1) {
    throw new Error("Network error");
  }

  return data;
}

export const tasksApi = {
  async getTasks(): Promise<Task[]> {
    return simulateDelay([...tasksDB]);
  },

  async updateTaskStatus(taskId: string, status: TaskStatus): Promise<void> {
    const index = tasksDB.findIndex((t) => t.id === taskId);

    if (index !== -1) {
      tasksDB[index].status = status;
    }

    if (Math.random() < 0.1) {
      throw new Error("Network error");
    }
  },
};
