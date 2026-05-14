import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  profileEditSchema,
  ProfileEditValues,
} from "../schemas/profileEdit.schema";
import Card from "../../../shared/components/Card";
import Button from "../../../shared/components/Button";
import { useAuth } from "../../auth/contexts/AuthContext";
import ModalOverlay from "@/src/shared/components/ModalOverlay";

export default function ProfileEditModal({ onClose }: { onClose: () => void }) {
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
    await new Promise((res) => setTimeout(res, 500));
    const updatedUser = { ...user, ...data };
    setUser(updatedUser);
    localStorage.setItem("client-portal-session", JSON.stringify(updatedUser));
    setSaving(false);
    onClose();
  }

  return (
    <ModalOverlay open={true}>
      <Card className="relative p-6 w-full max-w-md">
        <button
          className="top-2 right-2 absolute text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="mb-4 font-bold text-xl">Edit Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-sm" htmlFor="name">
              Name
            </label>
            <input
              className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition"
              id="name"
              {...register("name")}
              value={undefined}
              placeholder="Name"
              required
            />
            {errors.name && (
              <div className="mt-1 text-red-500 text-xs">
                {errors.name.message}
              </div>
            )}
          </div>
          <div>
            <label
              className="block mb-1 font-medium text-sm"
              htmlFor="jobTitle"
            >
              Job Title
            </label>
            <input
              className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition"
              id="jobTitle"
              {...register("jobTitle")}
              value={undefined}
              placeholder="Job Title"
            />
            {errors.jobTitle && (
              <div className="mt-1 text-red-500 text-xs">
                {errors.jobTitle.message}
              </div>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition"
              id="email"
              type="email"
              {...register("email")}
              value={undefined}
              placeholder="Email"
              required
            />
            {errors.email && (
              <div className="mt-1 text-red-500 text-xs">
                {errors.email.message}
              </div>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm" htmlFor="bio">
              Bio
            </label>
            <textarea
              className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm transition"
              id="bio"
              {...register("bio")}
              rows={3}
              placeholder="Bio"
            />
            {errors.bio && (
              <div className="mt-1 text-red-500 text-xs">
                {errors.bio.message}
              </div>
            )}
          </div>
          <Button type="submit" loading={saving} className="w-full">
            Save
          </Button>
        </form>
      </Card>
    </ModalOverlay>
  );
}
