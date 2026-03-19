import { EditProjectData } from "../schemas/editProject.schema";
import { ProjectDetails } from "../types/project.types";

export function mapEditProjectToProjectDetails(
  project: ProjectDetails,
  data: EditProjectData,
): ProjectDetails {
  return {
    ...project,

    title: data.title,
    description: data.description || "",

    status: data.status,
    priority: data.priority,

    budget: data.budget ?? project.budget,
    dueDate: data.dueDate ?? project.dueDate,

    tags:
      data.tags
        ?.split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
        .map((tag) => ({
          label: tag,
          type: "category",
        })) || [],

    updatedAt: new Date().toISOString(),

    tasks: project.tasks,
    activities: project.activities,
    files: project.files,
  };
}
