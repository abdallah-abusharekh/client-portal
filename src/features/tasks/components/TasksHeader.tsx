import Button from "@/src/shared/components/Button";
import { FiPlus } from "react-icons/fi";

export default function TasksHeader() {
  return (
    <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-4">
      <div>
        <h1 className="font-semibold text-xl">Tasks</h1>
        <p className="text-gray-500 text-sm">Manage and organize your work</p>
      </div>

      <Button className="flex items-center gap-2">
        <FiPlus />
        New Task
      </Button>
    </div>
  );
}
