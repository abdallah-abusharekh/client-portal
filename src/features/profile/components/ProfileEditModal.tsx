"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import Button from "../../../shared/components/Button";
import { useAuth } from "../../auth/contexts/AuthContext";
import {
  profileEditSchema,
  ProfileEditValues,
} from "../schemas/profileEdit.schema";

export default function ProfileEditForm({
  onCancel,
  onSuccess,
}: {
  onCancel: () => void;
  onSuccess: () => void;
}) {
  const { user, setUser } = useAuth();
  const [saving, setSaving] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileEditValues>({
    resolver: zodResolver(profileEditSchema),
    defaultValues: {
      name: user?.name || "",
      jobTitle: user?.jobTitle || "",
      email: user?.email || "",
      bio: user?.bio || "",
    },
  });

  useEffect(() => {
    reset({
      name: user?.name || "",
      jobTitle: user?.jobTitle || "",
      email: user?.email || "",
      bio: user?.bio || "",
    });
  }, [user, reset]);

  async function onSubmit(data: ProfileEditValues) {
    if (!user) return;

    setSaving(true);

    const updatedUser = { ...user, ...data };

    setUser(updatedUser);
    localStorage.setItem("client-portal-session", JSON.stringify(updatedUser));

    setSaving(false);

    toast.success("Profile updated successfully!");
    onSuccess();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-sm">
            Name
          </label>

          <input
            id="name"
            {...register("name")}
            placeholder="Name"
            className="px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary/20 w-full text-sm transition"
          />

          {errors.name && (
            <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="jobTitle" className="block mb-1 font-medium text-sm">
            Job Title
          </label>

          <input
            id="jobTitle"
            {...register("jobTitle")}
            placeholder="Job Title"
            className="px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary/20 w-full text-sm transition"
          />

          {errors.jobTitle && (
            <p className="mt-1 text-red-500 text-xs">
              {errors.jobTitle.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 font-medium text-sm">
          Email
        </label>

        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder="Email"
          className="px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary/20 w-full text-sm transition"
        />

        {errors.email && (
          <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="bio" className="block mb-1 font-medium text-sm">
          Bio
        </label>

        <textarea
          id="bio"
          {...register("bio")}
          rows={4}
          placeholder="Bio"
          className="px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary/20 w-full text-sm transition resize-none"
        />

        {errors.bio && (
          <p className="mt-1 text-red-500 text-xs">{errors.bio.message}</p>
        )}
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>

        <Button type="submit" loading={saving}>
          Save Changes
        </Button>
      </div>
    </form>
  );
}
