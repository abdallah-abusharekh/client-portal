import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProjectService } from "../services/projects.service";
import { ProjectDetails, ProjectFormBase } from "../types/project.types";
import { projectKeys } from "./projectKeys";

export function useUpdateProject(projectId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ProjectFormBase) =>
      updateProjectService(projectId, data),

    onSuccess: (updatedProject: ProjectDetails) => {
      queryClient.setQueryData(projectKeys.details(projectId), updatedProject);
    },
  });
}
