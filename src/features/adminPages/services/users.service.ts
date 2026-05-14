import { users } from "../../adminTables/mocks/users.mock";
import { BaseUser } from "../../auth/types/user.types";

import { delay } from "../../../shared/utils/delay";

let usersDB = [...users];

export const usersService = {
  async getUsers(): Promise<BaseUser[]> {
    await delay(1000);

    return usersDB;
  },
  async updateUsersStatus(
    ids: string[],
    status: "active" | "suspended",
  ): Promise<BaseUser[]> {
    usersDB = usersDB.map((user) =>
      ids.includes(user.id) ? { ...user, status } : user,
    );

    return usersDB;
  },
  async deleteUsers(ids: string[]): Promise<BaseUser[]> {
    usersDB = usersDB.filter((user) => !ids.includes(user.id));

    return usersDB;
  },
};
