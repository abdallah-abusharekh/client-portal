import DeadlineItem from "./DeadlineItem";

import Card from "@/src/shared/components/Card";
import type { Deadline } from "../../types/dashboard.types";

type Props = {
  deadlines: Deadline[];
};

export default function UpcomingDeadlinesWidget({ deadlines }: Props) {
  return (
    <Card className="flex flex-col h-105">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Upcoming Deadlines</h3>

        <span className="bg-yellow-100 px-2 py-1 rounded-full text-yellow-700 text-xs">
          {deadlines.length} tasks
        </span>
      </div>

      {/* Scrollable list */}
      <div className="flex-1 space-y-3 pr-1 overflow-y-auto">
        {deadlines.map((deadline) => (
          <DeadlineItem key={deadline.id} deadline={deadline} />
        ))}
      </div>
    </Card>
  );
}
