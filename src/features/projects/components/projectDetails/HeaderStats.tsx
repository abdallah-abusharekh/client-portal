"use client";

import {
  FiCalendar,
  FiDollarSign,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import { ProjectDetails } from "../../types/project.types";
import StatItem from "./StatItem";
import { formatDate } from "../../utils/project.utils";
import { useAuth } from "@/src/features/auth/contexts/AuthContext";

type Props = {
  project: ProjectDetails;
};

export default function HeaderStats({ project }: Props) {
  const { role } = useAuth();

  return (
    <div className="space-y-4">
      <div className="gap-6 grid grid-cols-2 md:grid-cols-4">
        <StatItem
          icon={<FiCalendar />}
          label="Due Date"
          value={formatDate(project.dueDate)}
          bg="bg-indigo-100 text-indigo-600"
        />

        {role === "freelancer" && (
          <>
            {" "}
            <StatItem
              icon={<FiDollarSign />}
              label="Budget"
              value={`$${project.budget.toLocaleString()}`}
              bg="bg-green-100 text-green-600"
            />
            <StatItem
              icon={<FiClock />}
              label="Spent"
              value={`$${project.spent.toLocaleString()}`}
              bg="bg-orange-100 text-orange-600"
            />
          </>
        )}

        <StatItem
          icon={<FiCheckCircle />}
          label="Progress"
          value={`${project.progress}%`}
          bg="bg-teal-100 text-teal-600"
        />
      </div>

      <div className="bg-gray-200 rounded-full w-full h-2 overflow-hidden">
        <div
          className="bg-primary rounded-full h-full transition-all"
          style={{ width: `${project.progress}%` }}
        />
      </div>
    </div>
  );
}
