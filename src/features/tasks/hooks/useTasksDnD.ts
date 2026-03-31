"use client";

import { DragEndEvent, DragStartEvent, DragOverEvent } from "@dnd-kit/core";
import { useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { arrayMove } from "@dnd-kit/sortable";
import { Task } from "../types/task.types";
import { getStatusFromOver } from "../utils/dnd.utils";

export function useTasksDnD(tasks: Task[], updateTask: any) {
  const queryClient = useQueryClient();

  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const prevStatusRef = useRef<string | null>(null);

  function handleDragStart(event: DragStartEvent) {
    const taskId = event.active.id as string;
    const task = tasks.find((t) => t.id === taskId);
    if (task) setActiveTask(task);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    setActiveTask(null);
    prevStatusRef.current = null;

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    if (activeId === overId) return;

    const activeTask = tasks.find((t) => t.id === activeId);
    if (!activeTask) return;

    const newStatus = getStatusFromOver(overId, tasks);
    if (!newStatus) return;

    // Move between columns
    if (activeTask.status !== newStatus) {
      updateTask({ taskId: activeId, status: newStatus });
      return;
    }

    // Reorder inside column
    const columnTasks = tasks.filter((t) => t.status === activeTask.status);

    const oldIndex = columnTasks.findIndex((t) => t.id === activeId);

    let newIndex;
    const overTask = tasks.find((t) => t.id === overId);

    if (overTask) {
      newIndex = columnTasks.findIndex((t) => t.id === overId);
    } else {
      newIndex = columnTasks.length - 1;
    }

    if (oldIndex === -1 || newIndex === -1) return;

    const reordered = arrayMove(columnTasks, oldIndex, newIndex);

    queryClient.setQueryData(["tasks"], (old: Task[] = []) => {
      const otherTasks = old.filter((t) => t.status !== activeTask.status);
      return [...otherTasks, ...reordered];
    });
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    const activeTask = tasks.find((t) => t.id === activeId);
    if (!activeTask) return;

    const newStatus = getStatusFromOver(overId, tasks);
    if (!newStatus) return;

    if (activeTask.status === newStatus) return;
    if (prevStatusRef.current === newStatus) return;

    prevStatusRef.current = newStatus;

    queryClient.setQueryData(["tasks"], (old: Task[] = []) =>
      old.map((t) => (t.id === activeId ? { ...t, status: newStatus } : t)),
    );
  }

  return {
    activeTask,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
  };
}
