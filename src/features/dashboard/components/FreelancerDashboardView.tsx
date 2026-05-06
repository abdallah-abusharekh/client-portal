"use client";

import { freelancerStats } from "../mocks/dashboard.mock";
import DashboardHeader from "./DashboardHeader";
import CurrentProjectsSection from "./projects/CurrentProjectsSection";
import StatsGrid from "./stats/StatsCards";
import TasksSection from "./tasks/TasksSection";
import FreelancerActivitySection from "./FreelancerActivitySection";
import Button from "@/src/shared/components/Button";
import { LuFolderArchive } from "react-icons/lu";
import { useAuth } from "../../auth/contexts/AuthContext";

export default function FreelancerDashboardView() {
  const user = useAuth();

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <DashboardHeader
          name={user.user?.name.split(" ").at(0) || "Freelancer"}
        />
        <Button href="/projects" variant="primary">
          View Projects <LuFolderArchive className="w-4 h-4" />
        </Button>
      </div>

      <StatsGrid stats={freelancerStats} />
      <FreelancerActivitySection />
      <CurrentProjectsSection />
      <TasksSection />
    </div>
  );
}
