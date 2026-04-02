"use client";

import { FiChevronDown } from "react-icons/fi";

type Option<T> = {
  label: string;
  value: T;
};

type Props<T extends string> = {
  value: T;
  options: Option<T>[];
  onChange: (value: T) => void;
  placeholder?: string;
  className?: string;
};

export default function Select<T extends string>({
  value,
  options,
  onChange,
  placeholder,
  className = "",
}: Props<T>) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selected = options.find((opt) => opt.value === e.target.value);

    if (selected) {
      onChange(selected.value);
    }
  }

  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={handleChange}
        className="
          appearance-none
          px-4 py-2 pr-10
          w-full
          rounded-xl
          bg-(--color-background-sky)
          border border-gray-200
          text-sm
          focus:outline-none
          focus:ring-2 focus:ring-primary/20
          transition
          cursor-pointer
        "
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <FiChevronDown className="top-1/2 right-3 absolute text-gray-400 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}
