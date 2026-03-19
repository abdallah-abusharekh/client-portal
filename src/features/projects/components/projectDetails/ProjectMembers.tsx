import Card from "@/src/shared/components/Card";

import { FiMessageSquare } from "react-icons/fi";
import { ProjectMember } from "../../types/project.types";
import MembersList from "@/src/features/shared/components/members/MembersList";

type Props = {
  members: ProjectMember[];
};

export default function ProjectMembers({ members }: Props) {
  return (
    <Card className="space-y-4">
      <h3 className="font-semibold">Project Team</h3>

      <MembersList
        members={members}
        renderExtra={() => (
          <FiMessageSquare className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
        )}
      />
    </Card>
  );
}
