/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AuthContextType {
  token: string | null;
  user: any | null;
  login: (token: string, user: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(localStorage.getItem('aaplahub_token'));
  const [user, setUser] = useState<any | null>(() => {
    try {
      const stored = localStorage.getItem('aaplahub_user');
      return stored && stored !== 'undefined' ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const login = (newToken: string, newUser: any) => {
    localStorage.setItem('aaplahub_token', newToken);
    localStorage.setItem('aaplahub_user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem('aaplahub_token');
    localStorage.removeItem('aaplahub_user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
