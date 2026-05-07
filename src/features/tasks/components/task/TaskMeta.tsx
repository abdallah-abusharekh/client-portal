"use client";

import Image from "next/image";
import { useState } from "react";
import { FiCalendar } from "react-icons/fi";

type Props = {
  dueDate?: string;
  assignee?: string;
};

export default function TaskMeta({ dueDate, assignee }: Props) {
  const [random] = useState(() => Math.floor(Math.random() * 5) + 1);

  return (
    <div className="flex items-center gap-2 text-gray-400 text-xs">
      {assignee && (
        <Image
          src={`/avatars/avatar${random}.png`}
          alt="avatar"
          className="rounded-full w-6 h-6"
          width={24}
          height={24}
        />
      )}

      {dueDate && (
        <div className="flex items-center gap-1">
          <FiCalendar size={12} />
          {dueDate}
        </div>
      )}
    </div>
  );
}
