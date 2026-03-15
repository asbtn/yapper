import type { UserType } from '@/types/UserType';

export type PostType = {
  attributes: {
    id: number;
    content: string;
    created_at: string;
    user: UserType
  };
};
