"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { BaseUser } from "../../auth/types/user.types";
import { users } from "../../adminTables/mocks/users.mock";

type StatusFilter = "all" | "active" | "suspended";
type RoleFilter = "all" | BaseUser["role"];

export function useUsersPageState() {
  const [data, setData] = useState<BaseUser[]>(users);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<RoleFilter>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);

  const roles = useMemo(
    () => Array.from(new Set(data.map((user) => user.role))),
    [data],
  );

  const roleOptions = useMemo(
    () => [
      { label: "All roles", value: "all" as const },
      ...roles.map((role) => ({ label: role, value: role })),
    ],
    [roles],
  );

  const statusOptions = useMemo(
    () => [
      { label: "All statuses", value: "all" as const },
      { label: "Active", value: "active" as const },
      { label: "Suspended", value: "suspended" as const },
    ],
    [],
  );

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

  const handleToggleUserSelection = (id: string) => {
    setSelectedUserIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const isAllSelected = (ids: string[]) =>
    ids.length > 0 && ids.every((id) => selectedUserIds.includes(id));

  const handleToggleAllUsersSelection = (ids: string[]) => {
    setSelectedUserIds((prev) => {
      if (isAllSelected(ids)) {
        return prev.filter((id) => !ids.includes(id));
      }

      const next = new Set(prev);
      ids.forEach((id) => next.add(id));
      return Array.from(next);
    });
  };

  const handleBulkStatusUpdate = (status: "active" | "suspended") => {
    if (selectedUserIds.length === 0) return;

    setData((prev) =>
      prev.map((user) =>
        selectedUserIds.includes(user.id) ? { ...user, status } : user,
      ),
    );

    toast.success(
      `${selectedUserIds.length} user${selectedUserIds.length > 1 ? "s" : ""} ${status === "active" ? "activated" : "suspended"} successfully`,
    );
  };

  useEffect(() => {
    setSelectedUserIds((prev) =>
      prev.filter((id) => data.some((user) => user.id === id)),
    );
  }, [data]);

  return {
    data,
    setData,
    search,
    setSearch,
    roleFilter,
    setRoleFilter,
    statusFilter,
    setStatusFilter,
    roleOptions,
    statusOptions,
    selectedUserIds,
    filteredUsers,
    isAllSelected,
    handleBulkStatusUpdate,
    handleToggleUserSelection,
    handleToggleAllUsersSelection,
  };
}
