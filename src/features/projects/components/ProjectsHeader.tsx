import { FiPlus } from "react-icons/fi";
import Button from "@/src/shared/components/Button";

type Props = {
  onCreate: () => void;
};

export default function ProjectsHeader({ onCreate }: Props) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h1 className="font-semibold text-2xl">Projects</h1>
        <p className="text-gray-500 text-sm">
          Manage and track all your projects
        </p>
      </div>

      <Button onClick={onCreate} className="flex items-center gap-2">
        <FiPlus />
        New Project
      </Button>
    </div>
  );
}
