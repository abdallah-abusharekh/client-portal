import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { reportsService } from "../services/reports.service";

const downloadTextFile = (fileName: string, content: string) => {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const useDownloadReport = () => {
  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      const report = await reportsService.getReportById(id);
      if (!report) {
        throw new Error("Report not found");
      }
      return report;
    },

    onSuccess: (report) => {
      const content = [
        `Report: ${report.name}`,
        `Category: ${report.category}`,
        `Period: ${report.period}`,
        `Owner: ${report.owner}`,
        `Generated At: ${report.generatedAt}`,
      ].join("\n");

      const fileName = `${report.name.toLowerCase().replace(/\s+/g, "-")}.txt`;

      downloadTextFile(fileName, content);
      toast.success("Report downloaded");
    },

    onError: () => {
      toast.error("Failed to download report");
    },
  });
};
