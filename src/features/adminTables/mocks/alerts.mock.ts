export type AlertItem = {
  id: string;
  title: string;
  type: "system" | "security" | "billing";
  severity: "low" | "medium" | "high";
  status: "open" | "resolved";
  createdAt: string;
};

export const alerts: AlertItem[] = [
  {
    id: "a1",
    title: "Unusual login attempt",
    type: "security",
    severity: "high",
    status: "open",
    createdAt: "2026-05-02",
  },
  {
    id: "a2",
    title: "Invoice payment failed",
    type: "billing",
    severity: "medium",
    status: "open",
    createdAt: "2026-05-01",
  },
  {
    id: "a3",
    title: "Background job delayed",
    type: "system",
    severity: "low",
    status: "resolved",
    createdAt: "2026-04-29",
  },
  {
    id: "a4",
    title: "Password reset spike detected",
    type: "security",
    severity: "medium",
    status: "open",
    createdAt: "2026-04-28",
  },
  {
    id: "a5",
    title: "Subscription renewal retry",
    type: "billing",
    severity: "low",
    status: "resolved",
    createdAt: "2026-04-25",
  },
];
