import Card from "@/src/shared/components/Card";
import EarningsChart from "./EarningsChart";
import EarningsSummary from "./EarningsSummary";

export default function EarningsOverviewWidget() {
  return (
    <Card className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">Earnings Overview</h3>

          <p className="text-gray-500 text-sm">
            Your earnings over the last 6 months
          </p>
        </div>

        <div className="text-right">
          <p className="font-semibold text-2xl">$8,750</p>

          <p className="text-green-600 text-sm">+12% this month</p>
        </div>
      </div>

      <EarningsChart />

      <div className="bg-gray-100 h-px" />

      <EarningsSummary />
    </Card>
  );
}
