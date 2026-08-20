import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "./BlogCard";
import { BlogCategoryFilter } from "./BlogCategoryFilter";
import type { BlogCategorySlug, BlogPost } from "@/lib/blog/types";

type BlogListingProps = {
  eyebrow: string;
  title: string;
  description: string;
  posts: BlogPost[];
  activeCategory?: BlogCategorySlug;
};

export function BlogListing({ eyebrow, title, description, posts, activeCategory }: BlogListingProps) {
  return (
    <section className="border-b border-divider bg-background py-[72px] md:py-[100px]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-8">
          <BlogCategoryFilter active={activeCategory} />
        </div>

        {posts.length === 0 ? (
          <p className="mt-10 text-muted-foreground">
            Ainda não tem artigo publicado nesse tema — volta em breve ou fala com a gente pelo
            WhatsApp.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
