import Button from "@/src/shared/components/Button";
import { FiPlus } from "react-icons/fi";
import PageHeader from "../../../shared/components/PageHeader";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

export default function TasksHeader({ onCreate }: { onCreate: () => void }) {
  return (
    <div className="space-y-2">
      <Link
        href="/projects/1"
        className="flex items-center gap-1 text-gray-500 hover:text-black text-sm transition-colors"
      >
        <BiArrowBack />
        Back
      </Link>
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
    </div>
  );
}
