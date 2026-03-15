import { createContext } from 'react';

import type { UserType } from '@/types/UserType';

export type AuthContextValue = {
  loggedIn: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  user: UserType | null;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
