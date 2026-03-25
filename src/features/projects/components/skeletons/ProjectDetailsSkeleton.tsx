export default function ProjectDetailsSkeleton() {
  return (
    <div className="flex flex-col gap-6 animate-pulse">
      {/* Header */}
      <div className="space-y-4 bg-white shadow-sm p-6 rounded-2xl">
        {/* Title */}
        <div className="bg-gray-200 rounded w-1/3 h-5" />

        {/* Description */}
        <div className="space-y-2">
          <div className="bg-gray-200 rounded w-full h-3" />
          <div className="bg-gray-200 rounded w-5/6 h-3" />
        </div>

        {/* Tags */}
        <div className="flex gap-2">
          <div className="bg-gray-200 rounded-full w-14 h-5" />
          <div className="bg-gray-200 rounded-full w-12 h-5" />
          <div className="bg-gray-200 rounded-full w-10 h-5" />
        </div>
      </div>

      {/* Main Grid */}
      <div className="items-start gap-6 grid grid-cols-1 lg:grid-cols-3">
        {/* Workspace */}
        <div className="space-y-4 lg:col-span-2 bg-white shadow-sm p-4 rounded-2xl">
          {/* Tabs */}
          <div className="flex gap-2">
            <div className="bg-gray-200 rounded-md w-20 h-8" />
            <div className="bg-gray-200 rounded-md w-20 h-8" />
            <div className="bg-gray-200 rounded-md w-20 h-8" />
          </div>

          {/* Task cards */}
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2 bg-gray-100 p-3 rounded-xl">
                <div className="bg-gray-200 rounded w-1/2 h-3" />
                <div className="bg-gray-200 rounded w-1/3 h-3" />
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="space-y-6">
          {/* Members */}
          <div className="space-y-3 bg-white shadow-sm p-4 rounded-2xl">
            <div className="bg-gray-200 rounded w-1/3 h-4" />

            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="bg-gray-200 rounded-full w-8 h-8" />
                <div className="bg-gray-200 rounded w-24 h-3" />
              </div>
            ))}
          </div>

          {/* Activity */}
          <div className="space-y-3 bg-white shadow-sm p-4 rounded-2xl">
            <div className="bg-gray-200 rounded w-1/3 h-4" />

            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-1">
                <div className="bg-gray-200 rounded w-full h-3" />
                <div className="bg-gray-200 rounded w-2/3 h-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
