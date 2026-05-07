export default function NotificationsSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="bg-gray-100 rounded-2xl p-5 flex flex-col gap-2 shadow-sm"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="w-16 h-4 bg-gray-300 rounded" />
              <div className="w-20 h-4 bg-gray-200 rounded" />
            </div>
            <div className="w-16 h-3 bg-gray-200 rounded" />
          </div>
          <div className="w-3/4 h-4 bg-gray-200 rounded" />
          <div className="w-1/2 h-3 bg-gray-100 rounded" />
        </div>
      ))}
    </div>
  );
}
