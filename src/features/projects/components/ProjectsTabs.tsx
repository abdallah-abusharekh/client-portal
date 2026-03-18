type Tab = {
  label: string;
  count: number;
  active?: boolean;
};

const tabs: Tab[] = [
  { label: "All", count: 5, active: true },
  { label: "In Progress", count: 2 },
  { label: "Review", count: 1 },
  { label: "Completed", count: 1 },
];

export default function ProjectsTabs() {
  return (
    <div className="flex gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
            tab.active ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600"
          }`}
        >
          {tab.label}

          <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  );
}
