import { freelancerStats } from "../mocks/dashboard.mock";
import DashboardHeader from "./DashboardHeader";
import CurrentProjectsSection from "./projects/CurrentProjectsSection";
import StatsGrid from "./stats/StatsCards";
import TasksSection from "./tasks/TasksSection";
import FreelancerActivitySection from "./FreelancerActivitySection";
import { FiCheckCircle } from "react-icons/fi";
import Button from "@/src/shared/components/Button";

export default function FreelancerDashboardView() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <DashboardHeader name="Alex" />
        <Button href="/freelancer/tasks" variant="primary">
          View Tasks <FiCheckCircle className="w-4 h-4" />
        </Button>
      </div>

      <StatsGrid stats={freelancerStats} />
      <FreelancerActivitySection />
      <CurrentProjectsSection />
      <TasksSection />
    </div>
  );
}
