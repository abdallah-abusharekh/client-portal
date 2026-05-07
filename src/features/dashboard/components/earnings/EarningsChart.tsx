"use client";

import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";
import { chartData } from "../../mocks/dashboard.mock";

export default function EarningsChart() {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="earnings"
            stroke="#2563eb"
            fill="#2563eb"
            fillOpacity={0.2}
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
