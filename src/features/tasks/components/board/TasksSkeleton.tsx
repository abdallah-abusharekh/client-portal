export default function TasksSkeleton() {
  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <div className="bg-gray-200 rounded w-24 h-4" />

          {Array.from({ length: 3 }).map((_, j) => (
            <div key={j} className="bg-gray-200 rounded-xl h-24" />
          ))}
        </div>
      ))}
    </div>
  );
}
