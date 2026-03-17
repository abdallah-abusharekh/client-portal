import { AppUser } from "../types/user.types";

const SESSION_KEY = "client-portal-session";

export function saveSession(user: AppUser) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function getSession(): AppUser | null {
  const data = localStorage.getItem(SESSION_KEY);
  return data ? JSON.parse(data) : null;
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}
