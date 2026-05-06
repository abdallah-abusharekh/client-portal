"use client";

import { useAuth } from "@/src/features/auth/contexts/AuthContext";
import CustomerDashboardView from "@/src/features/dashboard/components/CustomerDashboardView";
import FreelancerDashboardView from "@/src/features/dashboard/components/FreelancerDashboardView";

export default function Page() {
  const { role } = useAuth();

  return role === "freelancer" ? (
    <FreelancerDashboardView />
  ) : role === "customer" ? (
    <CustomerDashboardView />
  ) : null;
}
