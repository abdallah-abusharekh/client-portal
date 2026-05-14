import Image from "next/image";

export default function Loading() {
  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center backdrop-blur-sm">
      <div className="flex flex-col items-center gap-5">
        {/* Logo */}
        <div className="flex justify-center items-center shadow-lg rounded-3xl w-24 h-24 animate-pulse">
          <Image
            src="/icon.svg"
            alt="Logo"
            className="w-14 h-14 animate-pulse"
            width={56}
            height={56}
          />
        </div>

        {/* Spinner */}
        <div className="border-[3px] border-primary/30 border-t-primary rounded-full w-10 h-10 animate-spin" />

        <p className="text-muted-foreground text-sm">Loading workspace...</p>
      </div>
    </div>
  );
}
