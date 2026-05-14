import { useQuery } from "@tanstack/react-query";
import { projectsService } from "../services/projects.service";

export const projectsQueryKey = ["admin", "projects"] as const;

export const useProjectsQuery = () => {
  return useQuery({
    queryKey: projectsQueryKey,
    queryFn: projectsService.getProjects,
  });
};
