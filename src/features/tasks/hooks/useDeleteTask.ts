import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Task } from "../types/task.types";

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (taskId: string) => {
      return taskId;
    },

    onMutate: async (taskId) => {
      await queryClient.cancelQueries({ queryKey: ["tasks"] });

      const previousTasks = queryClient.getQueryData<Task[]>(["tasks"]) || [];

      queryClient.setQueryData<Task[]>(["tasks"], (old = []) =>
        old.filter((task) => task.id !== taskId),
      );

      return { previousTasks };
    },

    onError: (_err, _vars, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(["tasks"], context.previousTasks);
      }
    },
  });
}
