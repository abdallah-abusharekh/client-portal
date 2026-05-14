import CustomerProjectsSection from "./CustomerProjectsSection";
import DashboardHeader from "./DashboardHeader";
import StatsGrid from "./stats/StatsCards";
import Button from "@/src/shared/components/Button";
import { LuFolderArchive } from "react-icons/lu";
import { useAuth } from "../../auth/contexts/AuthContext";
import FreelancersWidget from "./FreelancersWidget";
import { useCustomerDashboard } from "../hooks/useCustomerDashboard";

import ErrorState from "@/src/shared/components/ErrorState";
import EmptyState from "@/src/shared/components/EmptyState";
import CustomerDashboardSkeleton from "./CustomerDashboardSkeleton";

export default function CustomerDashboardView() {
  const user = useAuth();
  const { data, isLoading, error, refetch } = useCustomerDashboard();

  if (isLoading) {
    return <CustomerDashboardSkeleton />;
  }

  if (error) {
    return (
      <ErrorState
        message="Failed to load dashboard."
        onRetry={() => refetch()}
      />
    );
  }

  if (
    !data ||
    (data.stats.length === 0 &&
      data.activeProjects.length === 0 &&
      data.freelancers.length === 0)
  ) {
    return <EmptyState message="No dashboard data found." />;
  }

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <DashboardHeader
          name={user.user?.name.split(" ").at(0) || "Customer"}
        />
        <Button href="/projects" variant="primary">
          View Projects <LuFolderArchive className="w-4 h-4" />
        </Button>
      </div>

      <StatsGrid stats={data.stats} />
      <CustomerProjectsSection projects={data.activeProjects} />
      <FreelancersWidget freelancers={data.freelancers} />
    </div>
  );
}
