import { FiFileText, FiDownload } from "react-icons/fi";
import { FileItem } from "../types/dashboard.types";
import SectionHeader from "./SectionHeader";

type Props = {
  files: FileItem[];
};

export default function RecentFiles({ files }: Props) {
  return (
    <div className="bg-(--color-background) rounded-xl shadow-sm hover:shadow-md transition p-6 space-y-6">
      <SectionHeader title="Recent Files" href="/files" />

      <div className="space-y-4">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex justify-between items-center p-3 rounded-lg hover:bg-(--color-background-sky) transition"
          >
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center bg-primary-light/20 rounded-lg w-10 h-10">
                <FiFileText className="text-(--color-primary)" />
              </div>

              <div>
                <p className="text-sm font-medium text-(--color-text)">
                  {file.name}
                </p>
                <p className="text-gray-500 text-xs">
                  {file.project} • {file.author} • {file.time}
                </p>
              </div>
            </div>

            <FiDownload className="text-gray-500 cursor-pointer hover:text-(--color-primary)" />
          </div>
        ))}
      </div>
    </div>
  );
}
