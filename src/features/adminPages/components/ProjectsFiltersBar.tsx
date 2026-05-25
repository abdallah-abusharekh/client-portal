"use client";

import SearchInput from "@/src/shared/components/SearchInput";
import Select from "@/src/shared/components/Select";
import { ProjectStatus } from "../../projects/types/project.types";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  statusFilter: "all" | ProjectStatus;
  onStatusFilterChange: (value: "all" | ProjectStatus) => void;
  statusOptions: { label: string; value: "all" | ProjectStatus }[];
};

export default function ProjectsFiltersBar({
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
          placeholder="Search by project title or client"
          className="w-full max-w-md"
        />
      </div>

      <div className="w-fit h-full">
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
