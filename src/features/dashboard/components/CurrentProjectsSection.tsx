import ActionLink from "@/src/shared/components/ActionLink";
import ProjectCard from "../../projects/components/projectCard/ProjectCard";
import type { Project } from "../../projects/types/project.types";

type Props = {
  projects: Project[];
};

export default function CurrentProjectsSection({ projects }: Props) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Current Projects</h2>

        <ActionLink href="/projects">View All</ActionLink>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
