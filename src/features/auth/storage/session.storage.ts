import { AppUser } from "../types/user.types";

const SESSION_KEY = "client-portal-session";
const ROLE_COOKIE_KEY = "client_portal_role";

function setRoleCookie(role: AppUser["role"]) {
  document.cookie = `${ROLE_COOKIE_KEY}=${role}; path=/; max-age=${60 * 60 * 24 * 7}; samesite=lax`;
}

export function saveSession(user: AppUser) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  setRoleCookie(user.role);
}

export function getSession(): AppUser | null {
  const data = localStorage.getItem(SESSION_KEY);
  const session = data ? (JSON.parse(data) as AppUser) : null;

  if (session) {
    setRoleCookie(session.role);
  }

  return session;
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
  document.cookie = `${ROLE_COOKIE_KEY}=; path=/; max-age=0; samesite=lax`;
}
