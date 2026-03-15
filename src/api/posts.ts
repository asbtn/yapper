import { apiRequest } from './client';

import type { PostType } from '@/types/PostType';

export type PostCreateRequest = {
  content: string;
};

export function createPost(userId: number, params: PostCreateRequest) {
  return apiRequest<PostType>(`/v1/users/${userId}/posts`, {
    method: 'POST',
    body: JSON.stringify(params),
  });
}

export function getPost(id: number) {
  return apiRequest<PostType>(`/v1/posts/${id}`, {
    method: 'GET',
  });
}

export function getUserPosts(userId: number) {
  return apiRequest<{ data: PostType[] }>(`/v1/users/${userId}/posts`, {
    method: 'GET',
  });
}
