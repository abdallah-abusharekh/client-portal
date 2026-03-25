"use client";

import React from "react";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  type?: React.HTMLInputTypeAttribute;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

export default function Input({
  value,
  onChange,
  placeholder,
  className = "",
  type = "text",
  ...rest
}: Props) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      className={`px-3 py-2 w-full rounded-lg border border-gray-200 bg-(--color-background-sky) focus:outline-none focus:ring-2 focus:ring-primary/20 ${className}`}
      {...rest}
    />
  );
}
