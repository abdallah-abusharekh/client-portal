"use client";

import {
  DndContext,
  DragOverlay,
  useSensors,
  PointerSensor,
  useSensor,
} from "@dnd-kit/core";

import { useTasks } from "./hooks/useTasks";
import { useUpdateTask } from "./hooks/useUpdateTask";
import { useTasksDnD } from "./hooks/useTasksDnD";

import TasksPage from "./components/TasksPage";
import TaskCard from "./components/task/TaskCard";

export default function TasksPageContainer() {
  const { data: tasks = [], isLoading, isError } = useTasks();
  const { mutate: updateTask } = useUpdateTask();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
  );

  const { activeTask, handleDragStart, handleDragEnd, handleDragOver } =
    useTasksDnD(tasks, updateTask);

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <TasksPage tasks={tasks} isLoading={isLoading} isError={isError} />

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
