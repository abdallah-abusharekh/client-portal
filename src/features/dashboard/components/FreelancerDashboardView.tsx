"use client";

import DashboardHeader from "./DashboardHeader";
import StatsGrid from "./stats/StatsCards";
import FreelancerActivitySection from "./FreelancerActivitySection";
import Button from "@/src/shared/components/Button";
import { LuFolderArchive } from "react-icons/lu";
import { useAuth } from "../../auth/contexts/AuthContext";
import CurrentProjectsSection from "./CurrentProjectsSection";
import { useFreelancerDashboard } from "../hooks/useFreelancerDashboard";
import FreelancerDashboardSkeleton from "./FreelancerDashboardSkeleton";
import ErrorState from "@/src/shared/components/ErrorState";
import EmptyState from "@/src/shared/components/EmptyState";

export default function FreelancerDashboardView() {
  const user = useAuth();
  const { data, isLoading, error, refetch } = useFreelancerDashboard();

  if (isLoading) {
    return <FreelancerDashboardSkeleton />;
  }

  if (error) {
    return (
      <ErrorState
        message="Failed to load dashboard."
        onRetry={() => refetch()}
      />
    );
  }

  if (!data || (data.stats.length === 0 && data.currentProjects.length === 0)) {
    return <EmptyState message="No dashboard data found." />;
  }

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

      <StatsGrid stats={data.stats} />
      <FreelancerActivitySection deadlines={data.deadlines} />
      <CurrentProjectsSection projects={data.currentProjects} />
    </div>
  );
}
