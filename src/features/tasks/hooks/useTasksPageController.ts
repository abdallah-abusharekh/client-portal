import toast from "react-hot-toast";
import { TaskFormBase } from "../types/task.types";
import { useCreateTask } from "./useCreateTask";
import { useCreateTaskModal } from "./useCreateTaskModal";
import { useEditTask } from "./useEditTask";
import { useEditTaskModal } from "./useEditTaskModal";
import { useTasks } from "./useTasks";
import { useTasksFilters } from "./useTasksFilters";

export function useTasksPageController() {
  const { tasks, isLoading, isError, refetch } = useTasks();
  const { filters, filteredTasks, setSearch, setPriority } =
    useTasksFilters(tasks);

  const { mutate: createTask } = useCreateTask();
  const { mutate: editTask } = useEditTask();

  const modal = useCreateTaskModal();
  const editModal = useEditTaskModal();

  function handleCreateTask(data: TaskFormBase) {
    createTask(data, {
      onSuccess: () => {
        toast.success("Task created successfully");
        modal.closeModal();
      },
      onError: () => {
        toast.error("Failed to create task");
      },
    });
  }

  function handleUpdateTask(data: TaskFormBase) {
    if (!editModal.task) return;

    editTask(
      { taskId: editModal.task.id, data },
      {
        onSuccess: () => {
          toast.success("Task updated successfully");
          editModal.closeModal();
        },
        onError: () => {
          toast.error("Failed to update task");
        },
      },
    );
  }

  return {
    // data
    tasks,
    filteredTasks,
    isLoading,
    isError,
    refetch,

    // filters
    filters,
    setSearch,
    setPriority,

    // modals
    modal,
    editModal,

    // actions
    handleCreateTask,
    handleUpdateTask,
  };
}
