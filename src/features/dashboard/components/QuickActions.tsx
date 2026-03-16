import { FiMessageSquare, FiCalendar } from "react-icons/fi";

export default function QuickActions() {
  return (
    <div className="space-y-4 bg-(--color-background) shadow-sm hover:shadow-md p-6 rounded-xl transition">
      <h3 className="font-semibold text-(--color-text) text-lg">
        Quick Actions
      </h3>

      <button className="flex items-center gap-3 hover:bg-(--color-background-sky) p-3 rounded-lg w-full transition">
        <FiMessageSquare className="text-(--color-primary)" />
        <span className="font-medium text-(--color-text) text-sm">
          Send Feedback
        </span>
      </button>

      <button className="flex items-center gap-3 hover:bg-(--color-background-sky) p-3 rounded-lg w-full transition">
        <FiCalendar className="text-(--color-primary)" />
        <span className="font-medium text-(--color-text) text-sm">
          Schedule Meeting
        </span>
      </button>
    </div>
  );
}
