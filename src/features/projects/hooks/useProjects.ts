// src/features/projects/hooks/useProjects.ts

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { projectsMock } from "../mocks/projects.mock";
import { createProjectService } from "../services/projects.service";
import { Project, ProjectFormBase } from "../types/project.types";

export const projectKeys = {
  all: ["projects"] as const,
};

export function useProjects() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: projectKeys.all,
    queryFn: async (): Promise<Project[]> => {
      await new Promise((res) => setTimeout(res, 400));
      return projectsMock;
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: ProjectFormBase) => createProjectService(data),
    onSuccess: (newProject: Project) => {
      queryClient.setQueryData<Project[]>(projectKeys.all, (prev = []) => [
        newProject,
        ...prev,
      ]);
    },
  });

  return {
    projects: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,

    createProject: createMutation.mutate,
    isCreating: createMutation.isPending,
  };
}
