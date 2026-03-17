"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserRole } from "../types/user.types";
import { useAuth } from "../contexts/AuthContext";
import RoleSelector from "./RoleLoginButtons";
import Logo from "@/src/shared/components/Logo";

import BasicFields from "./BasicFields";
import Button from "@/src/shared/components/Button";

const DEMO_CREDENTIALS: Record<UserRole, { email: string; password: string }> =
  {
    freelancer: {
      email: "alex@freelance.com",
      password: "password123",
    },
    customer: {
      email: "sarah@company.com",
      password: "password123",
    },
    admin: {
      email: "admin@portal.com",
      password: "password123",
    },
  };

export default function SignInCard() {
  const { login, loading } = useAuth();
  const router = useRouter();

  const [role, setRole] = useState<UserRole>("freelancer");

  const [email, setEmail] = useState(DEMO_CREDENTIALS.freelancer.email);
  const [password, setPassword] = useState(
    DEMO_CREDENTIALS.freelancer.password,
  );

  const handleRoleChange = (newRole: UserRole) => {
    setRole(newRole);

    const creds = DEMO_CREDENTIALS[newRole];

    setEmail(creds.email);
    setPassword(creds.password);
  };

  const handleLogin = async () => {
    try {
      await login(role);

      // redirect to role dashboard
      router.push(`/${role}/dashboard`);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 bg-background shadow-xl px-12 py-8 rounded-2xl">
      <Logo />

      {/* Title */}
      <div className="mb-4 text-center">
        <h1 className="font-semibold text-2xl">Client Portal</h1>
        <p className="text-gray-500 text-sm">
          Professional project management platform
        </p>
      </div>

      {/* Role Selector */}
      <RoleSelector role={role} onChange={handleRoleChange} />

      <BasicFields
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />

      {/* Login Button */}
      <Button onClick={handleLogin} loading={loading} className="w-full">
        Sign In
      </Button>

      <p className="text-gray-500 text-sm">
        Don't have an account?{" "}
        <span
          onClick={() => router.push("/sign-up")}
          className="text-primary hover:underline cursor-pointer"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}
