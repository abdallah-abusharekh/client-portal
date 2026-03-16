import ActionLink from "@/src/shared/components/ActionLink";
import { projects } from "../../mocks/dashboard.mock";
import ProjectCard from "./ProjectCard";

export default function CurrentProjectsSection() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Current Projects</h2>

        <ActionLink href="/freelancer/projects">View All</ActionLink>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
