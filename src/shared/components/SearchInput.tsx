"use client";

import { FiSearch } from "react-icons/fi";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}: Props) {
  return (
    <div className={`relative ${className}`}>
      <FiSearch className="top-1/2 left-3 absolute text-gray-400 -translate-y-1/2" />

      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="pl-10 py-2 w-full rounded-lg border border-gray-200 bg-(--color-background-sky) focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
