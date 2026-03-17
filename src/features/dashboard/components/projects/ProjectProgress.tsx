type Props = {
  progress: number;
};

export default function ProjectProgress({ progress }: Props) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>

      <div className="bg-gray-100 rounded-full w-full h-2">
        <div
          className="bg-(--color-primary) rounded-full h-2"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
