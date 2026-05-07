import React from "react";
import { AppUser } from "../../auth/types/user.types";

export default function ProfileHeader({ user }: { user: AppUser }) {
  return (
    <>
      <h2 className="font-bold text-2xl text-center">{user.name}</h2>
      {user.jobTitle && (
        <div className="font-medium text-primary text-sm text-center">
          {user.jobTitle}
        </div>
      )}
      <div className="text-gray-500 text-sm">{user.email}</div>
      <div className="flex items-center gap-2 mb-2 text-gray-400 text-xs">
        <span className="bg-primary-light px-2 py-1 rounded text-white capitalize">
          {user.role}
        </span>
        <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
      </div>
      {user.bio && (
        <div className="mb-2 text-gray-700 text-sm text-center whitespace-pre-line">
          {user.bio}
        </div>
      )}
    </>
  );
}
