import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { getBlogCategoryLabel } from "@/lib/blog/categories";
import { formatBlogDate } from "@/lib/blog/format";
import type { BlogPost } from "@/lib/blog/types";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="h-full transition-colors group-hover:border-brand">
        <div className="flex items-center justify-between gap-2 font-mono text-xs uppercase tracking-[0.08em]">
          <span className="text-brand">{getBlogCategoryLabel(post.category)}</span>
          <time dateTime={post.date} className="text-muted-foreground">
            {formatBlogDate(post.date)}
          </time>
        </div>
        <p className="mt-4 font-display text-xl font-semibold text-card-foreground">{post.title}</p>
        <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
      </Card>
    </Link>
  );
}
