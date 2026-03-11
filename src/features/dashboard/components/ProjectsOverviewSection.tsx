import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { Project } from "../types/dashboard.types";

type Props = {
  title?: string;
  href?: string;
  projects: Project[];
  children?: React.ReactNode;
};

export default function ProjectsOverviewSection({
  title = "Active Projects",
  href = "/projects",
  projects,
  children,
}: Props) {
  return (
    <div className="space-y-6 lg:col-span-2">
      <SectionHeader title={title} href={href} />

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          ownerLabel={project.ownerLabel}
          ownerName={project.ownerName}
          progress={project.progress}
          completedTasks={project.completedTasks}
          totalTasks={project.totalTasks}
          dueDate={project.dueDate}
          status={project.status}
        />
      ))}

      {children}
    </div>
  );
}
