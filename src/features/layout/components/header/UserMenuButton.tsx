import { LuChevronDown } from "react-icons/lu";

type Props = {
  name: string;
  initials: string;
  onClick: () => void;
};

export default function UserMenuButton({ name, initials, onClick }: Props) {
  return (
    <button onClick={onClick} className="flex items-center gap-2">
      <div className="flex items-center justify-center w-8 h-8 rounded-full font-semibold text-sm bg-primary/10 text-(--color-primary)">
        {initials}
      </div>

      <span className="hidden sm:block text-sm font-medium text-(--color-text)">
        {name}
      </span>

      <LuChevronDown className="text-gray-400 text-sm" />
    </button>
  );
}
