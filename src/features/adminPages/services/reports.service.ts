import { reports, ReportItem } from "../../adminTables/mocks/reports.mock";
import { delay } from "../../../shared/utils/delay";

let reportsDB: ReportItem[] = [...reports];

export const reportsService = {
  async getReports(): Promise<ReportItem[]> {
    await delay(1000);
    return reportsDB;
  },

  async getReportById(id: string): Promise<ReportItem | undefined> {
    await delay(500);
    return reportsDB.find((report) => report.id === id);
  },

  async deleteReports(ids: string[]): Promise<ReportItem[]> {
    reportsDB = reportsDB.filter((report) => !ids.includes(report.id));
    return reportsDB;
  },
};
