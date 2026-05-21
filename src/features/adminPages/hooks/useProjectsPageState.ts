"use client";

import { useMemo, useState } from "react";
import { projects } from "../mocks/projects.mock";
import { Project, ProjectStatus } from "../../projects/types/project.types";

type StatusFilter = "all" | ProjectStatus;

type ProjectRow = {
  id: string;
  title: string;
  client: string;
  status: ProjectStatus;
  budget: number;
  createdBy: string;
};

export function useProjectsPageState() {
  const [data, setData] = useState<Project[]>(projects);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const statusOptions = useMemo(
    () => [
      { label: "All statuses", value: "all" as const },
      { label: "In Progress", value: "in-progress" as const },
      { label: "Review", value: "review" as const },
      { label: "Completed", value: "completed" as const },
      { label: "Paused", value: "paused" as const },
    ],
    [],
  );

  const filteredProjects = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return data.filter((project) => {
      const matchesSearch =
        !normalizedSearch ||
        project.title.toLowerCase().includes(normalizedSearch) ||
        project.client.name.toLowerCase().includes(normalizedSearch);

      const matchesStatus =
        statusFilter === "all" || project.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [data, search, statusFilter]);

  const projectRows: ProjectRow[] = useMemo(
    () =>
      filteredProjects.map((project) => ({
        id: project.id,
        title: project.title,
        client: project.client.name,
        status: project.status,
        budget: project.budget,
        createdBy: project.createdBy ?? "-",
      })),
    [filteredProjects],
  );

  const handleDeleteProject = (projectId: string) => {
    setData((prev) => prev.filter((project) => project.id !== projectId));
  };

  return {
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    statusOptions,
    projectRows,
    handleDeleteProject,
  };
}
