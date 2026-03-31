import Input from "@/src/shared/components/Input";
import Button from "@/src/shared/components/Button";
import { FiSearch, FiFilter } from "react-icons/fi";

export default function TasksToolbar() {
  return (
    <div className="flex md:flex-row flex-col gap-3">
      <div className="relative flex-1">
        <FiSearch className="top-1/2 left-3 absolute text-gray-400 -translate-y-1/2" />

        <Input placeholder="Search tasks..." className="pl-10" />
      </div>

      <Button variant="secondary" className="flex gap-2">
        <FiFilter />
        Filter
      </Button>
    </div>
  );
}
