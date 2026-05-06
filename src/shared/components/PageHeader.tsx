"use client";

import { useAuth } from "@/src/features/auth/contexts/AuthContext";

type Props = {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
};

export default function PageHeader({ title, subtitle, action }: Props) {
  const { role } = useAuth();

  return (
    <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-4">
      <div>
        <h1 className="font-semibold text-xl">{title}</h1>
        {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
      </div>

      {action && role === "freelancer" && <div>{action}</div>}
    </div>
  );
}
