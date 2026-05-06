"use client";

import ErrorState from "@/src/shared/components/ErrorState";
import ProjectActivity from "./projectDetails/ProjectActivity";
import ProjectHeader from "./projectDetails/ProjectHeader";
import ProjectMembers from "./projectDetails/ProjectMembers";
import ProjectWorkspace from "./projectDetails/ProjectWorkspace";
import ProjectDetailsSkeleton from "./skeletons/ProjectDetailsSkeleton";
import { useProjectDetails } from "../hooks/useProjectDetails";

type Props = {
  projectId: string;
};

export default function FreelancerProjectDetailsPage({ projectId }: Props) {
  const { project, isLoading, error } = useProjectDetails(projectId);

  if (isLoading) return <ProjectDetailsSkeleton />;
  if (error || !project) {
    return (
      <ErrorState
        title="Failed to load project"
        message="We couldn't load the project details."
      />
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <ProjectHeader project={project} />

      <div className="items-start gap-6 grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProjectWorkspace tasks={project.tasks} />
        </div>

        <div className="space-y-6">
          <ProjectMembers members={project.members} />
          <ProjectActivity activities={project.activities} />
        </div>
      </div>
    </div>
  );
}
