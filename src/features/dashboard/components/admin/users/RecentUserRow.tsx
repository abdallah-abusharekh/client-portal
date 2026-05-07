"use client";

import Badge from "@/src/shared/components/Badge";
import Image from "next/image";
import { RecentUser } from "../../../types/dashboard.types";

type Props = {
  user: RecentUser;
};

export default function RecentUserRow({ user }: Props) {
  return (
    <div className="items-center grid grid-cols-3 hover:bg-gray-50 px-6 py-5 transition">
      <div className="flex items-center gap-4">
        <Image
          src={user.avatar}
          alt={user.name}
          width={36}
          height={36}
          className="rounded-full"
        />

        <div className="space-y-0.5">
          <p className="font-medium text-gray-900 text-sm">{user.name}</p>

          <p className="text-gray-500 text-xs">{user.email}</p>
        </div>
      </div>

      <div className="flex justify-center">
        <Badge>{user.role}</Badge>
      </div>

      <div className="flex justify-end">
        <Badge variant="success">{user.status}</Badge>
      </div>
    </div>
  );
}
