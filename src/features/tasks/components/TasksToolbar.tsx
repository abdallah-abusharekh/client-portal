import Button from "@/src/shared/components/Button";
import { FiFilter } from "react-icons/fi";
import Card from "@/src/shared/components/Card";
import SearchInput from "@/src/shared/components/SearchInput";

export default function TasksToolbar() {
  return (
    <Card className="flex items-center gap-4 p-4">
      <SearchInput placeholder="Search projects..." className="w-full" />

      <Button variant="secondary" className="flex gap-2">
        <FiFilter />
        Filter
      </Button>
    </Card>
  );
}
