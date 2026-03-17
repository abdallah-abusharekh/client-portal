import Badge from "@/src/shared/components/Badge";
import { Project } from "../../types/dashboard.types";

type Props = {
  project: Project;
};

export default function ProjectTags({ project }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="status">
        {project.status === "in-progress" ? "In Progress" : project.status}
      </Badge>

      <Badge variant="priority">{project.priority}</Badge>

      {project.tags.map((tag) => (
        <Badge key={tag}>{tag}</Badge>
      ))}
    </div>
  );
}
