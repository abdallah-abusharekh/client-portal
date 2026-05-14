import ActionLink from "@/src/shared/components/ActionLink";

import ProjectCard from "../../projects/components/projectCard/ProjectCard";
import type { Project } from "../../projects/types/project.types";

type Props = {
  projects: Project[];
};

export default function CustomerProjectsSection({ projects }: Props) {
  return (
    <div className="space-y-4 lg:col-span-2 mb-6">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Active Projects</h2>

        <ActionLink href="/projects">View All</ActionLink>
      </div>

      <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
