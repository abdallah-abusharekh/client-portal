import { FiPlus } from "react-icons/fi";
import Button from "@/src/shared/components/Button";
import PageHeader from "../../../shared/components/PageHeader";

type Props = {
  onCreate: () => void;
};

export default function ProjectsHeader({ onCreate }: Props) {
  return (
    <PageHeader
      title="Projects"
      subtitle="Manage and track all your projects"
      action={
        <Button onClick={onCreate} className="flex items-center gap-2">
          <FiPlus />
          New Project
        </Button>
      }
    />
  );
}
