import { memo } from "react";
import TaskMeta from "./TaskMeta";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { Task } from "../../types/task.types";
import Badge from "@/src/shared/components/Badge";
import { FiEdit2 } from "react-icons/fi";

type Props = {
  task: Task;
  onEdit: (task: Task) => void;
};

function TaskCard({ task, onEdit }: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    willChange: "transform",
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={`bg-white shadow-sm hover:shadow-md p-4 rounded-xl transition cursor-grab touch-none
        ${isDragging ? "invisible" : ""}
      `}
    >
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-sm">{task.title}</h4>
        <button
          onClick={() => onEdit(task)}
          className="hover:bg-gray-200 p-1 rounded-md transition"
        >
          <FiEdit2 className="text-gray-500 text-sm" />
        </button>
      </div>

      <p className="mt-1 text-gray-500 text-xs line-clamp-2">
        {task.description}
      </p>

      <div className="flex justify-between items-center mt-3">
        <Badge value={task.priority} />

        <TaskMeta dueDate={task.dueDate} avatar={task.avatar} />
      </div>
    </div>
  );
}

export default memo(TaskCard);
