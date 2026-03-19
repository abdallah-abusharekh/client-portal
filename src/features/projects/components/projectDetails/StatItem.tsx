type Props = {
  icon: React.ReactNode;
  label: string;
  value: string;
  bg: string;
};

export default function StatItem({ icon, label, value, bg }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-lg ${bg}`}>
        <span className="flex justify-center items-center w-4 h-4">{icon}</span>
      </div>

      <div className="space-y-1">
        <p className="text-gray-500 text-xs">{label}</p>
        <p className="font-medium text-sm">{value}</p>
      </div>
    </div>
  );
}
