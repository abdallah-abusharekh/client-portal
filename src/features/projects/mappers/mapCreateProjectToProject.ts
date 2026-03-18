import { Project } from "../types/project.types";
import { CreateProjectData } from "../schemas/createProject.schema";

export function mapCreateProjectToProject(data: CreateProjectData): Project {
  return {
    id: crypto.randomUUID(),

    title: data.title,
    description: data.description || "",

    status: "in-progress",
    priority: data.priority,

    progress: 0,

    budget: data.budget,
    spent: 0,

    dueDate: data.dueDate || new Date().toISOString(),

    client: {
      id: "c1",
      name: "New Client",
      avatar: "https://i.pravatar.cc/150?img=1",
    },

    members: [],

    tags:
      data.tags
        ?.split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
        .map((tag) => ({
          label: tag,
          type: "category",
        })) || [],

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}
