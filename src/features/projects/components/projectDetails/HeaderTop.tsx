import Badge from "@/src/shared/components/Badge";
import Button from "@/src/shared/components/Button";
import { ProjectDetails, ProjectStatus } from "../../types/project.types";
import { FiEdit2, FiMoreHorizontal } from "react-icons/fi";
import Dropdown from "@/src/shared/components/Dropdown";

type Props = {
  project: ProjectDetails;
  onStatusChange: (status: ProjectStatus) => void;
  onEdit: () => void;
};

export default function HeaderTop({ project, onStatusChange, onEdit }: Props) {
  return (
    <div className="flex justify-between items-start">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-semibold text-xl">{project.title}</h1>

          <Badge value={project.status} />
        </div>

        <p className="max-w-2xl text-gray-500 text-sm">{project.description}</p>

        <div className="flex gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className="bg-gray-100 px-3 py-1 rounded-full text-gray-600 text-xs"
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-wrap items-center border border-gray-300 rounded-md">
          <Dropdown
            trigger={<FiMoreHorizontal className="w-4 h-4 text-gray-500" />}
            items={[
              {
                label: "Move to In Progress",
                onClick: () => onStatusChange("in-progress"),
              },
              {
                label: "Move to Review",
                onClick: () => onStatusChange("review"),
              },
              {
                label: "Move to Completed",
                onClick: () => onStatusChange("completed"),
              },
              {
                label: "Pause Project",
                onClick: () => onStatusChange("paused"),
              },
            ]}
          />
        </div>
        <Button
          variant="secondary"
          size="sm"
          aria-label="Edit project"
          onClick={onEdit}
        >
          <FiEdit2 />
        </Button>
      </div>
    </div>
  );
}
