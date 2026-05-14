import { useMemo, useState } from "react";
import { ReportItem } from "../../adminTables/mocks/reports.mock";

type ReportCategory = "all" | ReportItem["category"];

export function useReportsFilters(reports: ReportItem[]) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<ReportCategory>("all");

  const categoryOptions = useMemo(
    () => [
      { label: "All categories", value: "all" as const },
      { label: "Users", value: "users" as const },
      { label: "Projects", value: "projects" as const },
      { label: "Finance", value: "finance" as const },
    ],
    [],
  );

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
  }, [categoryFilter, reports, search]);

  return {
    search,
    setSearch,
    categoryFilter,
    setCategoryFilter,
    categoryOptions,
    reportRows,
  };
}
