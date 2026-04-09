// src/pages/ProfilePage.tsx

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { getUserPosts } from '@/features/posts/api/posts';
import PostCard from '@/features/posts/components/PostCard';
import PostForm from '@/features/posts/components/PostForm';
import type { Post } from '@/features/posts/types/post';
import { getUser } from '@/features/users/api/users';
import type { User } from '@/features/users/types/user';

export default function ProfilePage() {
  const { handle } = useParams() as { handle: string };
  const [user, setUser] = useState<User | null>(null);
  const [profilePosts, setProfilePosts] = useState<Post[]>([]);

  const fetchPosts = (id: number) => {
    getUserPosts(id)
      .then((posts) => setProfilePosts(posts))
      .catch((error) => console.error('Error fetching posts:', error));
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (handle) {
        try {
          const userData = await getUser(handle);
          setUser(userData);
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      }
    };
    fetchUser();
  }, [handle]);

  useEffect(() => {
    if (user?.id) {
      fetchPosts(user.id);
    }
  }, [user?.id]);

  const handlePostCreated = (newPost: Post) => {
    setProfilePosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="mx-auto p-4 w-full max-w-150">
      <section className="space-y-6 mb-8">
        <div className="flex justify-center">
          <Avatar className="shadow-lg border-4 border-background w-24 h-24">
            <AvatarFallback className="bg-primary font-bold text-primary-foreground text-2xl">
              {user?.username[0]}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="space-y-2 text-center">
          <h1 className="font-bold text-2xl">{user?.username}</h1>
          <p className="text-muted-foreground text-lg">{user?.handle}</p>
          <p className="mx-auto px-4 max-w-md text-sm leading-relaxed">
            {user?.bio}
          </p>
        </div>
      </section>

      <PostForm onPostCreated={handlePostCreated} />

      <div className="space-y-3">
        {profilePosts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
