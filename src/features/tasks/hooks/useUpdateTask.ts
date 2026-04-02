import { useMutation, useQueryClient } from "@tanstack/react-query";
import { tasksService } from "../services/tasks.service";
import { Task, TaskStatus } from "../types/task.types";

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId, status }: { taskId: string; status: TaskStatus }) =>
      tasksService.updateTaskStatus(taskId, status),

    onMutate: async ({ taskId, status }) => {
      await queryClient.cancelQueries({ queryKey: ["tasks"] });

      const previousTasks = queryClient.getQueryData<Task[]>(["tasks"]);

      queryClient.setQueryData<Task[]>(["tasks"], (old = []) =>
        old.map((task) => (task.id === taskId ? { ...task, status } : task)),
      );

      return { previousTasks };
    },

    onError: (_, __, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(["tasks"], context.previousTasks);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
