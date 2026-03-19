import { mapCreateProjectToProject } from "../mappers/mapCreateProjectToProject";
import { projectsMock } from "../mocks/projects.mock";
import { CreateProjectData } from "../schemas/createProject.schema";
import { Project, ProjectDetails } from "../types/project.types";

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

export async function getProjectDetails(
  projectId: string,
): Promise<ProjectDetails> {
  // await new Promise((res) => setTimeout(res, 400));

  const baseProject = projectsMock.find((p) => p.id === projectId);

  if (!baseProject) {
    throw new Error("Project not found");
  }

  const projectDetails: ProjectDetails = {
    ...baseProject,

    tasks: [
      {
        id: "1",
        title: "Design homepage mockups",
        description: "Create initial homepage design concepts",
        status: "in-progress",
        priority: "high",
        dueDate: "2024-06-15",
      },
      {
        id: "2",
        title: "Develop product listing page",
        description: "Implement product grid with filters",
        status: "todo",
        priority: "high",
        dueDate: "2024-07-10",
      },
    ],

    activities: [
      {
        id: "1",
        user: baseProject.members[0],
        action: "updated project status",
        date: "2024-07-08",
      },
      {
        id: "2",
        user: baseProject.members[1],
        action: "completed task",
        target: "Design homepage mockups",
        date: "2024-07-08",
      },
    ],

    files: [],
  };

  return projectDetails;
}
