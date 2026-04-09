import { apiRequest } from '../../../api/client';

import type { Post } from '@/features/posts/types/post';

export type PostCreateRequest = {
  content: string;
};

type PostResource = {
  id: string;
  type: 'post';
  attributes: Post;
};

type PostResponse = {
  data: PostResource;
};

type PostsResponse = {
  data: PostResource[];
};

export async function createPost(
  userId: number,
  params: PostCreateRequest
): Promise<Post> {
  const response = await apiRequest<PostResponse>(
    `/v1/users/${userId}/posts`,
    {
      method: 'POST',
      body: JSON.stringify(params),
    }
  );

  return response.data.attributes;
}

export async function getPost(id: number): Promise<Post> {
  const response = await apiRequest<PostResponse>(`/v1/posts/${id}`, {
    method: 'GET',
  });

  return response.data.attributes;
}

export async function getUserPosts(userId: number): Promise<Post[]> {
  const response = await apiRequest<PostsResponse>(
    `/v1/users/${userId}/posts`,
    {
      method: 'GET',
    }
  );

  return response.data.map((post) => post.attributes);
}