import { FiBell } from "react-icons/fi";

type Props = {
  unreadCount: number;
  onClick: () => void;
};

export default function NotificationBell({ unreadCount, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="relative p-2 rounded-full hover:bg-(--color-background-sky)"
    >
      <FiBell className="text-lg text-(--color-text)" />

      {unreadCount > 0 && (
        <span className="-top-1 -right-1 absolute flex justify-center items-center bg-red-500 rounded-full w-5 h-5 font-semibold text-[11px] text-white">
          {unreadCount}
        </span>
      )}
    </button>
  );
}
