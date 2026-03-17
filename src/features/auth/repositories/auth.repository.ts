import { freelancerUser, customerUser, adminUser } from "../mocks/users.mock";
import { AppUser, UserRole } from "../types/user.types";

const USERS = {
  freelancer: freelancerUser,
  customer: customerUser,
  admin: adminUser,
};

export async function loginRepository(role: UserRole): Promise<AppUser> {
  await new Promise((res) => setTimeout(res, 500));

  const user = USERS[role];

  if (!user) {
    throw new Error("Invalid role");
  }

  return user;
}

export async function signupRepository(
  name: string,
  email: string,
  role: UserRole,
): Promise<AppUser> {
  await new Promise((res) => setTimeout(res, 700));

  return {
    id: crypto.randomUUID(),
    name,
    email,
    role,
    createdAt: new Date().toISOString(),
  } as AppUser;
}
