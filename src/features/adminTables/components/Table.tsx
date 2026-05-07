"use client";

import Image from "next/image";
import { FiPauseCircle, FiPlayCircle, FiTrash2 } from "react-icons/fi";
import { useState } from "react";
import ConfirmModal from "@/src/shared/components/ConfirmModal";
import toast from "react-hot-toast";
import { BaseUser } from "../../auth/types/user.types";

export default function Table({
  users,
  setUsers,
  selectedUserIds,
  onToggleUserSelection,
  onToggleAllUsersSelection,
  allUsersSelected,
}: {
  users: BaseUser[];
  setUsers: React.Dispatch<React.SetStateAction<BaseUser[]>>;
  selectedUserIds: string[];
  onToggleUserSelection: (id: string) => void;
  onToggleAllUsersSelection: () => void;
  allUsersSelected: boolean;
}) {
  const [selectedUser, setSelectedUser] = useState<BaseUser | null>(null);
  const [openConfirm, setOpenConfirm] = useState<"delete" | "suspend" | false>(
    false,
  );

  const handleDeleteConfirm = (item: BaseUser) => {
    setUsers((prev) => prev.filter((prev) => prev.id !== item.id));
    setOpenConfirm(false);
    toast.success("User deleted successfully");
  };
  const handleSuspendConfirm = (item: BaseUser) => {
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

  return (
    <table className="rounded-lg w-full">
      <thead className="bg-gray-100 border-gray-200 border-b-2">
        <tr>
          {users.length > 0 &&
            Object.keys(users[0])
              .slice(2)
              .map((key) => (
                <th
                  key={key}
                  className="p-3 font-semibold text-sm text-start tracking-wide"
                >
                  {key === "name" ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={allUsersSelected}
                        onChange={onToggleAllUsersSelection}
                      />
                      <span>{key}</span>
                    </div>
                  ) : (
                    key
                  )}
                </th>
              ))}
          <th className="p-3 font-semibold text-sm text-start tracking-wide">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((item) => (
          <tr key={item.id} className="even:bg-gray-50 odd:bg-white">
            {Object.values(item)
              .slice(2)
              .map((value, index) => {
                const val = String(value);
                const key = Object.keys(item)[index + 2];
                return (
                  <td key={index} className="p-3 border-gray-700 text-sm">
                    {key === "name" ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedUserIds.includes(item.id)}
                          onChange={() => onToggleUserSelection(item.id)}
                        />
                        <Image
                          src={item.avatarUrl || "/avatars/avatar1.png"}
                          alt="Avatar"
                          className="rounded-full w-8 h-8"
                          width={32}
                          height={32}
                        />{" "}
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
                        className={`px-2 py-1 rounded-md ${val === "active" ? "bg-green-200 text-green-500" : "bg-red-200 text-red-500"}  text-sm`}
                      >
                        {val}
                      </span>
                    ) : (
                      <span>{val}</span>
                    )}
                  </td>
                );
              })}
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
          </tr>
        ))}
      </tbody>
    </table>
  );
}
