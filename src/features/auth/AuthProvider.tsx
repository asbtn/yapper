import { useState } from 'react';

import { AuthContext, type AuthContextValue } from './AuthContext';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('jwt'));

  const value: AuthContextValue = {
    loggedIn: token != null,
    token,
    login: (newToken: string) => {
      localStorage.setItem('jwt', newToken);
      setToken(newToken);
    },
    logout: () => {
      localStorage.removeItem('jwt');
      setToken(null);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
