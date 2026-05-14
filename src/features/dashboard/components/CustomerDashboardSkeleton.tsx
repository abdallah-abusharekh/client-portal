export default function CustomerDashboardSkeleton() {
  return (
    <div className="space-y-10 animate-pulse">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <div className="bg-gray-200 rounded w-56 h-7" />
          <div className="bg-gray-200 rounded w-40 h-4" />
        </div>
        <div className="bg-gray-200 rounded-xl w-32 h-10" />
      </div>

      {/* Stats */}
      <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white shadow-sm p-5 rounded-2xl">
            <div className="bg-gray-200 rounded w-28 h-4" />
            <div className="bg-gray-200 mt-3 rounded w-20 h-8" />
            <div className="bg-gray-200 mt-3 rounded w-32 h-4" />
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="bg-gray-200 rounded w-40 h-5" />
          <div className="bg-gray-200 rounded w-16 h-4" />
        </div>

        <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="bg-white shadow-sm p-6 rounded-xl animate-pulse"
            >
              {/* Header */}
              <div className="space-y-3">
                <div className="bg-gray-200 rounded w-48 h-6" />
                <div className="bg-gray-200 rounded w-full h-4" />
              </div>

              {/* Pills */}
              <div className="flex gap-2 mt-5">
                <div className="bg-gray-200 rounded-full w-20 h-8" />
                <div className="bg-gray-200 rounded-full w-16 h-8" />
                <div className="bg-gray-200 rounded-full w-24 h-8" />
              </div>

              {/* Content */}
              <div className="space-y-4 mt-8">
                <div className="bg-gray-200 rounded-full w-full h-3" />
                <div className="bg-gray-100 rounded-2xl h-24" />
              </div>

              {/* Footer */}
              <div className="flex justify-end items-center mt-6">
                <div className="bg-gray-200 rounded w-20 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Freelancers */}
      <div className="bg-white shadow-sm p-6 rounded-2xl">
        <div className="bg-gray-200 rounded w-40 h-5" />
        <div className="space-y-4 mt-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-gray-200 rounded-full w-10 h-10" />
                <div className="space-y-2">
                  <div className="bg-gray-200 rounded w-40 h-4" />
                  <div className="bg-gray-200 rounded w-28 h-3" />
                </div>
              </div>
              <div className="bg-gray-200 rounded-full w-20 h-6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
