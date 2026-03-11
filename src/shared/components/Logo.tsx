export default function Logo() {
  return (
    <div className="flex justify-center items-center bg-primary shadow-md rounded-xl w-14 h-14 text-white">
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="5" y="7" width="14" height="12" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <path d="M9 11h6M9 15h6" />
      </svg>
    </div>
  );
}
