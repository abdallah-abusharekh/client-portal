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
    <div className="flex md:flex-row flex-col justify-between md:items-center md:">
      <div className="mb-2 w-full md:w-[50%]">
        <SearchInput
          value={search}
          onChange={onSearchChange}
          placeholder="Search reports"
          className="w-full max-w-md"
        />
      </div>
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
