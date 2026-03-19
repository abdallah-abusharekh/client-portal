import Card from "@/src/shared/components/Card";
import ProjectsSearch from "./ProjectsSearch";
import ViewToggle from "./ViewToggle";
import { ViewMode } from "../hooks/useProjectsFilters";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;

  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
};

export default function ProjectsToolbar({
  search,
  onSearchChange,
  view,
  onViewChange,
}: Props) {
  return (
    <Card className="flex items-center gap-4 p-4">
      <ProjectsSearch value={search} onChange={onSearchChange} />

      <ViewToggle view={view} onChange={onViewChange} />
    </Card>
  );
}
