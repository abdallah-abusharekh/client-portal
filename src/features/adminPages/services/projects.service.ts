import { projects } from "../../adminTables/mocks/projects.mock";
import { Project, ProjectStatus } from "../../projects/types/project.types";
import { delay } from "./delay";

let projectsDB: Project[] = [...projects];

export const projectsService = {
  async getProjects(): Promise<Project[]> {
    await delay(1000);
    return projectsDB;
  },

  async updateProjectsStatus(
    ids: string[],
    status: ProjectStatus,
  ): Promise<Project[]> {
    await delay(1000);

    projectsDB = projectsDB.map((project) =>
      ids.includes(project.id) ? { ...project, status } : project,
    );

    return projectsDB;
  },

  async deleteProjects(ids: string[]): Promise<Project[]> {
    await delay(1000);
    projectsDB = projectsDB.filter((project) => !ids.includes(project.id));
    return projectsDB;
  },
};
