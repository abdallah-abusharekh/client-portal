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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <div className="space-y-1 mb-6">
        <h1 className="font-semibold text-slate-900 text-2xl">
          Create account
        </h1>
        <p className="text-slate-500 text-sm">
          Join Client Portal and start managing projects with clarity.
        </p>
      </div>

      <RoleSelector role={role} onChange={handleRoleChange} />

      <div className="space-y-1 w-full">
        <label className="font-medium text-sm">Full Name</label>

        <input
          {...register("name")}
          type="text"
          placeholder="John Doe"
          className="bg-white px-3 py-2 border border-gray-300 rounded-lg outline-none ring-1 ring-primary focus:ring-2 w-full transition"
        />

        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <BasicFields register={register} errors={errors} />

      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-500 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/sign-in")}
            className="text-primary hover:underline cursor-pointer"
          >
            Sign In
          </span>
        </p>
        <Button type="submit" loading={loading} loader="Creating Account...">
          Create Account
        </Button>
      </div>
    </form>
  );
}
