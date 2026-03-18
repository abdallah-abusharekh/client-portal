import { Project } from "../types/project.types";
import ProjectCard from "./project/ProjectCard";

type Props = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: Props) {
  return (
    <div className="gap-6 grid md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
