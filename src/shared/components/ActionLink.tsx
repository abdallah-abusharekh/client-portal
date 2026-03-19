import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function ActionLink({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="flex justify-end items-center gap-1 font-medium text-(--color-primary) hover:text-(--color-primary-dark) text-sm transition"
    >
      {children}
      <FiArrowRight className="w-4 h-4" />
    </Link>
  );
}
