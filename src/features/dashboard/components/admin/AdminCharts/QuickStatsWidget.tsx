"use client";

import Card from "@/src/shared/components/Card";

const stats = [
  { label: "Active Freelancers", value: 156 },
  { label: "Completed Projects", value: 342 },
  { label: "Monthly Growth", value: "+12.5%", highlight: "green" },
  { label: "Pending Reviews", value: 8, highlight: "orange" },
];

export default function QuickStatsWidget() {
  return (
    <Card className="p-6">
      <h3 className="mb-4 font-semibold text-gray-900">Quick Stats</h3>

      <div className="space-y-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex justify-between items-center bg-gray-50 px-4 py-4 rounded-lg"
          >
            <span className="text-gray-600 text-sm">{stat.label}</span>

            <span
              className={`font-semibold ${
                stat.highlight === "green"
                  ? "text-green-600"
                  : stat.highlight === "orange"
                    ? "text-orange-500"
                    : "text-gray-900"
              }`}
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
