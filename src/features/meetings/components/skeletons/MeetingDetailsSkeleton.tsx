export default function MeetingDetailsSkeleton() {
  return (
    <div className="flex flex-col space-y-5 p-4 h-[90%] animate-pulse">
      {/* Header with title and badge */}
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-start gap-3">
        <div className="flex-1">
          <div className="bg-gray-200 rounded w-2/3 h-8" />
        </div>
        <div className="bg-gray-200 rounded-full w-20 h-6" />
      </div>

      {/* Description Card */}
      <div className="space-y-3 p-4 border border-gray-100 rounded-lg">
        <div className="bg-gray-200 rounded w-24 h-4" />
        <div className="space-y-2">
          <div className="bg-gray-200 rounded w-full h-3" />
          <div className="bg-gray-200 rounded w-5/6 h-3" />
          <div className="bg-gray-200 rounded w-4/5 h-3" />
        </div>
      </div>

      {/* Meeting Link and Schedule Grid */}
      <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
        {/* Meeting Link Card */}
        <div className="space-y-2 p-4 border border-gray-100 rounded-lg">
          <div className="bg-gray-200 rounded w-28 h-4" />
          <div className="bg-gray-200 rounded w-full h-3" />
          <div className="bg-gray-200 rounded w-4/5 h-3" />
        </div>

        {/* Schedule Card */}
        <div className="space-y-3 p-4 border border-gray-100 rounded-lg">
          <div className="bg-gray-200 rounded w-24 h-4" />
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-3">
            <div>
              <div className="bg-gray-200 mb-2 rounded w-12 h-3" />
              <div className="bg-gray-200 rounded w-16 h-4" />
            </div>
            <div>
              <div className="bg-gray-200 mb-2 rounded w-12 h-3" />
              <div className="bg-gray-200 rounded w-20 h-4" />
            </div>
            <div>
              <div className="bg-gray-200 mb-2 rounded w-16 h-3" />
              <div className="bg-gray-200 rounded w-14 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Participants Card */}
      <div className="space-y-3 p-4 border border-gray-100 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="bg-gray-200 rounded w-24 h-4" />
          <div className="bg-gray-200 rounded w-16 h-3" />
        </div>

        <ul className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg"
            >
              <div className="bg-gray-200 rounded-full w-9 h-9 shrink-0" />
              <div className="flex-1 space-y-2 min-w-0">
                <div className="bg-gray-200 rounded w-24 h-3" />
                <div className="bg-gray-200 rounded w-20 h-3" />
                <div className="bg-gray-200 rounded w-28 h-3" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex sm:flex-row flex-col gap-2 mt-auto pt-2">
        <div className="bg-gray-200 rounded w-full h-10" />
        <div className="bg-gray-200 rounded w-full h-10" />
      </div>
    </div>
  );
}
