"use client";

import ProjectsGrid from "./components/ProjectsGrid";
import ProjectsHeader from "./components/ProjectsHeader";
import ProjectsTabs from "./components/ProjectsTabs";
import ProjectsToolbar from "./components/ProjectsToolbar";
import { projectsMock } from "./mocks/projects.mock";

export default function FreelancerProjectsPage() {
  return (
    <div className="space-y-6">
      <ProjectsHeader />

      <ProjectsToolbar />

      <ProjectsTabs />

      <ProjectsGrid projects={projectsMock} />
    </div>
  );
}
