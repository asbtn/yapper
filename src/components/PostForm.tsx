import { useState } from 'react';

import { createPost } from '@/api/posts';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/features/auth/useAuth';

export default function PostForm() {
  const [newPostText, setNewPostText] = useState('');

  // Fetch profile data
  const profile = {
    avatarUrl: '',
    username: 'yapper',
    handle: '@yapper',
    bio: 'Building Yapper 🚀 | Rails dev gone full-stack | React noob',
  };

  const { user } = useAuth();

  // Post new post
  const handleNewPost = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPostText.trim()) {
      createPost(user.id, { content: newPostText })
        .then(() => {
          setNewPostText('');
        })
        .catch((error) => console.error('Error posting new post:', error));
    }
  };

  return (
    <form onSubmit={handleNewPost} className="flex gap-3 mb-6">
      <Avatar className="mt-1 w-11 h-11 shrink-0">
        <AvatarFallback className="bg-primary text-primary-foreground">
          {profile.username[0]}
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
