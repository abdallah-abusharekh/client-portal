"use client";

import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

import Card from "../../../shared/components/Card";
import { Container } from "../../../shared/components/Container";
import Reveal from "../../../shared/animation/Reveal";
import { useAuth } from "../../auth/contexts/AuthContext";

import ProfileAvatar from "./ProfileAvatar";
import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import ProfileEditForm from "./ProfileEditModal";

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  if (loading) {
    return (
      <Container>
        <div className="mx-auto mt-12 max-w-lg animate-pulse">
          <div className="bg-gray-200 mx-auto mb-4 rounded-full w-24 h-24" />
          <div className="bg-gray-200 mx-auto mb-2 rounded w-1/2 h-6" />
          <div className="bg-gray-100 mx-auto mb-6 rounded w-1/3 h-4" />
          <div className="bg-gray-100 mx-auto mb-1 rounded w-1/4 h-4" />
          <div className="bg-gray-100 mx-auto rounded w-1/4 h-4" />
        </div>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container>
        <Card className="mx-auto mt-12 max-w-lg text-center">
          <h2 className="mb-2 font-semibold text-lg">Not signed in</h2>
          <p className="text-gray-500">Please sign in to view your profile.</p>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Reveal>
        <Card className="relative flex flex-col gap-6 mx-auto mt-12 p-8 max-w-lg">
          {!isEditing ? (
            <>
              <div className="flex flex-col items-center gap-4">
                <ProfileAvatar
                  src={user.avatarUrl || "/avatars/avatar1.png"}
                  alt={user.name}
                />

                <ProfileHeader user={user} />
                <ProfileStats user={user} />
              </div>

              <button
                className="top-3 right-3 absolute bg-primary hover:bg-primary-dark p-2 rounded-full text-white transition"
                onClick={() => setIsEditing(true)}
                aria-label="Edit profile"
              >
                <FiEdit2 />
              </button>
            </>
          ) : (
            <div>
              <div className="mb-6">
                <h2 className="font-bold text-gray-900 text-2xl">
                  Edit Profile
                </h2>
                <p className="mt-1 text-gray-500 text-sm">
                  Update your personal information.
                </p>
              </div>

              <ProfileEditForm
                onCancel={() => setIsEditing(false)}
                onSuccess={() => setIsEditing(false)}
              />
            </div>
          )}
        </Card>
      </Reveal>
    </Container>
  );
}
