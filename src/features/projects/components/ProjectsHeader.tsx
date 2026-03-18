import { FiPlus } from "react-icons/fi";
import Button from "@/src/shared/components/Button";

export default function ProjectsHeader() {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h1 className="font-semibold text-2xl">Projects</h1>
        <p className="text-gray-500 text-sm">
          Manage and track all your projects
        </p>
      </div>

      <Button className="flex items-center gap-2">
        <FiPlus />
        New Project
      </Button>
    </div>
  );
}
