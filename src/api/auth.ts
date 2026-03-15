import { apiRequest } from './client';

import type { User } from '@/types/UserType';

export type LoginRequest = {
  email_address: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};

export function login(credentials: LoginRequest) {
  return apiRequest<LoginResponse>('/v1/sessions', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
}
