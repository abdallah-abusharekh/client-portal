const tasks = [
  {
    id: 1,
    name: "Brand redesign",
    date: "Sep 10",
    progress: 60,
    color: "bg-primary",
  },
  {
    id: 2,
    name: "Copywriting deck",
    date: "Sep 18",
    progress: 85,
    color: "bg-emerald-500",
  },
];

export function TasksCard() {
  return (
    <div className="hidden xl:block bottom-20 left-30 z-10 absolute bg-white shadow-md p-4 rounded-2xl w-52 -rotate-3 animate-bouncing">
      <p className="mb-3 font-medium text-gray-900 text-sm">Today's tasks</p>
      {tasks.map((task) => (
        <div key={task.id} className="flex items-start gap-2 mb-3">
          <div className="flex justify-center items-center bg-blue-50 mt-0.5 rounded-md w-5 h-5 font-medium text-[10px] text-primary shrink-0">
            {task.id}
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-900 text-xs">{task.name}</p>
            <p className="text-[10px] text-gray-400">{task.date}</p>
            <div className="bg-gray-100 mt-1 rounded-full h-1">
              <div
                className={`h-1 rounded-full ${task.color}`}
                style={{ width: `${task.progress}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
