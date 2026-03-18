import { formatCurrency } from "../../services/projects.service";

type Props = {
  budget: number;
  spent: number;
};

export default function ProjectBudget({ budget, spent }: Props) {
  const percentage = Math.min((spent / budget) * 100, 100);
  const isOverBudget = spent > budget;

  return (
    <div className="space-y-2 bg-gray-50 p-3 rounded-xl text-sm">
      <div className="flex justify-between">
        <div>
          <p className="text-gray-500">Budget</p>
          <p className="font-semibold">{formatCurrency(budget)}</p>
        </div>

        <div className="text-right">
          <p className="text-gray-500">Spent</p>
          <p className={`font-semibold ${isOverBudget ? "text-red-600" : ""}`}>
            {formatCurrency(spent)}
          </p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full w-full h-2 overflow-hidden">
        <div
          className={`h-full rounded-full ${
            isOverBudget
              ? "bg-red-500"
              : percentage > 80
                ? "bg-yellow-500"
                : "bg-(--color-primary)"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-gray-500 text-xs text-right">
        {Math.round(percentage)}% used
      </p>
    </div>
  );
}
