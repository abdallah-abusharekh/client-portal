import Card from "@/src/shared/components/Card";
import Badge from "@/src/shared/components/Badge";
import { freelancers } from "../mocks/dashboard.mock";
import MembersList from "./members/MembersList";
import { Freelancer } from "../types/dashboard.types";

export default function FreelancersWidget() {
  return (
    <Card className="flex flex-col h-70">
      <h3 className="mb-4 font-semibold text-lg">Your Freelancers</h3>

      <div className="flex-1 pr-1 overflow-y-auto">
        <MembersList<Freelancer>
          members={freelancers}
          renderExtra={(member) => (
            <Badge variant="success">{member.activeProjects} active</Badge>
          )}
        />
      </div>
    </Card>
  );
}
