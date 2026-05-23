import { BiCheck, BiMessageRounded } from "react-icons/bi";
import { HiCalendarDays } from "react-icons/hi2";
import { MdAccessTime } from "react-icons/md";

export function TimeBubble() {
  return (
    <div className="right-[18%] md:right-[15%] 2xl:right-86 bottom-110 md:bottom-48 2xl:bottom-64 z-10 absolute flex justify-center items-center bg-primary shadow-lg rounded-2xl w-12 h-12">
      <MdAccessTime className="w-6 h-6 text-white" />
    </div>
  );
}

export function CalendarBubble() {
  return (
    <div className="right-[25%] md:right-[11%] 2xl:right-76 bottom-120 md:bottom-60 2xl:bottom-77 z-10 absolute flex justify-center items-center bg-white shadow-lg border border-gray-100 rounded-2xl w-12 h-12">
      <HiCalendarDays className="w-6 h-6 text-primary" />
    </div>
  );
}
export function CheckBubble() {
  return (
    <div className="hidden bottom-77 left-76 z-10 absolute 2xl:flex justify-center items-center bg-primary shadow-lg rounded-2xl w-12 h-12">
      <BiCheck className="w-6 h-6 text-white" />
    </div>
  );
}
export function ChatBubble() {
  return (
    <div className="hidden bottom-64 left-86 z-10 absolute 2xl:flex justify-center items-center bg-white shadow-lg rounded-2xl w-12 h-12">
      <BiMessageRounded className="w-6 h-6 text-primary" />
    </div>
  );
}
