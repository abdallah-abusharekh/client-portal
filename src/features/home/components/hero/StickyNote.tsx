export function StickyNote() {
  return (
    <div className="top-24 left-8 z-10 absolute bg-yellow-50 shadow-md p-4 rounded-xl w-44 -rotate-3">
      <div className="bg-red-500 mx-auto mb-2 rounded-full w-2.5 h-2.5" />
      <p className="text-yellow-900 text-xs leading-relaxed">
        Keep clients updated in real time and never miss a deadline again.
      </p>
    </div>
  );
}
