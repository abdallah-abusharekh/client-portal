"use client";

import { FiSearch } from "react-icons/fi";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function ProjectsSearch({ value, onChange }: Props) {
  return (
    <div className="flex flex-1 items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
      <FiSearch className="text-gray-400" />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search projects..."
        className="bg-transparent outline-none w-full text-sm"
      />
    </div>
  );
}
