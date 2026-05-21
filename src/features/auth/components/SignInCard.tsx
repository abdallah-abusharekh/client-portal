"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { UserRole } from "../types/user.types";
import { useAuth } from "../contexts/AuthContext";
import { DEMO_CREDENTIALS } from "../mocks/users.mock";
import { signInSchema, SignInFormValues } from "../schemas/auth.schema";

import RoleSelector from "./RoleLoginButtons";
import BasicFields from "./BasicFields";

import Button from "@/src/shared/components/Button";

export default function SignInCard() {
  const { login, loading } = useAuth();
  const router = useRouter();

  const [role, setRole] = useState<UserRole>("freelancer");

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: DEMO_CREDENTIALS.freelancer.email,
      password: DEMO_CREDENTIALS.freelancer.password,
    },
  });

  const handleRoleChange = (newRole: UserRole) => {
    setRole(newRole);

    const creds = DEMO_CREDENTIALS[newRole];

    setValue("email", creds.email);
    setValue("password", creds.password);
  };

  const onSubmit = async (data: SignInFormValues) => {
    try {
      const user = await login(data.email, data.password);

      if (user.role === "admin") router.push(`/admin/dashboard`);
      else router.push(`/dashboard`);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Invalid credentials";
      setError("root", {
        message,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 shadow-lg lg:shadow-none p-7 border-2 border-primary lg:border-none rounded-2xl"
    >
      <div className="space-y-1 mb-4">
        <h1 className="font-semibold text-slate-900 text-2xl">Sign in</h1>
        <p className="text-slate-500 text-sm">
          Welcome back. Access your Client Portal workspace.
        </p>
      </div>

      <RoleSelector role={role} onChange={handleRoleChange} />

      <BasicFields register={register} errors={errors} />
      {errors.root && (
        <div className="bg-red-50 px-3 py-2 border border-red-200 rounded-lg w-full text-red-600 text-sm">
          {errors.root.message}
        </div>
      )}
      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-500 text-sm">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => router.push("/sign-up")}
            className="text-primary hover:underline cursor-pointer"
          >
            Sign Up
          </span>
        </p>{" "}
        <Button type="submit" loading={loading} loader="Signing In...">
          Sign In
        </Button>
      </div>
    </form>
  );
}
