export default function ListPageSkeleton() {
  return (
    <div className="space-y-5 animate-pulse">
      {/* Header */}
      <div className="space-y-2">
        <div className="bg-gray-200 rounded w-40 h-6" />
        <div className="bg-gray-200 rounded w-64 h-4" />
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="flex-1 bg-gray-200 rounded-xl h-11" />
      </div>

      {/* Table */}
      <div className="bg-white shadow-sm rounded-2xl overflow-hidden">
        {/* Table Header */}
        <div className="gap-4 grid grid-cols-5 p-4 border-b">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="bg-gray-200 rounded w-20 h-4" />
          ))}
        </div>

        {/* Table Rows */}
        {Array.from({ length: 7 }).map((_, row) => (
          <div
            key={row}
            className="gap-4 grid grid-cols-5 p-4 border-b last:border-b-0"
          >
            <div className="bg-gray-200 rounded w-40 h-4" />
            <div className="bg-gray-200 rounded w-24 h-4" />
            <div className="bg-gray-200 rounded w-20 h-4" />
            <div className="bg-gray-200 rounded-full w-16 h-6" />
            <div className="bg-gray-200 rounded w-24 h-4" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center">
        <div className="flex gap-2">
          <div className="bg-gray-200 rounded w-8 h-8" />
          <div className="bg-gray-200 rounded w-8 h-8" />
          <div className="bg-gray-200 rounded w-8 h-8" />
        </div>
      </div>
    </div>
  );
}
