"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import RoleSelector from "./RoleLoginButtons";
import { UserRole } from "../types/user.types";

import Logo from "@/src/shared/components/Logo";
import { Button } from "@/src/shared/components/Button";
import BasicFields from "./BasicFields";

import { FiUser } from "react-icons/fi";
import { useAuth } from "../contexts/AuthContext";

export default function SignUpCard() {
  const router = useRouter();
  const { signup, loading } = useAuth();

  const [role, setRole] = useState<UserRole>("freelancer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!name || !email || !password) return;

    await signup(name, email, role);

    router.push("/sign-up-success");
  };

  return (
    <div className="flex flex-col items-center gap-4 bg-background shadow-xl px-12 py-8 rounded-2xl w-105">
      {/* Logo */}
      <Logo />

      <div className="text-center">
        <h1 className="font-semibold text-2xl">Create Account</h1>
        <p className="text-gray-500 text-sm">Join the Client Portal platform</p>
      </div>

      {/* Role selector */}
      <RoleSelector role={role} onChange={setRole} />

      {/* Name */}
      <div className="space-y-1 w-full">
        <label className="font-medium text-sm">Full Name</label>

        <div className="flex items-center bg-white px-3 py-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-primary transition">
          <FiUser className="mr-2 text-gray-400" />

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="John Doe"
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      <BasicFields
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />

      {/* Signup button */}
      <Button onClick={handleSignup} loading={loading} className="w-full">
        Create Account
      </Button>

      <p className="text-gray-500 text-sm">
        Already have an account?{" "}
        <span
          onClick={() => router.push("/sign-in")}
          className="text-primary hover:underline cursor-pointer"
        >
          Sign In
        </span>
      </p>
    </div>
  );
}
