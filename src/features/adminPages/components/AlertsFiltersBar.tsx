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
    <div className="flex md:flex-row flex-col justify-between md:items-center md:">
      <div className="mb-2 w-full md:w-[50%]">
        <SearchInput
          value={search}
          onChange={onSearchChange}
          placeholder="Search alerts"
          className="w-full max-w-md"
        />
      </div>
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
