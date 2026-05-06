"use client";

import ErrorState from "@/src/shared/components/ErrorState";
import ProjectHeader from "./projectDetails/ProjectHeader";
import ProjectMembers from "./projectDetails/ProjectMembers";
import ProjectWorkspace from "./projectDetails/ProjectWorkspace";
import ProjectDetailsSkeleton from "./skeletons/ProjectDetailsSkeleton";
import { useProjectDetails } from "../hooks/useProjectDetails";
import { useState } from "react";
import { Tab, TabItem } from "../types/project.types";
import { tasks } from "../../dashboard/mocks/dashboard.mock";
import ProjectsTabs from "./ProjectsTabs";
import RecentActivityWidget from "../../dashboard/components/RecentActivityWidget";

type Props = {
  projectId: string;
};

export default function FreelancerProjectDetailsPage({ projectId }: Props) {
  const { project, isLoading, error } = useProjectDetails(projectId);
  const [activeTab, setActiveTab] = useState<Tab>("tasks");

  const tabs: TabItem[] = [
    { value: "tasks", label: "Tasks", count: tasks.length },
    { value: "files", label: "Files" },
    { value: "chat", label: "Chat" },
  ];

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

      <div className="space-y-6 lg:col-span-2">
        <ProjectsTabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
        <div className="justify-between items-start gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ProjectWorkspace tasks={project.tasks} activeTab={activeTab} />
          <div className="space-y-6 lg:col-span-1 col-start-1 col-end-3 w-full">
            <ProjectMembers type="client" members={[project.client]} />
            <ProjectMembers type="freelancer" members={project.members} />
          </div>
        </div>
      </div>

      <RecentActivityWidget />
    </div>
  );
}
