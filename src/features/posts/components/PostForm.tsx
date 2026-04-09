import { useState } from 'react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/features/auth/useAuth';
import { createPost } from '@/features/posts/api/posts';
import type { Post } from '@/features/posts/types/post';

export default function PostForm(props: { onPostCreated?: (newPost: Post) => void }) {
  const { onPostCreated = () => { } } = props;

  const [newPostText, setNewPostText] = useState('');

  const { user } = useAuth();

  const handleNewPost = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPostText.trim() && user) {
      createPost(user.id, { content: newPostText })
        .then((post) => {
          setNewPostText('');
          onPostCreated(post);
        })
        .catch((error) => console.error('Error posting new post:', error));
    }
  };

  return (
    <form onSubmit={handleNewPost} className="flex gap-3 mb-6">
      <Avatar className="mt-1 w-11 h-11 shrink-0">
        <AvatarFallback className="bg-primary text-primary-foreground">
          {user?.username[0]}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1">
        <textarea
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          className="bg-background p-4 border border-border rounded-2xl outline-none w-full h-20 placeholder:text-muted-foreground resize-none"
          placeholder="What’s happening?"
        />

        <div className="flex justify-end mt-2">
          <Button type="submit" size="sm" className="px-6 rounded-full h-9 cursor-pointer" disabled={!newPostText.trim()}>
            Yap!
          </Button>
        </div>
      </div>
    </form>
  );
}
