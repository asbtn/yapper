// src/pages/FollowingPage.tsx (copy of FollowersPage)
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function FollowingPage() {
  const [page, setPage] = useState(1);
  const perPage = 5;

  // Mock *following* - people yapper follows
  const allFollowing = [];

  const totalFollowing = allFollowing.length;
  const totalPages = Math.ceil(totalFollowing / perPage);
  const start = (page - 1) * perPage;
  const currentFollowing = allFollowing.slice(start, start + perPage);

  const toggleFollow = (userId: number) => {
    console.log('Unfollow', userId); // Since these are already followed
  };

  return (
    <div className="mx-auto p-4 w-full max-w-150">
      {/* Counts + Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="font-bold text-2xl">Following</h1>
          <p className="text-muted-foreground text-sm">
            {totalFollowing} accounts
          </p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-foreground text-sm">247 followers</p>
          <p className="text-muted-foreground text-xs">247 people follow you</p>
        </div>
      </div>

      {/* Following List */}
      <div className="space-y-3 mb-8">
        {currentFollowing.map((user) => (
          <article
            key={user.id}
            className="flex items-center gap-3 hover:bg-accent/50 p-4 border border-border rounded-2xl transition-all duration-200"
          >
            <Avatar className="flex-shrink-0 w-12 h-12">
              <AvatarFallback className="bg-primary font-bold text-primary-foreground text-sm">
                {user.username[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <header className="flex items-baseline gap-2 mb-1">
                <span className="font-semibold text-sm truncate">{user.username}</span>
                <span className="text-muted-foreground text-xs">·</span>
                <span className="text-muted-foreground text-xs truncate">{user.handle}</span>
              </header>
              <p className="text-muted-foreground text-xs truncate leading-relaxed">
                {user.bio}
              </p>
            </div>
            <Button
              size="sm"
              className="px-4 rounded-full h-8 font-semibold text-xs"
              variant="secondary"
              onClick={() => toggleFollow(user.id)}
            >
              Following
            </Button>
          </article>
        ))}
      </div>

      {/* Pagination - same as Followers */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="p-0 rounded-full w-9 h-9"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Button
                key={p}
                variant={p === page ? 'default' : 'outline'}
                size="sm"
                className="px-0 rounded-full w-9 h-9"
                onClick={() => setPage(p)}
              >
                {p}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="p-0 rounded-full w-9 h-9"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
