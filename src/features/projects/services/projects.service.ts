import { mapCreateProjectToProject } from "../mappers/mapCreateProjectToProject";
import { CreateProjectData } from "../schemas/createProject.schema";
import { Project } from "../types/project.types";

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function formatLabel(value: string) {
  return value.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getProgressColor(progress: number) {
  if (progress < 40) return "bg-red-500";
  if (progress < 80) return "bg-yellow-500";
  return "bg-(--color-primary)";
}

export function formatCurrency(value: number) {
  return `$${value.toLocaleString()}`;
}

export async function createProjectService(
  data: CreateProjectData,
): Promise<Project> {
  await new Promise((res) => setTimeout(res, 300));

  const project = mapCreateProjectToProject(data);

  return project;
}
