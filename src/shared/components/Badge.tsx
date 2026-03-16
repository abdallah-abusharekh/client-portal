type Props = {
  children: React.ReactNode;
  variant?: "status" | "priority" | "default";
};

export default function Badge({ children, variant = "default" }: Props) {
  const variants = {
    status: "bg-blue-100 text-blue-600",
    priority: "bg-red-100 text-red-600",
    default: "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={`text-xs px-2 py-1 rounded-full font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
