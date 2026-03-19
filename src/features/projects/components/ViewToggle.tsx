"use client";

import { motion } from "framer-motion";
import { FiGrid, FiList } from "react-icons/fi";

export type ViewMode = "grid" | "list";

type Props = {
  view: ViewMode;
  onChange: (view: ViewMode) => void;
};

export default function ViewToggle({ view, onChange }: Props) {
  return (
    <div className="flex items-center bg-gray-100 p-1 rounded-lg">
      <button
        onClick={() => onChange("grid")}
        className="relative flex justify-center items-center p-2 rounded-md"
      >
        {view === "grid" && (
          <motion.div
            layoutId="view-toggle"
            className="absolute inset-0 bg-white shadow-sm rounded-md"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
          />
        )}

        <FiGrid
          className={`relative z-10 w-4 h-4 ${
            view === "grid" ? "text-primary" : "text-gray-500"
          }`}
        />
      </button>

      <button
        onClick={() => onChange("list")}
        className="relative flex justify-center items-center p-2 rounded-md"
      >
        {view === "list" && (
          <motion.div
            layoutId="view-toggle"
            className="absolute inset-0 bg-white shadow-sm rounded-md"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
          />
        )}

        <FiList
          className={`relative z-10 w-4 h-4 ${
            view === "list" ? "text-primary" : "text-gray-500"
          }`}
        />
      </button>
    </div>
  );
}
