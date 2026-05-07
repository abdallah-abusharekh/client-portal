"use client";

import SearchInput from "@/src/shared/components/SearchInput";
import Select from "@/src/shared/components/Select";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  statusFilter: "all" | "open" | "resolved";
  onStatusFilterChange: (value: "all" | "open" | "resolved") => void;
  statusOptions: { label: string; value: "all" | "open" | "resolved" }[];
};

export default function AlertsFiltersBar({
  search,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  statusOptions,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      <SearchInput
        value={search}
        onChange={onSearchChange}
        placeholder="Search alerts"
        className="w-full max-w-md"
      />
      <div className="w-fit max-w-xs h-full">
        <Select
          value={statusFilter}
          onChange={onStatusFilterChange}
          options={statusOptions}
          className="w-full"
        />
      </div>
    </div>
  );
}
