"use client";

import Card from "@/src/shared/components/Card";

import { ProjectClient, ProjectMember } from "../../types/project.types";
import MembersList from "@/src/features/dashboard/components/members/MembersList";
import { useState } from "react";
import InviteForm from "../forms/InviteForm";

type Props = {
  type: "client" | "freelancer";
  members: ProjectMember[] | ProjectClient[];
};

export default function ProjectMembers({ type, members }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="space-y-4">
      <div className="flex justify-between itemsc">
        <h3 className="font-semibold">
          {type === "client" ? "Clients" : "Project Team"}
        </h3>

        <button
          onClick={() => setOpen(true)}
          className="bg-primary px-2 py-1 rounded-md text-white text-sm"
        >
          Invite
        </button>
        <InviteForm open={open} onClose={() => setOpen(false)} />
      </div>

      <MembersList members={members} />
    </Card>
  );
}
