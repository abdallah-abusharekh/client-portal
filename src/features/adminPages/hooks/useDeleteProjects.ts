import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { projectsService } from "../services/projects.service";
import { projectsQueryKey } from "./useProjectsQuery";

export const useDeleteProjects = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ ids }: { ids: string[] }) =>
      projectsService.deleteProjects(ids),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: projectsQueryKey,
      });

      toast.success(
        `${variables.ids.length} project${variables.ids.length > 1 ? "s" : ""} deleted successfully`,
      );
    },

    onError: () => {
      toast.error("Failed to delete project");
    },
  });
};
