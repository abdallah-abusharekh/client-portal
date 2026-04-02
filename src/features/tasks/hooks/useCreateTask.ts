import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Task, TaskFormBase } from "../types/task.types";
import { insertTaskAtTop } from "../services/tasks.service";

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: TaskFormBase) => {
      return {
        id: crypto.randomUUID(),
        ...data,
      };
    },

    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ["tasks"] });

      const previousTasks = queryClient.getQueryData<Task[]>(["tasks"]) || [];

      const newTask: Task = {
        id: crypto.randomUUID(),
        ...data,
        order: 0,
      };

      const updatedTasks = insertTaskAtTop(previousTasks, newTask);

      queryClient.setQueryData<Task[]>(["tasks"], updatedTasks);

      return { previousTasks };
    },

    onError: (_err, _data, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(["tasks"], context.previousTasks);
      }
    },
  });
}
