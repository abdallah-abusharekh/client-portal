import Link from "next/link";

type Props = {
  title: string;
  href?: string;
  linkLabel?: string;
};

export default function SectionHeader({
  title,
  href,
  linkLabel = "See all",
}: Props) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-(--color-text)">{title}</h2>

      {href && (
        <Link
          href={href}
          className="text-sm font-medium text-(--color-primary) hover:underline transition"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
