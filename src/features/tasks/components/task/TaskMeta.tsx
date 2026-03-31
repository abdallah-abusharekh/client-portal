import { FiCalendar } from "react-icons/fi";

type Props = {
  dueDate?: string;
  avatar?: string;
};

export default function TaskMeta({ dueDate, avatar }: Props) {
  return (
    <div className="flex items-center gap-2 text-gray-400 text-xs">
      {avatar && <img src={avatar} className="rounded-full w-6 h-6" />}

      {dueDate && (
        <div className="flex items-center gap-1">
          <FiCalendar size={12} />
          {dueDate}
        </div>
      )}
    </div>
  );
}
