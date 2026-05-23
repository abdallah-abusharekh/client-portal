import {
  freelancerUser,
  customerUser,
  adminUser,
  DEMO_CREDENTIALS,
} from "../mocks/users.mock";
import { AppUser, UserRole } from "../types/user.types";
import { delay } from "../../../shared/utils/delay";

const USERS = {
  freelancer: freelancerUser,
  customer: customerUser,
  admin: adminUser,
};

export async function loginRepository(
  email: string,
  password: string,
): Promise<AppUser> {
  await delay(500);

  const roleEntry = Object.entries(DEMO_CREDENTIALS).find(
    ([role, creds]) => creds.email === email && creds.password === password,
  );

  if (!roleEntry) {
    throw new Error("Invalid email or password");
  }

  const [role] = roleEntry;

  const user = USERS[role as keyof typeof USERS];

  return user;
}

export async function signupRepository(
  name: string,
  email: string,
  role: UserRole,
): Promise<AppUser> {
  await delay(500);
  return {
    id: crypto.randomUUID(),
    name,
    email,
    role,
    createdAt: new Date().toISOString(),
  } as AppUser;
}
