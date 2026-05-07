"use client";

import Card from "@/src/shared/components/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { revenueData } from "../../../mocks/dashboard.mock";

export default function RevenueChartWidget() {
  return (
    <Card className="col-start-1 col-end-3 p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-semibold text-gray-900">Revenue Overview</h3>
          <p className="text-gray-500 text-sm">Monthly revenue and projects</p>
        </div>

        <span className="bg-green-100 px-2 py-1 rounded-full font-medium text-green-700 text-xs">
          +15%
        </span>
      </div>

      <div className="h-65">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData}>
            <CartesianGrid vertical={false} stroke="#f1f5f9" />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tickFormatter={(value) => `$${value / 1000}k`}
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Bar
              dataKey="revenue"
              fill="#2563eb"
              radius={[6, 6, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
