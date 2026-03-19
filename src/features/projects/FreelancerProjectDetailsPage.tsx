"use client";

import ProjectActivity from "./components/projectDetails/ProjectActivity";

import ProjectHeader from "./components/projectDetails/ProjectHeader";
import { useProjectDetails } from "./hooks/useProjectDetails";
import ProjectMembers from "./components/projectDetails/ProjectMembers";
import ProjectTasks from "./components/projectDetails/ProjectTasks";

type Props = {
  projectId: string;
};

export default function FreelancerProjectDetailsPage({ projectId }: Props) {
  const { project, isLoading, error } = useProjectDetails(projectId);

  if (isLoading) return <div>Loading...</div>;
  if (error || !project) return <div>Error loading project</div>;

  return (
    <div className="space-y-6">
      <ProjectHeader project={project} />

      <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProjectTasks tasks={project.tasks} />
        </div>

        <div className="space-y-6">
          <ProjectMembers members={project.members} />
          <ProjectActivity activities={project.activities} />
        </div>
      </div>
    </div>
  );
}
