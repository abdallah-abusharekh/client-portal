"use client";

import { useRef, useState } from "react";
import { useClickOutside } from "@/src/shared/hooks/useClickOutside";

type DropdownItem = {
  label: string;
  onClick?: () => void;
  className?: string;
};

type Props = {
  trigger: React.ReactNode;
  items: DropdownItem[];
};

export default function Dropdown({ trigger, items }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="hover:bg-gray-100 p-1.5 rounded-md transition"
      >
        {trigger}
      </button>

      {open && (
        <div className="top-full right-0 z-50 absolute bg-white shadow-lg mt-2 py-2 border border-gray-200 rounded-xl w-48">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.onClick?.();
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-1 text-sm hover:bg-gray-50 transition ${item.className}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
