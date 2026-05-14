import { useMemo, useState } from "react";
import { AlertItem } from "../../adminTables/mocks/alerts.mock";

type AlertStatus = "all" | AlertItem["status"];

export function useAlertsFilters(alerts: AlertItem[]) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<AlertStatus>("all");

  const statusOptions = useMemo(
    () => [
      { label: "All statuses", value: "all" as const },
      { label: "Open", value: "open" as const },
      { label: "Resolved", value: "resolved" as const },
    ],
    [],
  );

  const alertRows = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return alerts
      .filter((alert) => {
        const matchesSearch =
          !normalizedSearch ||
          alert.title.toLowerCase().includes(normalizedSearch) ||
          alert.type.toLowerCase().includes(normalizedSearch);

        const matchesStatus =
          statusFilter === "all" || alert.status === statusFilter;

        return matchesSearch && matchesStatus;
      })
      .map((alert) => ({
        id: alert.id,
        title: alert.title,
        type: alert.type,
        severity: alert.severity,
        status: alert.status,
        createdAt: alert.createdAt,
      }));
  }, [alerts, search, statusFilter]);

  return {
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    statusOptions,
    alertRows,
  };
}
