"use client";

import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

type Props = {
  name: string;
};

export default function DashboardHeader({ name }: Props) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="font-semibold text-gray-900 text-2xl">
          Welcome back, {name}!
        </h1>

        <p className="mt-1 text-gray-500">Here's your work overview</p>
      </div>

      <Link
        href="/freelancer/tasks"
        className="flex items-center gap-2 bg-(--color-primary) hover:bg-(--color-primary-dark) px-4 py-2 rounded-lg text-white transition"
      >
        <FiCheckCircle />
        View Tasks
      </Link>
    </div>
  );
}
