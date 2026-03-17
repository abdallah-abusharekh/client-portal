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

import Logo from "@/src/shared/components/Logo";
import Button from "@/src/shared/components/Button";

export default function SignInCard() {
  const { login, loading } = useAuth();
  const router = useRouter();

  const [role, setRole] = useState<UserRole>("freelancer");

  const {
    register,
    handleSubmit,
    setValue,
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
      await login(role);
      router.push(`/${role}/dashboard`);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-4 bg-background shadow-xl px-12 py-8 rounded-2xl"
    >
      <Logo />

      <div className="mb-4 text-center">
        <h1 className="font-semibold text-2xl">Client Portal</h1>
        <p className="text-gray-500 text-sm">
          Professional project management platform
        </p>
      </div>

      <RoleSelector role={role} onChange={handleRoleChange} />

      <BasicFields register={register} errors={errors} />

      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password.message}</p>
      )}

      <Button type="submit" loading={loading} className="w-full">
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
    </form>
  );
}
