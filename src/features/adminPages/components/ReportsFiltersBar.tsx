"use client";

import SearchInput from "@/src/shared/components/SearchInput";
import Select from "@/src/shared/components/Select";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  categoryFilter: "all" | "users" | "projects" | "finance";
  onCategoryFilterChange: (
    value: "all" | "users" | "projects" | "finance",
  ) => void;
  categoryOptions: {
    label: string;
    value: "all" | "users" | "projects" | "finance";
  }[];
};

export default function ReportsFiltersBar({
  search,
  onSearchChange,
  categoryFilter,
  onCategoryFilterChange,
  categoryOptions,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      <SearchInput
        value={search}
        onChange={onSearchChange}
        placeholder="Search reports"
        className="w-full max-w-md"
      />
      <div className="w-fit max-w-xs h-full">
        <Select
          value={categoryFilter}
          onChange={onCategoryFilterChange}
          options={categoryOptions}
          className="w-full"
        />
      </div>
    </div>
  );
}
