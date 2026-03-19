import { getProgressColor } from "../../services/projects.service";

type Props = {
  progress: number;
};

export default function ProjectProgress({ progress }: Props) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-gray-500 text-sm">
        <span>Progress</span>
        <span className="font-medium text-gray-700">{progress}%</span>
      </div>
      <div className="bg-gray-100 rounded-full w-full h-2 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${getProgressColor(
            progress,
          )}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
