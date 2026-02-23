import { FiBell, FiMenu } from "react-icons/fi";

type Props = {
  onMenuClick: () => void;
};

export default function Header({ onMenuClick }: Props) {
  return (
    <header className="flex justify-between border-b border-gray-200 items-center px-6 h-16 bg-(--color-background) shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-lg transition hover:bg-(--color-background-sky)"
        >
          <FiMenu className="text-xl text-(--color-text)" />
        </button>

        <div className="flex flex-col">
          <span className="font-semibold text-sm text-(--color-text)">
            Abdallah Abusharekh
          </span>
          <span className="text-gray-500 text-xs">Freelancer</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full transition hover:bg-(--color-background-sky)">
          <FiBell className="text-lg text-(--color-text)" />
        </button>

        <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm bg-primary-light/30 text-(--color-primary)">
          AA
        </div>
      </div>
    </header>
  );
}
