import { FiCalendar } from "react-icons/fi";
import Image from "next/image";
import { Project } from "../../types/dashboard.types";
import Card from "@/src/shared/components/Card";
import ProjectProgress from "./ProjectProgress";
import ProjectBudget from "./ProjectBudget";
import ProjectTags from "./ProjectTags";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Card className="space-y-4">
      <div>
        <h3 className="font-semibold text-lg">{project.title}</h3>

        <p className="text-gray-500 text-sm">{project.description}</p>
      </div>

      <ProjectTags project={project} />

      <ProjectProgress progress={project.progress} />

      <ProjectBudget budget={project.budget} spent={project.spent} />

      <div className="flex justify-between items-center">
        <Image
          src={project.clientAvatar}
          alt={project.title}
          className="rounded-full w-8 h-8"
          width={8}
          height={8}
        />

        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <FiCalendar />
          <span>Due {project.dueDate}</span>
        </div>
      </div>
    </Card>
  );
}
