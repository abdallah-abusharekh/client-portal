"use client";

import { FiUsers, FiActivity } from "react-icons/fi";

export default function AdminDashboardHeader() {
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-4">
      <div>
        <h1 className="font-semibold text-gray-900 text-2xl">
          Admin Dashboard
        </h1>

        <p className="mt-1 text-gray-500">Platform overview and analytics</p>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 bg-white hover:bg-gray-50 shadow-sm px-4 py-2 rounded-lg font-medium text-gray-700 text-sm">
          <FiUsers className="w-4 h-4" />
          Manage Users
        </button>

        <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark shadow-sm px-4 py-2 rounded-lg font-medium text-white text-sm">
          <FiActivity className="w-4 h-4" />
          View Reports
        </button>
      </div>
    </div>
  );
}
