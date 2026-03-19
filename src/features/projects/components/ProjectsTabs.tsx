"use client";

import { StatusFilter } from "../types/project.types";
import { motion } from "framer-motion";

type TabItem = {
  value: StatusFilter;
  label: string;
  count: number;
};

type Props = {
  tabs: TabItem[];
  active: StatusFilter;
  onChange: (status: StatusFilter) => void;
};

export default function ProjectsTabs({ tabs, active, onChange }: Props) {
  return (
    <div className="flex items-center bg-gray-100 p-1 rounded-lg w-fit">
      {tabs.map((tab) => {
        const isActive = active === tab.value;

        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className="relative flex items-center gap-2 px-3 py-1.5 text-sm"
          >
            {isActive && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-white shadow-sm rounded-md"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            <span
              className={`relative z-10 ${
                isActive ? "text-primary" : "text-gray-500"
              }`}
            >
              {tab.label}
            </span>

            <span
              className={`relative z-10 text-xs px-2 py-0.5 rounded-full ${
                isActive
                  ? "bg-gray-100 text-gray-700"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
