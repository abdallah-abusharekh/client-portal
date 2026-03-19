import ActionLink from "@/src/shared/components/ActionLink";

import ProjectCard from "../../projects/components/projectCard/ProjectCard";
import FreelancersWidget from "./FreelancersWidget";
import { projectsMock } from "../../projects/mocks/projects.mock";

export default function CustomerProjectsSection() {
  return (
    <div className="gap-5 grid grid-cols-1 lg:grid-cols-3">
      <div className="space-y-4 lg:col-span-2">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">Active Projects</h2>

          <ActionLink href="/customer/projects">View All</ActionLink>
        </div>

        <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
          {projectsMock.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <FreelancersWidget />
    </div>
  );
}
