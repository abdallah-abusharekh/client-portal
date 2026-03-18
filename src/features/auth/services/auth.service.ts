import {
  loginRepository,
  signupRepository,
} from "../repositories/auth.repository";

import {
  saveSession,
  getSession,
  clearSession,
} from "../storage/session.storage";

import { AppUser, UserRole } from "../types/user.types";

export async function login(email: string, password: string): Promise<AppUser> {
  const user = await loginRepository(email, password);

  saveSession(user);

  return user;
}

export async function signup(
  name: string,
  email: string,
  role: UserRole,
): Promise<AppUser> {
  const user = await signupRepository(name, email, role);

  saveSession(user);

  return user;
}

export function logout() {
  clearSession();
}

export function restoreSession(): AppUser | null {
  return getSession();
}
