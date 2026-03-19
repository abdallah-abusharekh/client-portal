import Badge from "@/src/shared/components/Badge";
import { FiCalendar, FiMoreHorizontal, FiMoreVertical } from "react-icons/fi";
import { ProjectTask } from "../../types/project.types";
import { formatDate } from "../../services/projects.service";
import Image from "next/image";
import Dropdown from "@/src/shared/components/Dropdown";

type Props = {
  task: ProjectTask;
  onStatusChange: (id: string, status: ProjectTask["status"]) => void;
};

export default function TaskCard({ task, onStatusChange }: Props) {
  return (
    <div className="group relative space-y-3 bg-white shadow-sm hover:shadow-md p-4 border border-gray-200 rounded-xl transition-all hover:-translate-y-0.5 duration-200">
      <button className="top-3 right-3 absolute hover:bg-gray-100 opacity-0 group-hover:opacity-100 p-1.5 rounded-md scale-90 group-hover:scale-100 transition-all duration-200">
        <FiMoreHorizontal className="w-4 h-4 text-gray-500" />
      </button>

      <div className="top-3 right-3 absolute opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200">
        <Dropdown
          trigger={<FiMoreVertical className="w-4 h-4 text-gray-500" />}
          items={[
            {
              label: "Move to To Do",
              onClick: () => onStatusChange(task.id, "todo"),
            },
            {
              label: "Move to In Progress",
              onClick: () => onStatusChange(task.id, "in-progress"),
            },
            {
              label: "Move to Review",
              onClick: () => onStatusChange(task.id, "review"),
            },
            {
              label: "Move to Completed",
              onClick: () => onStatusChange(task.id, "completed"),
            },
          ]}
        />
      </div>

      <h4 className="font-medium">{task.title}</h4>
      <p className="text-gray-500 text-sm">{task.description}</p>

      <div className="flex gap-2">
        <Badge value={task.priority} />
        <Badge value={task.status} />
      </div>

      <div className="flex justify-between items-center mt-2">
        <Image
          src="/avatars/avatar1.png"
          alt={task?.assignee?.name ?? "Not Assigned"}
          width={32}
          height={32}
          className="rounded-full"
        />

        {task.dueDate && (
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <FiCalendar className="w-3.5 h-3.5" />
            {formatDate(task.dueDate)}
          </div>
        )}
      </div>
    </div>
  );
}
