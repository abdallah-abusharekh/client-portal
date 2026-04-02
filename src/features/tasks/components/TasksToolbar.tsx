import Card from "@/src/shared/components/Card";
import SearchInput from "@/src/shared/components/SearchInput";
import Select from "@/src/shared/components/Select";
import { priorityOptions } from "../constants/task-priority";
import { PriorityFilter } from "../types/task.types";

type Props = {
  search: string;
  priority: PriorityFilter;
  onSearchChange: (value: string) => void;
  onPriorityChange: (value: PriorityFilter) => void;
};

export default function TasksToolbar({
  search,
  priority,
  onSearchChange,
  onPriorityChange,
}: Props) {
  return (
    <Card className="flex flex-wrap sm:flex-nowrap items-center gap-4 p-4">
      <SearchInput
        value={search}
        onChange={onSearchChange}
        placeholder="Search tasks..."
        className="w-full"
      />
      <div className="flex items-center gap-2">
        <label
          htmlFor="priority"
          className="font-medium text-gray-700 text-sm"
        ></label>
        Priority:
        <Select
          value={priority}
          onChange={onPriorityChange}
          options={priorityOptions}
          className="w-40"
        />
      </div>
    </Card>
  );
}
