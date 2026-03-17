import { Deadline } from "../../types/deadline.types";
import { FiCalendar } from "react-icons/fi";

type Props = {
  deadline: Deadline;
};

export default function DeadlineItem({ deadline }: Props) {
  const priorityStyles = {
    high: "bg-red-100 text-red-600",
    medium: "bg-yellow-100 text-yellow-700",
    low: "bg-green-100 text-green-600",
  };

  return (
    <div className="flex justify-between items-start bg-gray-50 p-4 rounded-xl">
      <div className="space-y-1">
        <p className="font-medium text-gray-900 text-sm">{deadline.title}</p>

        <p className="text-gray-500 text-xs">{deadline.project}</p>

        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <FiCalendar />
          <span>Due {deadline.dueDate}</span>
        </div>
      </div>

      <span
        className={`text-xs px-2 py-1 rounded-full ${priorityStyles[deadline.priority]}`}
      >
        {deadline.priority}
      </span>
    </div>
  );
}
