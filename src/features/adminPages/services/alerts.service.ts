import { alerts, AlertItem } from "../../adminTables/mocks/alerts.mock";
import { delay } from "../../../shared/utils/delay";

let alertsDB: AlertItem[] = [...alerts];

export const alertsService = {
  async getAlerts(): Promise<AlertItem[]> {
    await delay(1000);
    return alertsDB;
  },

  async updateAlertsStatus(
    ids: string[],
    status: AlertItem["status"],
  ): Promise<AlertItem[]> {
    alertsDB = alertsDB.map((alert) =>
      ids.includes(alert.id) ? { ...alert, status } : alert,
    );

    return alertsDB;
  },

  async deleteAlerts(ids: string[]): Promise<AlertItem[]> {
    alertsDB = alertsDB.filter((alert) => !ids.includes(alert.id));
    return alertsDB;
  },
};
