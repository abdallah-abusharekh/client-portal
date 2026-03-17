"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/features/auth/contexts/AuthContext";
import DashboardLayout from "@/src/features/layout/components/DashboardLayout";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/sign-in");
    }
  }, [user, loading, router]);

  if (loading) return null;

  if (!user) return null;

  return <DashboardLayout>{children}</DashboardLayout>;
}
