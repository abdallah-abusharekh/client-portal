export default function CalendarSkeleton() {
  return (
    <div className="bg-white shadow p-4 rounded-xl animate-pulse">
      {/* Toolbar */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <div className="bg-gray-200 rounded w-8 h-8" />
          <div className="bg-gray-200 rounded w-8 h-8" />
          <div className="bg-gray-200 rounded w-12 h-8" />
        </div>
        <div className="bg-gray-200 rounded w-32 h-6" />
        <div className="flex gap-2">
          <div className="bg-gray-200 rounded w-20 h-8" />
          <div className="bg-gray-200 rounded w-20 h-8" />
          <div className="bg-gray-200 rounded w-20 h-8" />
          <div className="bg-gray-200 rounded w-20 h-8" />
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="space-y-2">
        {/* Days of week header */}
        <div className="gap-2 grid grid-cols-7 mb-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="bg-gray-200 rounded w-full h-4" />
          ))}
        </div>

        {/* Calendar cells */}
        <div className="space-y-2">
          {Array.from({ length: 6 }).map((_, row) => (
            <div key={row} className="gap-2 grid grid-cols-7">
              {Array.from({ length: 7 }).map((_, col) => (
                <div key={col} className="bg-gray-100 rounded w-full h-20" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
