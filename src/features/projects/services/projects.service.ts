import { mapCreateProjectToProject } from "../mappers/createProject.mapper";
import { mapEditProjectToProjectDetails } from "../mappers/editProject.mapper";
import { mockFiles, mockMessages, projectsMock } from "../mocks/projects.mock";
import { EditProjectData } from "../schemas/editProject.schema";
import {
  Message,
  Project,
  ProjectDetails,
  ProjectFile,
  ProjectFormBase,
} from "../types/project.types";

export async function createProjectService(
  data: ProjectFormBase,
): Promise<Project> {
  await new Promise((res) => setTimeout(res, 300));

  return mapCreateProjectToProject(data);
}

export async function updateProjectService(
  projectId: string,
  data: EditProjectData,
): Promise<ProjectDetails> {
  await new Promise((res) => setTimeout(res, 300));

  const existingProject = await getProjectDetails(projectId);

  return mapEditProjectToProjectDetails(existingProject, data);
}

export async function getProjectDetails(
  projectId: string,
): Promise<ProjectDetails> {
  await new Promise((res) => setTimeout(res, 400));

  const baseProject = projectsMock.find((p) => p.id === projectId);

  if (!baseProject) {
    throw new Error("Project not found");
  }

  return {
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
        userName: baseProject.members[0].name,
        action: "updated project status",
        date: "2024-07-08",
        avatar: baseProject.members[0].avatar,
      },
      {
        id: "2",
        userName: baseProject.members[1].name,
        action: "completed task",
        target: "Design homepage mockups",
        date: "2024-07-08",
        avatar: baseProject.members[1].avatar,
      },
    ],

    files: [],
  };
}

let files: ProjectFile[] = [...mockFiles];

export async function getProjectFiles(): Promise<ProjectFile[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(files), 300);
  });
}

export async function uploadFile(file: File): Promise<ProjectFile> {
  return new Promise((resolve) => {
    const newFile: ProjectFile = {
      id: Date.now().toString(),
      name: file.name,
      size: file.size,
      uploadedAt: new Date().toISOString(),
      url: URL.createObjectURL(file),
    };

    files = [newFile, ...files];

    setTimeout(() => resolve(newFile), 300);
  });
}

export async function getProjectMessages(): Promise<Message[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockMessages), 500);
  });
}
