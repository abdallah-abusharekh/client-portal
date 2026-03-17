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

  useEffect(() => {
    const session = authService.restoreSession();
    if (session) setUser(session);

    setLoading(false);
  }, []);

  const login = async (role: UserRole) => {
    setLoading(true);

    try {
      const user = await authService.login(role);
      setUser(user);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name: string, email: string, role: UserRole) => {
    setLoading(true);

    try {
      const user = await authService.signup(name, email, role);
      setUser(user);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role: user?.role ?? null,
        loading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
