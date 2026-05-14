export default function FreelancerDashboardSkeleton() {
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

      {/* Activity section */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 bg-white shadow-sm p-6 rounded-2xl">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="bg-gray-200 rounded w-40 h-5" />
              <div className="bg-gray-200 rounded w-56 h-4" />
            </div>
            <div className="space-y-2 text-right">
              <div className="bg-gray-200 rounded w-24 h-7" />
              <div className="bg-gray-200 ml-auto rounded w-20 h-4" />
            </div>
          </div>

          <div className="bg-gray-200 mt-6 rounded w-full h-64" />
          <div className="bg-gray-200 mt-6 h-px" />
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-3 mt-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-200 rounded w-full h-12" />
            ))}
          </div>
        </div>

        <div className="bg-white shadow-sm p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <div className="bg-gray-200 rounded w-40 h-5" />
            <div className="bg-gray-200 rounded-full w-16 h-6" />
          </div>
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg w-full h-20" />
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="bg-gray-200 rounded w-40 h-5" />
          <div className="bg-gray-200 rounded w-16 h-4" />
        </div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="bg-white shadow-sm p-5 rounded-2xl">
              <div className="bg-gray-200 rounded w-48 h-5" />
              <div className="bg-gray-200 mt-2 rounded w-64 h-4" />
              <div className="bg-gray-200 mt-4 rounded w-full h-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
