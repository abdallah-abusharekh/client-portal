"use client";

import {
  DndContext,
  DragOverlay,
  useSensors,
  PointerSensor,
  useSensor,
} from "@dnd-kit/core";
import { useTasks } from "../hooks/useTasks";
import { useTasksDnD } from "../hooks/useTasksDnD";
import TasksPage from "./TasksPage";
import TaskCard from "./task/TaskCard";

export default function TasksPageContainer() {
  const { tasks = [] } = useTasks();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
  );

  const { activeTask, handleDragStart, handleDragEnd, handleDragOver } =
    useTasksDnD(tasks);

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <TasksPage />

      <DragOverlay>
        {activeTask ? (
          <div className="opacity-50 shadow-xl scale-105">
            <TaskCard task={activeTask} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
