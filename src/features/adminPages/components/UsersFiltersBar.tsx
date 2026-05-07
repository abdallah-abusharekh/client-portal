"use client";

import Button from "@/src/shared/components/Button";
import SearchInput from "@/src/shared/components/SearchInput";
import Select from "@/src/shared/components/Select";
import { BaseUser } from "../../auth/types/user.types";

type RoleOption = {
  label: string;
  value: "all" | BaseUser["role"];
};

type StatusOption = {
  label: string;
  value: "all" | "active" | "suspended";
};

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  roleFilter: "all" | BaseUser["role"];
  onRoleFilterChange: (value: "all" | BaseUser["role"]) => void;
  statusFilter: "all" | "active" | "suspended";
  onStatusFilterChange: (value: "all" | "active" | "suspended") => void;
  roleOptions: RoleOption[];
  statusOptions: StatusOption[];
  canBulkUpdate: boolean;
  onSuspend: () => void;
  onActivate: () => void;
};

export default function UsersFiltersBar({
  search,
  onSearchChange,
  roleFilter,
  onRoleFilterChange,
  statusFilter,
  onStatusFilterChange,
  roleOptions,
  statusOptions,
  canBulkUpdate,
  onSuspend,
  onActivate,
}: Props) {
  return (
    <div className="flex justify-between items-center">
      <div className="gap-4 grid grid-cols-4">
        <SearchInput
          value={search}
          onChange={onSearchChange}
          placeholder="Search by name or email"
          className="col-start-1 col-end-3 w-full"
        />

        <Select
          value={roleFilter}
          onChange={onRoleFilterChange}
          options={roleOptions}
          className="w-full"
        />

        <Select
          value={statusFilter}
          onChange={onStatusFilterChange}
          options={statusOptions}
          className="w-full"
        />
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          onClick={onSuspend}
          disabled={!canBulkUpdate}
        >
          Suspend
        </Button>

        <Button onClick={onActivate} disabled={!canBulkUpdate}>
          Activate
        </Button>
      </div>
    </div>
  );
}
