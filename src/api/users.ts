import { apiRequest } from './client';

import type { User } from '@/types/User';

export type UserCreateRequest = {
  user: {
    username: string;
    email_address: string;
    password: string;
    password_confirmation: string;
  }
};

export function userCreateRequest(params: UserCreateRequest) {
  return apiRequest<User>('/v1/users', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}