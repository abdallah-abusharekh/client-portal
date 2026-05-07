"use client";

import Card from "@/src/shared/components/Card";
import ActionLink from "@/src/shared/components/ActionLink";

import RecentUserRow from "./RecentUserRow";
import { recentUsers } from "../../../mocks/dashboard.mock";

export default function RecentUsersWidget() {
  return (
    <Card className="p-0">
      <div className="flex justify-between items-center px-6 py-4 border-gray-200 border-b">
        <h3 className="font-semibold text-gray-900">Recent Users</h3>
        <ActionLink href="#">View All</ActionLink>
      </div>

      <div className="divide-y divide-gray-200">
        <div className="grid grid-cols-3 px-6 py-3 font-medium text-gray-500 text-xs uppercase">
          <span>User</span>
          <span className="text-center">Role</span>
          <span className="text-right">Status</span>
        </div>
        {recentUsers.map((user) => (
          <RecentUserRow key={user.id} user={user} />
        ))}
      </div>
    </Card>
  );
}
