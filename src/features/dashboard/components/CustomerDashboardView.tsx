import { customerStats } from "../mocks/dashboard.mock";
import CustomerProjectsSection from "./CustomerProjectsSection";
import DashboardHeader from "./DashboardHeader";
import StatsGrid from "./stats/StatsCards";
import Button from "@/src/shared/components/Button";
import { LuFolderArchive } from "react-icons/lu";
import { useAuth } from "../../auth/contexts/AuthContext";

export default function CustomerDashboardView() {
  const user = useAuth();

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
      <StatsGrid stats={customerStats} />
      <CustomerProjectsSection />
    </div>
  );
}
