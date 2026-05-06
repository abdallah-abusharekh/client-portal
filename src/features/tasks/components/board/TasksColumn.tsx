"use client";

import { useDroppable } from "@dnd-kit/core";
import TaskCard from "../task/TaskCard";
import { Task, TaskStatus } from "../../types/task.types";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { FiMoreVertical, FiPlus } from "react-icons/fi";
import { useRef, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useClickOutside } from "@/src/shared/hooks/useClickOutside";
import { useDeleteTaskModal } from "../../hooks/useDeleteTaskModal";
import { useDeleteTask } from "../../hooks/useDeleteTask";
import toast from "react-hot-toast";
import ConfirmModal from "@/src/shared/components/ConfirmModal";
import { useAuth } from "@/src/features/auth/contexts/AuthContext";

type Props = {
  title: string;
  tasks: Task[];
  status: TaskStatus;
  onAddTask: (status: TaskStatus) => void;
  openEditModal: (task: Task) => void;

  onDeleteColumn: (status: TaskStatus) => void;

  color?: string;
};
export default function TasksColumn({
  title,
  tasks,
  status,
  onAddTask,
  openEditModal,
  color = "text-gray-600",
  onDeleteColumn,
}: Props) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });
  const { role } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [columnTitle, setColumnTitle] = useState(title);
  const menuRef = useRef<HTMLDivElement>(null);

  const deleteModal = useDeleteTaskModal();
  const { mutate: deleteTask } = useDeleteTask();

  useClickOutside(menuRef, () => {
    if (openMenu) setOpenMenu(false);
  });

  const sortedTasks = [...tasks].sort((a, b) => a.order - b.order);

  function confirmDeleteTask() {
    if (!deleteModal.task) return;

    deleteTask(deleteModal.task.id, {
      onSuccess: () => {
        toast.success("Task deleted");
        deleteModal.closeModal();
      },
      onError: () => {
        toast.error("Failed to delete task");
      },
    });
  }

  return (
    <div
      ref={setNodeRef}
      className={`${color} bg-gray-50 rounded-2xl shadow-sm p-3 flex flex-col gap-3 min-h-30 max-h-75 overflow-x-hidden overflow-y-auto transition ${
        isOver ? "bg-blue-50" : ""
      }`}
    >
      <div className="relative flex justify-between items-center">
        {isEditing ? (
          <input
            value={columnTitle}
            onChange={(e) => setColumnTitle(e.target.value)}
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setIsEditing(false);
              }
            }}
            autoFocus
            className="px-2 rounded-md outline-1 outline-gray-500"
          />
        ) : (
          <h3 className={`font-semibold text-sm`}>{columnTitle}</h3>
        )}

        {role === "freelancer" && (
          <div className="flex items-center gap-1">
            {/*  Add Task */}
            <button
              onClick={() => onAddTask(status)}
              className="hover:bg-gray-200 p-1 rounded-md transition"
            >
              <FiPlus className="text-gray-600 text-sm" />
            </button>

            {/* Menu */}
            <button
              onClick={() => setOpenMenu((prev) => !prev)}
              className="hover:bg-gray-200 p-1 rounded-md transition"
            >
              <FiMoreVertical className="text-gray-600 text-sm" />
            </button>
          </div>
        )}

        {/* Dropdown */}
        {openMenu && (
          <div
            ref={menuRef}
            className="top-8 right-0 z-50 absolute bg-white shadow-md border border-gray-200 rounded-lg w-32"
          >
            <button
              onClick={() => {
                setIsEditing(true);
                setOpenMenu(false);
              }}
              className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 w-full text-sm text-left"
            >
              Rename <BiEdit />
            </button>

            <button
              onClick={() => {
                onDeleteColumn(status);
                setOpenMenu(false);
              }}
              className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 w-full text-red-500 text-sm text-left"
            >
              Delete <BiTrash />
            </button>
          </div>
        )}
      </div>

      {role === "freelancer" ? (
        <SortableContext
          items={sortedTasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="flex flex-col gap-3">
            {sortedTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={openEditModal}
                onDelete={deleteModal.openModal}
              />
            ))}
          </div>
        </SortableContext>
      ) : (
        <div className="flex flex-col gap-3">
          {sortedTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={openEditModal}
              onDelete={deleteModal.openModal}
            />
          ))}
        </div>
      )}

      <ConfirmModal
        open={deleteModal.open}
        onClose={deleteModal.closeModal}
        onConfirm={confirmDeleteTask}
        title="Delete Task"
        description="Are you sure you want to delete this task?"
        confirmText="Delete"
        variant="danger"
      />
    </div>
  );
}
