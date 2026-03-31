import Button from "@/src/shared/components/Button";
import { FiPlus } from "react-icons/fi";
import PageHeader from "../../shared/components/PageHeader";

export default function TasksHeader({ onCreate }: { onCreate: () => void }) {
  return (
    <PageHeader
      title="Tasks"
      subtitle="Manage and organize your tasks efficiently"
      action={
        <Button onClick={onCreate} className="flex items-center gap-2">
          <FiPlus />
          New Task
        </Button>
      }
    />
  );
}
