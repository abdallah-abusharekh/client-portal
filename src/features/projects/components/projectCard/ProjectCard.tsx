"use client";

import { FiCalendar } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

import Card from "@/src/shared/components/Card";
import ProjectProgress from "./ProjectProgress";
import ProjectBudget from "./ProjectBudget";
import ProjectTags from "./ProjectTags";
import { Project } from "../../types/project.types";
import { formatDate } from "../../utils/project.utils";
import { useAuth } from "@/src/features/auth/contexts/AuthContext";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const { role } = useAuth();

  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="flex flex-col hover:shadow-md p-5 h-full transition hover:-translate-y-0.5 cursor-pointer">
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="font-semibold text-lg">{project.title}</h3>

            <p className="text-gray-500 text-sm line-clamp-2">
              {project.description}
            </p>
          </div>

          <ProjectTags project={project} />
          <ProjectProgress progress={project.progress} />

          {role === "freelancer" && (
            <ProjectBudget budget={project.budget} spent={project.spent} />
          )}
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex -space-x-2">
            {(project.members ?? []).map((member) => (
              <Image
                key={member.id}
                src={member.avatar}
                alt={member.name}
                width={32}
                height={32}
                className="border-2 border-white rounded-full"
              />
            ))}
          </div>

          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <FiCalendar />
            <span>Due {formatDate(project.dueDate)}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
