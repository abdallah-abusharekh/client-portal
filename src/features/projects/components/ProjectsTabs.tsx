"use client";

import { motion } from "framer-motion";
import Select from "@/src/shared/components/Select";

type TabItem<T extends string> = {
  value: T;
  label: string;
  count?: number;
};

type Props<T extends string> = {
  tabs: TabItem<T>[];
  active: T;
  onChange: (value: T) => void;
};

export default function ProjectsTabs<T extends string>({
  tabs,
  active,
  onChange,
}: Props<T>) {
  const options = tabs.map((tab) => ({
    value: tab.value,
    label: tab.count !== undefined ? `${tab.label} (${tab.count})` : tab.label,
  }));

  return (
    <div className="w-full">
      <div className="sm:hidden">
        <Select value={active} onChange={onChange} options={options} />
      </div>

      <div className="hidden sm:flex items-center bg-gray-100 p-1 rounded-lg w-fit">
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

              {tab.count !== undefined && (
                <span
                  className={`relative z-10 text-xs px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-gray-100 text-gray-700"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
