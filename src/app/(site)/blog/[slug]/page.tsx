import { notFound } from "next/navigation";
import { BlogPostPageClient } from "@/components/blog/blog-post-page-client";
import { fetchBlogPostBySlug, fetchBlogPosts } from "@/lib/sanity-blog-service";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    fetchBlogPostBySlug(slug),
    fetchBlogPosts(),
  ]);

  if (!post) {
    notFound();
  }

  return <BlogPostPageClient post={post} allPosts={allPosts} />;
}
