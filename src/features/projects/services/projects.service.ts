export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function formatLabel(value: string) {
  return value.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getProgressColor(progress: number) {
  if (progress < 40) return "bg-red-500";
  if (progress < 80) return "bg-yellow-500";
  return "bg-(--color-primary)";
}

export function formatCurrency(value: number) {
  return `$${value.toLocaleString()}`;
}
