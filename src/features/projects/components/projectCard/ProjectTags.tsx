import Badge from "@/src/shared/components/Badge";
import { Project } from "../../types/project.types";
import { formatLabel } from "../../services/projects.service";

type Props = {
  project: Project;
};

export default function ProjectTags({ project }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge value={project.status}>{formatLabel(project.status)}</Badge>
      <Badge value={project.priority}>{formatLabel(project.priority)}</Badge>

      {project.tags.map((tag, index) => (
        <Badge key={index} value={tag.label}>
          {tag.label}
        </Badge>
      ))}
    </div>
  );
}
