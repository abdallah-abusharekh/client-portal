"use client";

import { useMemo, useState } from "react";
import { reports } from "../../adminTables/mocks/reports.mock";

type ReportCategory = "all" | "users" | "projects" | "finance";

export function useReportsPageState() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<ReportCategory>("all");

  const categoryOptions = [
    { label: "All categories", value: "all" as const },
    { label: "Users", value: "users" as const },
    { label: "Projects", value: "projects" as const },
    { label: "Finance", value: "finance" as const },
  ];

  const reportRows = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return reports
      .filter((report) => {
        const matchesSearch =
          !normalizedSearch ||
          report.name.toLowerCase().includes(normalizedSearch) ||
          report.owner.toLowerCase().includes(normalizedSearch);

        const matchesCategory =
          categoryFilter === "all" || report.category === categoryFilter;

        return matchesSearch && matchesCategory;
      })
      .map((report) => ({
        id: report.id,
        name: report.name,
        category: report.category,
        period: report.period,
        owner: report.owner,
        generatedAt: report.generatedAt,
      }));
  }, [categoryFilter, search]);

  const handleDownloadReport = (reportId: string) => {
    const report = reports.find((item) => item.id === reportId);
    if (!report) return;

    const content = [
      `Report: ${report.name}`,
      `Category: ${report.category}`,
      `Period: ${report.period}`,
      `Owner: ${report.owner}`,
      `Generated At: ${report.generatedAt}`,
    ].join("\n");

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${report.name.toLowerCase().replace(/\s+/g, "-")}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return {
    search,
    setSearch,
    categoryFilter,
    setCategoryFilter,
    categoryOptions,
    reportRows,
    handleDownloadReport,
  };
}
