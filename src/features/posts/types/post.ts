import type { User } from '@/features/users/types/user';

export type Post = {
  id: number;
  content: string;
  created_at: string;
  user: User
};
