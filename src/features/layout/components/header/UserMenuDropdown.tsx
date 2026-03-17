import { LuUser, LuSettings, LuLogOut } from "react-icons/lu";

type Props = {
  onLogout: () => void;
};

export default function UserMenuDropdown({ onLogout }: Props) {
  return (
    <div className="right-0 absolute bg-white shadow-lg mt-2 border border-gray-200 rounded-xl w-48">
      <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-(--color-background-sky)">
        <LuUser className="text-gray-500 text-base" />
        Profile
      </button>

      <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-(--color-background-sky)">
        <LuSettings className="text-gray-500 text-base" />
        Settings
      </button>

      <button
        onClick={onLogout}
        className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-(--color-background-sky)"
      >
        <LuLogOut className="text-red-500 text-base" />
        Logout
      </button>
    </div>
  );
}
