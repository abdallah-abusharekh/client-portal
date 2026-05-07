"use client";

import ActionLink from "@/src/shared/components/ActionLink";
import Card from "@/src/shared/components/Card";
import { FiAlertCircle, FiCheckCircle, FiClock } from "react-icons/fi";

export default function PlatformAlertsWidget() {
  return (
    <Card className="space-y-4 p-6">
      <div className="flex justify-between items-center pb-4 border-gray-200 border-b">
        <h3 className="font-semibold text-gray-900">Platform Alerts</h3>
        <ActionLink href="/admin/alerts">View All</ActionLink>
      </div>

      <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-xl">
        <FiAlertCircle className="mt-1 text-yellow-500" />

        <div>
          <p className="font-medium text-yellow-700">Pending Approvals</p>

          <p className="text-yellow-600 text-sm">
            8 users awaiting verification
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 bg-green-50 p-4 rounded-xl">
        <FiCheckCircle className="mt-1 text-green-600" />

        <div>
          <p className="font-medium text-green-700">System Status</p>

          <p className="text-green-600 text-sm">All systems operational</p>
        </div>
      </div>

      <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
        <FiClock className="mt-1 text-blue-600" />

        <div>
          <p className="font-medium text-blue-700">Scheduled Maintenance</p>

          <p className="text-blue-600 text-sm">
            Next: July 15, 2024 at 2:00 AM UTC
          </p>
        </div>
      </div>
    </Card>
  );
}
