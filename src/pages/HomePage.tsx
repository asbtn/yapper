// src/pages/HomePage.tsx
import { useState } from 'react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const [newPostText, setNewPostText] = useState('');

  const posts = [
    {
      id: 1,
      username: 'Sarah M.',
      handle: '@sarahm',
      body: 'Just finished my morning run. 5km in 28 minutes. Feeling great! 🏃‍♀️',
      time: '2m',
    },
    {
      id: 2,
      username: 'Mike Chen',
      handle: '@mikechen',
      body: 'New coffee shop downtown has the best flat white. Finally found my spot.',
      time: '8m',
    },
    {
      id: 3,
      username: 'Emma R.',
      handle: '@emmar',
      body: "Book rec: 'The Midnight Library'. Perfect weekend read if you like magical realism.",
      time: '15m',
    },
    {
      id: 4,
      username: 'David K.',
      handle: '@davidk',
      body: 'Just planted tomatoes in the backyard. First garden attempt. Wish me luck! 🌱',
      time: '24m',
    },
    {
      id: 5,
      username: 'Lisa T.',
      handle: '@lisat',
      body: "Puppy update: Max learned 'sit' today. Treats = best invention ever 🐶",
      time: '47m',
    },
    {
      id: 6,
      username: 'Carlos R.',
      handle: '@carlosr',
      body: 'Road trip playlist complete. 12 hours of indie rock for the mountains.',
      time: '1h',
    },
    {
      id: 7,
      username: 'Anna L.',
      handle: '@annal',
      body: 'Baked sourdough again. Crust came out perfect this time. Patience pays off.',
      time: '2h',
    },
    {
      id: 8,
      username: 'Tom W.',
      handle: '@tomw',
      body: 'Weekend project: building a workbench in the garage. Leveling is harder than expected.',
      time: '3h',
    },
    {
      id: 9,
      username: 'Rachel P.',
      handle: '@rachelp',
      body: 'Found the coziest coffee shop with perfect reading lighting. 📚☕',
      time: '5h',
    },
    {
      id: 10,
      username: 'James B.',
      handle: '@jamesb',
      body: 'Morning hike was foggy but peaceful. Nature reset complete.',
      time: '7h',
    },
  ];



  function handleNewPost(e: React.FormEvent) {
    e.preventDefault();
    if (!newPostText.trim()) return;
    console.log('New post:', newPostText);
    setNewPostText('');
  }

  return (
    <div className="mx-auto p-4 w-full max-w-150">
      {/* Composer: Avatar + textarea */}
      <form onSubmit={handleNewPost} className="flex gap-3 mb-6">
        <Avatar className="flex-shrink-0 mt-1 w-11 h-11">
          <AvatarFallback className="bg-primary text-primary-foreground">
            A</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <textarea
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
            className="bg-background p-4 border border-border rounded-2xl outline-none w-full h-20 placeholder:text-muted-foreground resize-none"
            placeholder="What’s happening?"
          />
          <div className="flex justify-end mt-2">
            <Button type="submit" size="sm" className="px-6 rounded-full h-9" disabled={!newPostText.trim()}>
              Post
            </Button>
          </div>
        </div>
      </form>

      {/* Posts */}
      <div className="space-y-3">
        {posts.map((post) => (
          <article
            key={post.id} className="bg-accent/25 hover:bg-card/80 shadow-sm hover:shadow-md p-4 border border-border rounded-2xl transition-all duration-200"
          >
            <div className="flex gap-3">
              {/* Avatar */}
              <Avatar className="flex-shrink-0 mt-1 w-11 h-11">
                <AvatarFallback className="bg-primary text-primary-foreground">{post.username[0]}</AvatarFallback>
              </Avatar>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <header className="flex items-baseline gap-2 mb-2">
                  <span className="font-semibold text-sm">{post.username}</span>
                  <span className="text-muted-foreground text-sm">{post.handle}</span>
                  <span className="ml-auto text-muted-foreground text-xs">{post.time}</span>
                </header>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{post.body}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
