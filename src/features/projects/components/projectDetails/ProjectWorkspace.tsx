"use client";

import { useState } from "react";

import ProjectsTabs from "@/src/features/projects/components/ProjectsTabs";

import { ProjectTask, Tab, TabItem } from "../../types/project.types";
import ProjectTasks from "./ProjectTasks";
import ProjectFiles from "./ProjectFiles";
import ProjectChat from "./ProjectChat";

type Props = {
  tasks: ProjectTask[];
};

export default function ProjectWorkspace({ tasks }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("tasks");

  const tabs: TabItem[] = [
    { value: "tasks", label: "Tasks", count: tasks.length },
    { value: "files", label: "Files" },
    { value: "chat", label: "Chat" },
  ];

  return (
    <div className="space-y-6">
      <ProjectsTabs tabs={tabs} active={activeTab} onChange={setActiveTab} />

      {activeTab === "tasks" && <ProjectTasks tasks={tasks} />}
      {activeTab === "files" && <ProjectFiles />}
      {activeTab === "chat" && <ProjectChat />}
    </div>
  );
}
