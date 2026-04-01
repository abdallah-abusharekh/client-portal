import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Task, TaskFormBase } from "../types/task.types";

type EditTaskParams = {
  taskId: string;
  data: TaskFormBase;
};

export function useEditTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ taskId, data }: EditTaskParams) => {
      return { taskId, data };
    },

    onMutate: async ({ taskId, data }) => {
      await queryClient.cancelQueries({ queryKey: ["tasks"] });

      const previousTasks = queryClient.getQueryData<Task[]>(["tasks"]) || [];

      queryClient.setQueryData<Task[]>(["tasks"], (old = []) =>
        old.map((task) =>
          task.id === taskId
            ? {
                ...task,
                ...data,
              }
            : task,
        ),
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
