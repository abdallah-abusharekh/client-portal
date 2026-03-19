"use client";

import Card from "@/src/shared/components/Card";

import HeaderTop from "./HeaderTop";
import HeaderStats from "./HeaderStats";
import { ProjectDetails, ProjectStatus } from "../../types/project.types";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  project: ProjectDetails;
};

export default function ProjectHeader({ project }: Props) {
  const [projectState, setProjectState] = useState(project);

  function handleStatusChange(status: ProjectStatus) {
    setProjectState((prev) => ({
      ...prev,
      status,
    }));

    toast.success(`Project moved to ${status.replace("-", " ")}`);
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-500 text-sm">
        Projects / <span className="text-gray-900">{project.title}</span>
      </p>

      <Card className="space-y-6">
        <HeaderTop project={projectState} onStatusChange={handleStatusChange} />

        <div className="bg-gray-200 h-px" />

        <HeaderStats project={projectState} />
      </Card>
    </div>
  );
}
