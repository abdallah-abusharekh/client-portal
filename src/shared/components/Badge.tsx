type BadgeVariant =
  | "status"
  | "priority"
  | "success"
  | "default"
  | "warning"
  | "review";

type Props = {
  children?: React.ReactNode;
  variant?: BadgeVariant;
  value?: string;
};
export default function Badge({ children, variant, value }: Props) {
  const variants = {
    status: "bg-blue-100 text-blue-600",
    priority: "bg-red-100 text-red-600",
    success: "bg-green-100 text-green-600",
    warning: "bg-yellow-100 text-yellow-600",
    review: "bg-purple-100 text-purple-600",
    default: "bg-gray-100 text-gray-600",
  };

  function resolveVariant(): BadgeVariant {
    if (variant) return variant;

    if (!value) return "default";

    if (value === "completed") return "success";
    if (value === "in-progress") return "status";
    if (value === "review") return "review";
    if (value === "todo") return "warning";
    if (value === "paused") return "default";

    if (value === "high") return "priority";
    if (value === "medium") return "status";
    if (value === "low") return "default";

    return "default";
  }

  function formatLabel(val: string) {
    return val.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  const finalVariant = resolveVariant();

  return (
    <span
      className={`text-xs px-2 py-1 w-fit rounded-full font-medium ${variants[finalVariant]}`}
    >
      {value ? formatLabel(value) : children}
    </span>
  );
}
