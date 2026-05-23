export function RemindersCard() {
  return (
    <div className="hidden xl:block top-25 right-25 z-10 absolute bg-white shadow-md p-4 rounded-2xl w-48 rotate-3 animate-bouncing">
      <div className="flex items-center gap-2 mb-3">
        <span className="font-medium text-gray-900 text-sm">Reminders</span>
        <span className="bg-orange-100 px-1.5 py-0.5 rounded text-[10px] text-orange-400">
          Meeting
        </span>
      </div>
      <div className="bg-gray-50 p-2.5 rounded-lg">
        <p className="font-medium text-gray-900 text-xs">Client kickoff call</p>
        <p className="mt-0.5 text-[10px] text-gray-400">
          Call with marketing team
        </p>
        <div className="flex items-center gap-1 mt-1.5 text-[11px] text-primary">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          13:00 – 13:45
        </div>
      </div>
    </div>
  );
}
