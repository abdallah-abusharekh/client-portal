"use client";

import SearchInput from "@/src/shared/components/SearchInput";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function ProjectsSearch({ value, onChange }: Props) {
  return (
    <SearchInput
      placeholder="Search projects..."
      className="w-full"
      value={value}
      onChange={onChange}
    />
  );
}
