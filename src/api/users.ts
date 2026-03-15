import { apiRequest } from './client';

import type { User } from '@/types/UserType';

export type UserCreateRequest = {
  user: {
    username: string;
    email_address: string;
    password: string;
    password_confirmation: string;
  };
};

export function createUser(params: UserCreateRequest) {
  return apiRequest<User>('/v1/users', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}

export function getUser(id: string | number) {
  return apiRequest<User>(`/v1/users/${id}`, {
    method: 'GET',
  });
}

export function getMe() {
  return apiRequest<User>(`/v1/users/me`, {
    method: 'GET',
  });
}
