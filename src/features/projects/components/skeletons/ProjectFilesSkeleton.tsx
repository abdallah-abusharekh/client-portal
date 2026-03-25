export default function ProjectFilesSkeleton() {
  return (
    <div className="max-h-80 overflow-y-auto animate-pulse">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex justify-between items-center px-6 py-4">
          {/* Left */}
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className="bg-gray-200 rounded w-5 h-5" />

            {/* Text */}
            <div className="space-y-2">
              <div className="bg-gray-200 rounded w-32 h-3" />
              <div className="bg-gray-200 rounded w-24 h-3" />
            </div>
          </div>

          {/* Download icon */}
          <div className="bg-gray-200 rounded w-5 h-5" />
        </div>
      ))}
    </div>
  );
}
