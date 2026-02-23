type Activity = {
  title: string;
  subtitle?: string;
  time: string;
};

type Props = {
  title?: string;
  items: Activity[];
};

export default function RecentActivity({
  title = "Recent Activities",
  items,
}: Props) {
  return (
    <div className="bg-(--color-background) rounded-xl shadow-sm hover:shadow-md transition p-6">
      <h3 className="text-lg font-semibold text-(--color-text) mb-6">
        {title}
      </h3>

      <div className="space-y-5">
        {items.map((item, index) => (
          <div key={index} className="flex gap-3">
            <div className="mt-2 h-2 w-2 rounded-full bg-(--color-primary)" />

            <div>
              <p className="text-sm text-(--color-text)">{item.title}</p>

              {(item.subtitle || item.time) && (
                <p className="mt-1 text-gray-500 text-xs">
                  {item.subtitle && `${item.subtitle} • `}
                  {item.time}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
