import { tasksDB } from "../mocks/tasks.mock";
import { Task, TaskStatus } from "../types/task.types";

function simulateDelay<T>(data: T, delay = 500): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error("Network error"));
      } else {
        resolve(data);
      }
    }, delay);
  });
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

    return simulateDelay(undefined);
  },
};
