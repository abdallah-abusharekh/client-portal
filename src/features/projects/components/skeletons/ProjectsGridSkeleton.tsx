export default function ProjectsGridSkeleton() {
  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="space-y-4 bg-white shadow-sm p-4 rounded-2xl animate-pulse"
        >
          {/* Title */}
          <div className="bg-gray-200 rounded w-3/4 h-4" />

          {/* Description */}
          <div className="space-y-2">
            <div className="bg-gray-200 rounded w-full h-3" />
            <div className="bg-gray-200 rounded w-5/6 h-3" />
          </div>

          {/* Tags */}
          <div className="flex gap-2">
            <div className="bg-gray-200 rounded-full w-12 h-5" />
            <div className="bg-gray-200 rounded-full w-10 h-5" />
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center pt-2">
            <div className="bg-gray-200 rounded w-16 h-3" />
            <div className="bg-gray-200 rounded w-20 h-6" />
          </div>
        </div>
      ))}
    </div>
  );
}
