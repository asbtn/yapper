import { useEffect, useState } from 'react';

import { AuthContext, type AuthContextValue } from './AuthContext';

import { getMe } from '@/features/users/api/users';
import type { User } from '@/features/users/types/user';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('jwt'));
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const user = await getMe();
          setUser(user);
        } catch {
          localStorage.removeItem('jwt');
          setToken(null);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };
    fetchUser();
  }, [token]);

  const value: AuthContextValue = {
    loggedIn: !!token && !!user,
    token,
    user,
    login: (newToken: string) => {
      localStorage.setItem('jwt', newToken);
      setToken(newToken);
    },
    logout: () => {
      localStorage.removeItem('jwt');
      setToken(null);
    }
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
