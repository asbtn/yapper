import { useEffect, useState } from 'react';

import { AuthContext, type AuthContextValue } from './AuthContext';

import { getMe } from '@/api/users';
import type { UserType } from '@/types/UserType';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('jwt'));
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const userData = await getMe();
          setUser(userData.data.attributes);
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
