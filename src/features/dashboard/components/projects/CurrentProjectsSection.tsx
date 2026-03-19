import ActionLink from "@/src/shared/components/ActionLink";

import ProjectCard from "../../../projects/components/projectCard/ProjectCard";
import { projectsMock } from "@/src/features/projects/mocks/projects.mock";

export default function CurrentProjectsSection() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Current Projects</h2>

        <ActionLink href="/freelancer/projects">View All</ActionLink>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        {projectsMock.slice(0, 2).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
