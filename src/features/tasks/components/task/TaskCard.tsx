import { memo } from "react";
import TaskMeta from "./TaskMeta";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { Task } from "../../types/task.types";
import Badge from "@/src/shared/components/Badge";

type Props = {
  task: Task;
};

function TaskCard({ task }: Props) {
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
      <h4 className="font-medium text-sm">{task.title}</h4>

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
