"use client";

import Card from "@/src/shared/components/Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { userGrowthData } from "../../mocks/dashboard.mock";

export default function UserGrowthWidget() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900">User Growth</h3>
        <p className="text-gray-500 text-sm">Customer vs Freelancer signups</p>
      </div>
      <div className="h-65">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={userGrowthData}>
            <CartesianGrid vertical={false} stroke="#f1f5f9" />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />

            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="customers"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
            />

            <Line
              type="monotone"
              dataKey="freelancers"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
