import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPostBody } from "@/components/sections/blog/BlogPostBody";
import { getBlogCategoryLabel } from "@/lib/blog/categories";
import { BLOG_POSTS, getBlogPostBySlug } from "@/content/blog";
import { getBlogPostFaqSchema, getBlogPostingSchema, getBreadcrumbListSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const categoryLabel = getBlogCategoryLabel(post.category);
  const postingSchema = getBlogPostingSchema(post);
  const faqSchema = getBlogPostFaqSchema(post);
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: categoryLabel, path: `/blog/tema/${post.category}` },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <BlogPostBody post={post} />
    </>
  );
}
