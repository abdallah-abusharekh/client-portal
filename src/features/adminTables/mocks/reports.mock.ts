export type ReportItem = {
  id: string;
  name: string;
  category: "users" | "projects" | "finance";
  period: "weekly" | "monthly" | "quarterly";
  generatedAt: string;
  owner: string;
};

export const reports: ReportItem[] = [
  {
    id: "r1",
    name: "Active Users Overview",
    category: "users",
    period: "weekly",
    generatedAt: "2026-05-06",
    owner: "Admin Team",
  },
  {
    id: "r2",
    name: "Project Delivery Summary",
    category: "projects",
    period: "monthly",
    generatedAt: "2026-05-04",
    owner: "PM Office",
  },
  {
    id: "r3",
    name: "Revenue vs Spend",
    category: "finance",
    period: "monthly",
    generatedAt: "2026-05-03",
    owner: "Finance Ops",
  },
  {
    id: "r4",
    name: "Quarterly Risk Snapshot",
    category: "projects",
    period: "quarterly",
    generatedAt: "2026-04-15",
    owner: "Risk Committee",
  },
];
