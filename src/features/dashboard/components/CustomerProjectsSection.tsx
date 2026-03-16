import ActionLink from "@/src/shared/components/ActionLink";
import { projects } from "../mocks/dashboard.mock";
import ProjectCard from "./projects/ProjectCard";
import FreelancersWidget from "./FreelancersWidget";

export default function CustomerProjectsSection() {
  return (
    <div className="gap-5 grid grid-cols-1 lg:grid-cols-3">
      <div className="space-y-4 lg:col-span-2">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">Active Projects</h2>

          <ActionLink href="/customer/projects">View All</ActionLink>
        </div>

        <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <FreelancersWidget />
    </div>
  );
}
