"use client";

type Props = {
  name: string;
};

export default function DashboardHeader({ name }: Props) {
  return (
    <div>
      <h1 className="font-semibold text-gray-900 text-2xl">
        Welcome back, {name}!
      </h1>

      <p className="mt-1 text-gray-500">Here's your work overview</p>
    </div>
  );
}
