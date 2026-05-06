import { tasks } from "../../mocks/dashboard.mock";
import TaskCard from "./TaskCard";

export default function TasksSection() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Your Tasks</h2>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
