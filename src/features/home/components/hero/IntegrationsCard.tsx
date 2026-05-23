import { SiGmail, SiZoom, SiSlack } from "react-icons/si";

export function IntegrationsCard() {
  return (
    <div className="hidden xl:block right-15 bottom-15 z-10 absolute bg-white shadow-md p-4 rounded-2xl w-44">
      <p className="mb-3 font-medium text-gray-900 text-sm">
        100+ Integrations
      </p>
      <div className="flex gap-2">
        <div className="flex justify-center items-center bg-red-50 border border-gray-100 rounded-xl w-10 h-10">
          <SiGmail className="w-5 h-5 text-red-500" />
        </div>

        <div className="flex justify-center items-center bg-blue-50 border border-gray-100 rounded-xl w-10 h-10">
          <SiZoom className="w-5 h-5 text-blue-500" />
        </div>

        <div className="flex justify-center items-center bg-purple-50 border border-gray-100 rounded-xl w-10 h-10">
          <SiSlack className="w-5 h-5 text-purple-500" />
        </div>
      </div>
    </div>
  );
}
