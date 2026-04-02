import { useQuery } from "@tanstack/react-query";
import { tasksService } from "../services/tasks.service";
import { Task } from "../types/task.types";

export function useTasks() {
  const { data, isLoading, isError, refetch } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: tasksService.getTasks,
    staleTime: 1000 * 60 * 2,
  });

  return {
    tasks: data ?? [],
    isLoading,
    isError,
    refetch,
  };
}
