import { apiRequest } from '@/api/client';
import type { User } from '@/features/users/types/user';

export type UserCreateRequest = {
  user: {
    username: string;
    email_address: string;
    password: string;
    password_confirmation: string;
  };
};

export type UserResource = {
  id: string;
  type: 'user';
  attributes: User;
};

export type UserResponse = {
  data: UserResource
};

export async function createUser(params: UserCreateRequest): Promise<User> {
  const response = await apiRequest<UserResponse>('/v1/users', {
    method: 'POST',
    body: JSON.stringify(params),
  });

  return response.data.attributes;
}

export async function getUser(id: string | number): Promise<User> {
  const response = await apiRequest<UserResponse>(`/v1/users/${id}`, {
    method: 'GET',
  });

  return response.data.attributes;
}

export async function getMe(): Promise<User> {
  const response = await apiRequest<UserResponse>('/v1/users/me', {
    method: 'GET',
  });

  return response.data.attributes;
}