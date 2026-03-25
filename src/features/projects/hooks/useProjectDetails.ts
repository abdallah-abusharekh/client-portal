import { useQuery } from "@tanstack/react-query";
import { getProjectDetails } from "../services/projects.service";
import { ProjectDetails } from "../types/project.types";
import { projectKeys } from "./projectKeys";

interface UseProjectDetailsResult {
  project: ProjectDetails | undefined;
  isLoading: boolean;
  error: string | null;
}

export function useProjectDetails(projectId: string): UseProjectDetailsResult {
  const query = useQuery({
    queryKey: projectKeys.details(projectId),
    queryFn: () => getProjectDetails(projectId),
    enabled: !!projectId,

    staleTime: 1000 * 60 * 5,
  });

  return {
    project: query.data,
    isLoading: query.isLoading,
    error: query.error ? "Failed to load project details" : null,
  };
}
