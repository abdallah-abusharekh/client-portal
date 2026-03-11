import { freelancerUser, customerUser, adminUser } from "../mocks/users.mock";
import { AppUser, UserRole } from "../types/user.types";

const USERS = {
  freelancer: freelancerUser,
  customer: customerUser,
  admin: adminUser,
};

export async function login(role: UserRole): Promise<AppUser> {
  await new Promise((res) => setTimeout(res, 500));

  const user = USERS[role];

  if (!user) {
    throw new Error("Invalid role");
  }

  return user;
}

export async function signup(
  name: string,
  email: string,
  role: UserRole,
): Promise<AppUser> {
  await new Promise((res) => setTimeout(res, 700));

  const newUser: AppUser = {
    id: crypto.randomUUID(),
    name,
    email,
    role,
    createdAt: new Date().toISOString(),
  } as AppUser;

  return newUser;
}

export function logout() {
  localStorage.removeItem("session");
}

export function saveSession(user: AppUser) {
  localStorage.setItem("session", JSON.stringify(user));
}

export function getSession(): AppUser | null {
  const data = localStorage.getItem("session");
  return data ? JSON.parse(data) : null;
}
