import { Filters, Task } from "../types/task.types";

export function matchesSearch(task: Task, query: string) {
  return task.title.toLowerCase().includes(query.toLowerCase());
}

export function filterTasks(tasks: Task[], filters: Filters): Task[] {
  const { search, priority } = filters;

  return tasks.filter((task) => {
    //  Search condition
    const matchesSearch = search
      ? task.title.toLowerCase().includes(search.toLowerCase())
      : true;

    //  Priority condition
    const matchesPriority =
      priority === "all" ? true : task.priority === priority;

    //  BOTH must pass
    return matchesSearch && matchesPriority;
  });
}
