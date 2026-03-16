"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AppUser, UserRole } from "../types/user.types";
import * as authService from "../services/auth.service";

type AuthContextType = {
  user: AppUser | null;
  role: UserRole | null;
  loading: boolean;
  login: (role: UserRole) => Promise<void>;
  signup: (name: string, email: string, role: UserRole) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Load session on mount
  useEffect(() => {
    const session = authService.getSession();
    if (session) setUser(session);
    setLoading(false);
  }, []);

  const login = async (role: UserRole) => {
    setLoading(true);

    try {
      const loggedUser = await authService.login(role);
      authService.saveSession(loggedUser);
      setUser(loggedUser);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name: string, email: string, role: UserRole) => {
    setLoading(true);

    try {
      const newUser = await authService.signup(name, email, role);

      // Optional: auto-login after signup
      authService.saveSession(newUser);
      setUser(newUser);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    role: user?.role ?? null,
    loading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
