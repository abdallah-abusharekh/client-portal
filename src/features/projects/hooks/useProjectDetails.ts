import { useEffect, useState } from "react";
import { ProjectDetails } from "../types/project.types";
import { getProjectDetails } from "../services/projects.service";

interface UseProjectDetailsResult {
  project: ProjectDetails | null;
  isLoading: boolean;
  error: string | null;
}

export function useProjectDetails(projectId: string): UseProjectDetailsResult {
  const [project, setProject] = useState<ProjectDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!projectId) return;

    async function fetchProject() {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getProjectDetails(projectId);

        setProject(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load project details");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProject();
  }, [projectId]);

  return {
    project,
    isLoading,
    error,
  };
}
