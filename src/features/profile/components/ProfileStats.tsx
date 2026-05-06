import React from "react";
import { AppUser } from "../../auth/types/user.types";

export default function ProfileStats({ user }: { user: AppUser }) {
  if (user.role === "freelancer") {
    return (
      <div className="mt-4 w-full">
        <div className="flex justify-between mb-2 text-sm">
          <span>Total Earnings</span>
          <span className="font-semibold text-green-600">
            ${user.totalEarnings.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <span>Active Contracts</span>
          <span className="font-semibold">{user.activeContracts}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Projects</span>
          <span className="font-semibold">{user.projects.length}</span>
        </div>
      </div>
    );
  }
  if (user.role === "customer") {
    return (
      <div className="mt-4 w-full">
        <div className="flex justify-between mb-2 text-sm">
          <span>Company</span>
          <span className="font-semibold">{user.companyName}</span>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <span>Total Spent</span>
          <span className="font-semibold text-blue-600">
            ${user.totalSpent.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Projects</span>
          <span className="font-semibold">{user.projects.length}</span>
        </div>
      </div>
    );
  }
  if (user.role === "admin") {
    return (
      <div className="mt-4 w-full">
        <div className="flex justify-between mb-2 text-sm">
          <span>Total Users</span>
          <span className="font-semibold">{user.totalUsers}</span>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <span>Total Projects</span>
          <span className="font-semibold">{user.totalProjects}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>System Revenue</span>
          <span className="font-semibold text-green-600">
            ${user.systemRevenue.toLocaleString()}
          </span>
        </div>
      </div>
    );
  }
  return null;
}
