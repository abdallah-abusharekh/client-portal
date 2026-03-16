import Card from "@/src/shared/components/Card";
import Badge from "@/src/shared/components/Badge";
import { freelancers } from "../mocks/dashboard.mock";
import Image from "next/image";

export default function FreelancersWidget() {
  return (
    <Card className="flex flex-col h-70">
      <h3 className="mb-4 font-semibold text-lg">Your Freelancers</h3>

      <div className="flex-1 space-y-6 pr-1 overflow-y-auto">
        {freelancers.map((freelancer) => (
          <div
            key={freelancer.id}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <Image
                src={freelancer.avatar}
                alt={freelancer.name}
                width={40}
                height={40}
                className="rounded-full"
              />

              <div>
                <p className="font-medium text-sm">{freelancer.name}</p>

                <p className="text-gray-500 text-sm">{freelancer.role}</p>
              </div>
            </div>

            <Badge variant="success">{freelancer.activeProjects} active</Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}
