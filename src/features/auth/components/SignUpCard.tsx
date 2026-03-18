"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { UserRole } from "../types/user.types";
import { useAuth } from "../contexts/AuthContext";
import { DEMO_CREDENTIALS } from "../mocks/users.mock";
import { signUpSchema, SignUpFormValues } from "../schemas/auth.schema";

import RoleSelector from "./RoleLoginButtons";
import BasicFields from "./BasicFields";

import Logo from "@/src/shared/components/Logo";
import Button from "@/src/shared/components/Button";

export default function SignUpCard() {
  const router = useRouter();
  const { signup, loading } = useAuth();

  const [role, setRole] = useState<UserRole>("freelancer");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "Test User",
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

  const onSubmit = async (data: SignUpFormValues) => {
    try {
      await signup(data.name, data.email, role);
      router.push("/sign-up-success");
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-4 bg-background shadow-xl px-12 py-8 rounded-2xl w-105"
    >
      <Logo />

      <div className="text-center">
        <h1 className="font-semibold text-2xl">Create Account</h1>
        <p className="text-gray-500 text-sm">Join the Client Portal platform</p>
      </div>

      <RoleSelector role={role} onChange={handleRoleChange} />

      <div className="space-y-1 w-full">
        <label className="font-medium text-sm">Full Name</label>

        <input
          {...register("name")}
          type="text"
          placeholder="John Doe"
          className="bg-white px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary w-full transition"
        />

        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <BasicFields register={register} errors={errors} />

      <Button
        type="submit"
        loading={loading}
        loader="Creating Account..."
        className="w-full"
      >
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
    </form>
  );
}
