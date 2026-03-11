"use client";

import { FiShield, FiUser, FiUsers } from "react-icons/fi";
import { UserRole } from "../types/user.types";

type Props = {
  role: UserRole;
  onChange: (role: UserRole) => void;
};

const roles = [
  { label: "Admin", value: "admin", icon: FiShield },
  { label: "Freelancer", value: "freelancer", icon: FiUser },
  { label: "Customer", value: "customer", icon: FiUsers },
];

export default function RoleSelector({ role, onChange }: Props) {
  return (
    <div className="space-y-2">
      <div className="gap-3 grid grid-cols-3">
        {roles.map((r) => {
          const Icon = r.icon;
          const active = role === r.value;

          return (
            <button
              key={r.value}
              onClick={() => onChange(r.value as UserRole)}
              className={`flex flex-col items-center justify-center gap-2 rounded-xl border py-2 px-4 transition
              ${
                active
                  ? "border-primary bg-primary-light/10"
                  : "border-gray-200 hover:border-primary-light"
              }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-lg
                ${active ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}
              >
                <Icon />
              </div>

              <span className="text-sm">{r.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
