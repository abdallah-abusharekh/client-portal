"use client";

import Card from "@/src/shared/components/Card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Completed", value: 342 },
  { name: "In Progress", value: 89 },
  { name: "Pending", value: 23 },
  { name: "On Hold", value: 12 },
];

const COLORS = ["#10b981", "#6366f1", "#f59e0b", "#94a3b8"];

export default function ProjectStatusWidget() {
  return (
    <Card className="p-6">
      <h3 className="mb-6 font-semibold text-gray-900">Project Status</h3>

      <div className="flex flex-col items-center">
        <div className="w-full h-50">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip />

              <Pie
                data={data}
                innerRadius={65}
                outerRadius={85}
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="gap-x-8 gap-y-2 grid grid-cols-2 mt-4 text-sm">
          {data.map((item, i) => (
            <div
              key={item.name}
              className="flex justify-between items-center gap-2"
            >
              <div className="flex items-center gap-2">
                <span
                  className="rounded-full w-3 h-3"
                  style={{ background: COLORS[i] }}
                />
                {item.name}
              </div>

              <span className="font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
