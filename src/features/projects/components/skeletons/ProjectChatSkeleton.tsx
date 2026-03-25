export default function ProjectChatSkeleton() {
  return (
    <div className="flex flex-col gap-4 animate-pulse">
      {Array.from({ length: 4 }).map((_, i) => {
        const isMe = i % 2 === 0;

        return (
          <div
            key={i}
            className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
          >
            {/* Name + time */}
            <div className="bg-gray-200 mb-1 rounded w-24 h-3" />

            {/* Bubble */}
            <div
              className={`rounded-xl px-3 py-2 ${
                isMe ? "bg-gray-200 w-40" : "bg-gray-100 w-52"
              }`}
            >
              <div className="bg-gray-300 mb-1 rounded w-full h-3" />
              <div className="bg-gray-300 rounded w-3/4 h-3" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
