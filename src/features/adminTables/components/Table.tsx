"use client";

import Image from "next/image";
import { FiPauseCircle, FiPlayCircle, FiTrash2 } from "react-icons/fi";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import ConfirmModal from "@/src/shared/components/ConfirmModal";
import toast from "react-hot-toast";
import { BaseUser } from "../../auth/types/user.types";
import { ProjectStatus } from "../../projects/types/project.types";

type RowData = {
  id: string;
  avatarUrl?: string;
};

type TableVariant = "users" | "projects";

const projectStatusClassMap: Record<ProjectStatus, string> = {
  "in-progress": "bg-blue-200 text-blue-700",
  review: "bg-amber-200 text-amber-700",
  completed: "bg-green-200 text-green-700",
  paused: "bg-gray-200 text-gray-700",
};

function isUserRow(item: RowData): item is BaseUser {
  const row = item as Record<string, unknown>;
  return typeof row.email === "string" && typeof row.role === "string";
}

export default function Table({
  users,
  setUsers,
  selectedUserIds,
  onToggleUserSelection,
  onToggleAllUsersSelection,
  allUsersSelected,
  variant = "users",
  onDeleteProject,
}: {
  users: RowData[];
  setUsers?: Dispatch<SetStateAction<BaseUser[]>>;
  selectedUserIds?: string[];
  onToggleUserSelection?: (id: string) => void;
  onToggleAllUsersSelection?: () => void;
  allUsersSelected?: boolean;
  variant?: TableVariant;
  onDeleteProject?: (projectId: string) => void;
}) {
  const [selectedUser, setSelectedUser] = useState<BaseUser | null>(null);
  const [openConfirm, setOpenConfirm] = useState<"delete" | "suspend" | false>(
    false,
  );
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  const handleDeleteConfirm = (item: BaseUser) => {
    if (!setUsers) return;
    setUsers((prev) => prev.filter((prev) => prev.id !== item.id));
    setOpenConfirm(false);
    toast.success("User deleted successfully");
  };

  const handleSuspendConfirm = (item: BaseUser) => {
    if (!setUsers) return;
    setUsers((prev) =>
      prev.map((user) =>
        user.id === item.id
          ? {
              ...user,
              status: user.status === "active" ? "suspended" : "active",
            }
          : user,
      ),
    );

    setOpenConfirm(false);

    toast.success(
      item.status === "active"
        ? "User suspended successfully"
        : "User activated successfully",
    );
  };

  const columnKeys =
    users.length > 0
      ? Object.keys(users[0]).filter(
          (key) => key !== "id" && key !== "avatarUrl",
        )
      : [];
  const showRowSelection = variant === "users";
  const showActions = variant === "users" || variant === "projects";

  return (
    <table className="rounded-lg w-full">
      <thead className="bg-gray-100 border-gray-200 border-b-2">
        <tr>
          {columnKeys.map((key) => (
            <th
              key={key}
              className="p-3 font-semibold text-sm text-start capitalize tracking-wide"
            >
              {key === "name" && showRowSelection ? (
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={Boolean(allUsersSelected)}
                    onChange={onToggleAllUsersSelection}
                  />
                  <span>{key}</span>
                </div>
              ) : (
                key
              )}
            </th>
          ))}
          {showActions && (
            <th className="p-3 font-semibold text-sm text-start tracking-wide">
              Actions
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {users.map((item) => (
          <tr key={item.id} className="even:bg-gray-50 odd:bg-white">
            {columnKeys.map((key) => {
              const row = item as Record<string, unknown>;
              const value = row[key];
              const val = String(value ?? "-");
              return (
                <td key={key} className="p-3 border-gray-700 text-sm">
                  {key === "name" ? (
                    <div className="flex items-center gap-2">
                      {showRowSelection && (
                        <input
                          type="checkbox"
                          checked={Boolean(selectedUserIds?.includes(item.id))}
                          onChange={() => onToggleUserSelection?.(item.id)}
                        />
                      )}
                      {"avatarUrl" in item &&
                        typeof item.avatarUrl === "string" && (
                          <Image
                            src={item.avatarUrl || "/avatars/avatar1.png"}
                            alt="Avatar"
                            className="rounded-full w-8 h-8"
                            width={32}
                            height={32}
                          />
                        )}
                      <span>{val}</span>
                    </div>
                  ) : key === "email" ? (
                    <span className="text-primary underline">{val}</span>
                  ) : key === "role" ? (
                    <span
                      className={`px-2 py-1 rounded-md text-primary-dark text-sm font-bold`}
                    >
                      {val}
                    </span>
                  ) : key === "status" ? (
                    <span
                      className={`px-2 py-1 rounded-md text-sm ${
                        val === "active"
                          ? "bg-green-200 text-green-500"
                          : val === "suspended"
                            ? "bg-red-200 text-red-500"
                            : projectStatusClassMap[val as ProjectStatus] ||
                              "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {val}
                    </span>
                  ) : key === "priority" ? (
                    <span
                      className={`px-2 py-1 rounded-md text-sm ${
                        val === "high"
                          ? "bg-red-100 text-red-700"
                          : val === "medium"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {val}
                    </span>
                  ) : (
                    <span>{val}</span>
                  )}
                </td>
              );
            })}
            {showActions && isUserRow(item) && (
              <td className="p-3 border-gray-700 text-sm">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setOpenConfirm("suspend");
                      setSelectedUser(item);
                    }}
                    className="text-yellow-500 hover:text-yellow-700 transition"
                  >
                    {item.status === "active" ? (
                      <FiPauseCircle size={18} />
                    ) : (
                      <FiPlayCircle size={18} />
                    )}
                  </button>
                  <ConfirmModal
                    open={openConfirm === "suspend"}
                    variant="alert"
                    title={`${item.status === "active" ? "Suspend" : "Activate"} User`}
                    description={`Are you sure that you want to ${item.status === "active" ? "suspend" : "activate"} this user?`}
                    onConfirm={() =>
                      selectedUser && handleSuspendConfirm(selectedUser)
                    }
                    onClose={() => {
                      setSelectedUser(null);
                      setOpenConfirm(false);
                    }}
                  />
                  <button
                    onClick={() => {
                      setOpenConfirm("delete");
                      setSelectedUser(item);
                    }}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FiTrash2 size={18} />
                  </button>
                  <ConfirmModal
                    open={openConfirm === "delete"}
                    variant="danger"
                    title="Delete User"
                    description="Are you sure that you want to delete this user?"
                    onConfirm={() =>
                      selectedUser && handleDeleteConfirm(selectedUser)
                    }
                    onClose={() => {
                      setSelectedUser(null);
                      setOpenConfirm(false);
                    }}
                  />
                </div>
              </td>
            )}
            {variant === "projects" && (
              <td className="p-3 border-gray-700 text-sm">
                <button
                  onClick={() => setSelectedProjectId(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <FiTrash2 size={18} />
                </button>
                <ConfirmModal
                  open={selectedProjectId === item.id}
                  variant="danger"
                  title="Delete Project"
                  description="Are you sure that you want to delete this project?"
                  onConfirm={() => {
                    if (selectedProjectId && onDeleteProject) {
                      onDeleteProject(selectedProjectId);
                      toast.success("Project deleted successfully");
                    }
                    setSelectedProjectId(null);
                  }}
                  onClose={() => setSelectedProjectId(null)}
                />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
