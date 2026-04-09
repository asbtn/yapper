import { createContext } from 'react';

import type { User } from '@/features/users/types/user';

export type AuthContextValue = {
  loggedIn: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  user: User | null;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
