import { useMemo, useState } from "react";
import { BaseUser } from "../../auth/types/user.types";

type StatusFilter = "all" | "active" | "suspended";
type RoleFilter = "all" | BaseUser["role"];

export function useUsersFilters(data: BaseUser[]) {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<RoleFilter>("all");

  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const roles = useMemo(
    () => Array.from(new Set(data.map((user) => user.role))),
    [data],
  );

  const roleOptions = useMemo(
    () => [
      { label: "All roles", value: "all" as const },
      ...roles.map((role) => ({
        label: role,
        value: role,
      })),
    ],
    [roles],
  );

  const statusOptions = [
    { label: "All statuses", value: "all" as const },
    { label: "Active", value: "active" as const },
    { label: "Suspended", value: "suspended" as const },
  ];

  const filteredUsers = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return data.filter((user) => {
      const matchesSearch =
        !normalizedSearch ||
        user.name.toLowerCase().includes(normalizedSearch) ||
        user.email.toLowerCase().includes(normalizedSearch);

      const matchesRole = roleFilter === "all" || user.role === roleFilter;

      const matchesStatus =
        statusFilter === "all" || user.status === statusFilter;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [data, roleFilter, search, statusFilter]);

  return {
    search,
    setSearch,

    roleFilter,
    setRoleFilter,

    statusFilter,
    setStatusFilter,

    roleOptions,
    statusOptions,

    filteredUsers,
  };
}
