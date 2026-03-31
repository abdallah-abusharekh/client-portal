import Card from "@/src/shared/components/Card";
import ViewToggle from "./ViewToggle";
import { ViewMode } from "../hooks/useProjectsFilters";
import SearchInput from "@/src/shared/components/SearchInput";

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
      <SearchInput
        placeholder="Search projects..."
        className="w-full"
        value={search}
        onChange={onSearchChange}
      />

      <ViewToggle view={view} onChange={onViewChange} />
    </Card>
  );
}
