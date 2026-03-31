import { useQuery } from "@tanstack/react-query";
import { tasksService } from "../services/tasks.service";
import { Task } from "../types/task.types";

export function useTasks() {
  return useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: tasksService.getTasks,
    staleTime: 1000 * 60 * 2,
  });
}
