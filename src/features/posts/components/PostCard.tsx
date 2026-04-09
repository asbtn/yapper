import { AvatarFallback, Avatar } from '../../../components/ui/avatar';

import type { Post } from '@/features/posts/types/post';

export default function PostCard(props: { post: Post }) {
  const { post } = props;

  debugger;

  return (
    <article
      key={post.id}
      className="bg-accent/25 hover:bg-card/80 shadow-sm hover:shadow-md p-4 border border-border rounded-2xl transition-all duration-200"
    >
      <div className="flex gap-3">
        <Avatar className="mt-1 w-11 h-11 shrink-0">
          <AvatarFallback className="bg-primary text-primary-foreground">
            {post.user.username[0]}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <header className="flex items-baseline gap-2 mb-2">
            <span className="font-semibold text-sm">{post.user.username}</span>
            <span className="text-muted-foreground text-sm">{post.user.handle}</span>
            {/* <span className="ml-auto text-muted-foreground text-xs">{post.time}</span> */}
          </header>

          <p className="text-sm leading-relaxed whitespace-pre-wrap">{post.content}</p>
        </div>
      </div>
    </article>
  );
}
