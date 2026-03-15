import { AvatarFallback, Avatar } from './ui/avatar';

import type { PostType } from '@/types/PostType';

export default function Post(props: { post: PostType }) {
  const { post } = props;

  return (
    <article
      key={post.attributes.id}
      className="bg-accent/25 hover:bg-card/80 shadow-sm hover:shadow-md p-4 border border-border rounded-2xl transition-all duration-200"
    >
      <div className="flex gap-3">
        <Avatar className="mt-1 w-11 h-11 shrink-0">
          <AvatarFallback className="bg-primary text-primary-foreground">
            {post.attributes.user.username[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <header className="flex items-baseline gap-2 mb-2">
            <span className="font-semibold text-sm">{post.attributes.user.username}</span>
            <span className="text-muted-foreground text-sm">{post.attributes.user.handle}</span>
            {/* <span className="ml-auto text-muted-foreground text-xs">{post.attributes.time}</span> */}
          </header>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{post.attributes.content}</p>
        </div>
      </div>
    </article>
  );
}
