"use client";

import { useState } from "react";
import { Project, StatusFilter, statusLabels } from "../types/project.types";

export type ViewMode = "grid" | "list";

export function useProjectsFilters(projects: Project[]) {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<ViewMode>("grid");
  const [status, setStatus] = useState<StatusFilter>("all");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus = status === "all" ? true : project.status === status;

    return matchesSearch && matchesStatus;
  });

  const tabs = (Object.keys(statusLabels) as StatusFilter[]).map((key) => ({
    value: key,
    label: statusLabels[key],
    count:
      key === "all"
        ? projects.length
        : projects.filter((p) => p.status === key).length,
  }));

  return {
    search,
    setSearch,

    view,
    setView,

    status,
    setStatus,

    tabs,
    filteredProjects,
  };
}
