type Props = {
  title: string;
  ownerLabel?: string;
  ownerName?: string;
  progress: number;
  completedTasks: number;
  totalTasks: number;
  dueDate?: string;
  status: string;
};

export default function ProjectCard({
  title,
  ownerLabel = "Owner",
  ownerName,
  progress,
  completedTasks,
  totalTasks,
  dueDate,
  status,
}: Props) {
  return (
    <div className="bg-(--color-background) rounded-xl shadow-sm hover:shadow-md transition p-6 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg text-(--color-text)">{title}</h3>

          {ownerName && (
            <p className="mt-1 text-gray-500 text-sm">
              {ownerLabel}: {ownerName}
            </p>
          )}
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-light/20 text-(--color-primary)">
          {status}
        </span>
      </div>

      <div className="flex justify-between text-gray-500 text-sm">
        <span>
          {completedTasks}/{totalTasks} tasks completed
        </span>
        <span>{dueDate ? `Due: ${dueDate}` : "Due: —"}</span>
      </div>

      <div className="bg-gray-200 rounded-full w-full h-2">
        <div
          style={{ width: `${progress}%` }}
          className="h-2 rounded-full bg-(--color-primary) transition-all"
        />
      </div>
    </div>
  );
}
