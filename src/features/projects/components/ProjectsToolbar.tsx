import { FiSearch, FiFilter, FiGrid, FiList } from "react-icons/fi";
import Card from "@/src/shared/components/Card";

export default function ProjectsToolbar() {
  return (
    <Card className="flex items-center gap-4 p-4">
      {/* Search */}
      <div className="flex flex-1 items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
        <FiSearch className="text-gray-400" />
        <input
          placeholder="Search projects..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Filter */}
      <button className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg text-sm">
        <FiFilter />
        All Projects (5)
      </button>

      {/* View Switch */}
      <div className="flex items-center bg-gray-50 rounded-lg overflow-hidden">
        <button className="bg-white p-2">
          <FiGrid />
        </button>
        <button className="p-2">
          <FiList />
        </button>
      </div>
    </Card>
  );
}
