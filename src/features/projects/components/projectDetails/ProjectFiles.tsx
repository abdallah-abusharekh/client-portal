"use client";

import Button from "@/src/shared/components/Button";
import { FiDownload, FiPaperclip, FiUpload } from "react-icons/fi";
import { useProjectFiles } from "../../hooks/useProjectFiles";
import { useRef } from "react";
import { downloadFile } from "../../utils/file.utils";
import ProjectFilesSkeleton from "../skeletons/ProjectFilesSkeleton";
import EmptyState from "@/src/shared/components/EmptyState";

export default function ProjectFiles() {
  const { files, uploadFile, isLoading, isUploading } = useProjectFiles();

  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClickUpload() {
    inputRef.current?.click();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    uploadFile(file);
    e.target.value = "";
  }

  function handleDownloadClick(file: { url: string; name: string }) {
    downloadFile(file.name);
  }

  return (
    <div className="flex flex-col bg-white shadow-sm rounded-2xl">
      <div className="flex justify-between items-center px-6 py-4 border-gray-300 border-b">
        <h3 className="font-semibold">Project Files</h3>

        <input
          type="file"
          ref={inputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      <div>
        {isLoading ? (
          <ProjectFilesSkeleton />
        ) : files.length === 0 ? (
          <EmptyState
            title="No files yet"
            message="Upload your first file to get started."
          />
        ) : (
          <div className="max-h-80 overflow-y-auto">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex justify-between items-center hover:bg-gray-50 px-6 py-4"
              >
                <div className="flex items-center gap-3">
                  <FiPaperclip className="text-gray-400" />

                  <div>
                    <p className="font-medium text-sm">{file.name}</p>
                    <p className="text-gray-500 text-xs">
                      {(file.size / 1024 / 1024).toFixed(2)} MB • Uploaded{" "}
                      {new Date(file.uploadedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <FiDownload
                  className="text-gray-500 cursor-pointer"
                  onClick={() =>
                    handleDownloadClick({
                      url: file.url,
                      name: file.name,
                    })
                  }
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center items-center m-4">
        <Button
          className="w-[30%]"
          size="md"
          onClick={handleClickUpload}
          disabled={isUploading}
        >
          {isUploading ? "Uploading..." : "Upload"} <FiUpload />
        </Button>
      </div>
    </div>
  );
}
