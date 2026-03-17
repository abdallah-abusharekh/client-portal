export default function EarningsSummary() {
  return (
    <div className="gap-6 grid grid-cols-3 text-sm">
      <div>
        <p className="text-gray-500">This Month</p>
        <p className="font-semibold text-lg">$8,750</p>
      </div>

      <div>
        <p className="text-gray-500">Pending</p>
        <p className="font-semibold text-orange-500 text-lg">$2,500</p>
      </div>

      <div>
        <p className="text-gray-500">Total Earned</p>
        <p className="font-semibold text-green-600 text-lg">$45,600</p>
      </div>
    </div>
  );
}
