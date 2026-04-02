"use client";

import { useMemo, useState } from "react";
import { PriorityFilter, Task } from "../types/task.types";
import { filterTasks } from "../utils/filterTasks";

type Filters = {
  search: string;
  priority: PriorityFilter;
};

export function useTasksFilters(tasks: Task[]) {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    priority: "all",
  });

  const filteredTasks = useMemo(() => {
    return filterTasks(tasks, filters);
  }, [tasks, filters]);

  const setSearch = (value: string) => {
    setFilters((prev) => ({ ...prev, search: value }));
  };

  const setPriority = (value: PriorityFilter) => {
    setFilters((prev) => ({ ...prev, priority: value }));
  };

  return {
    filters,
    filteredTasks,
    setSearch,
    setPriority,
  };
}
