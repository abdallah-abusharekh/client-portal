type Props = {
  budget: number;
  spent: number;
};

export default function ProjectBudget({ budget, spent }: Props) {
  return (
    <div className="flex justify-between bg-gray-50 p-3 rounded-xl text-sm">
      <div>
        <p className="text-gray-500">Budget</p>
        <p className="font-semibold">${budget.toLocaleString()}</p>
      </div>

      <div>
        <p className="text-gray-500">Spent</p>
        <p className="font-semibold">${spent.toLocaleString()}</p>
      </div>
    </div>
  );
}
