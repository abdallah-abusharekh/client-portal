import { Project, ViewMode } from "../types/project.types";
import ProjectCard from "./project/ProjectCard";

type Props = {
  projects: Project[];
  view: ViewMode;
};
export default function ProjectsGrid({ projects, view }: Props) {
  return (
    <div
      className={`gap-6 ${
        view === "grid" ? "grid md:grid-cols-2 xl:grid-cols-3" : "flex flex-col"
      }`}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
