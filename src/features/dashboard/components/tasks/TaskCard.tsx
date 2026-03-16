import Card from "@/src/shared/components/Card";

import { FiCalendar } from "react-icons/fi";
import { Task } from "../../types/dashboard.types";
import Image from "next/image";

type Props = {
  task: Task;
};

export default function TaskCard({ task }: Props) {
  const priorityStyles = {
    high: "bg-red-100 text-red-600",
    medium: "bg-yellow-100 text-yellow-700",
    low: "bg-green-100 text-green-600",
  };

  return (
    <Card className="flex flex-col justify-between space-y-4 hover:shadow-md transition">
      <div>
        <h3 className="font-medium text-gray-900">{task.title}</h3>

        <p className="text-gray-500 text-sm">{task.description}</p>
      </div>

      <span
        className={`text-xs px-2 py-1 rounded-full font-medium w-fit ${priorityStyles[task.priority]}`}
      >
        {task.priority}
      </span>

      <div className="flex justify-between items-center">
        <Image
          src={task.assigneeAvatar}
          alt={task.title}
          className="rounded-full w-7 h-7"
          width={7}
          height={7}
        />

        <div className="flex items-center gap-1 text-red-500 text-sm">
          <FiCalendar />
          <span>{task.dueDate}</span>
        </div>
      </div>
    </Card>
  );
}
