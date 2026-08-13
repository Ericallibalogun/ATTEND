import { BlogPageClient } from "@/components/blog/blog-page-client";
import { fetchBlogPosts } from "@/lib/sanity-blog-service";

export const metadata = {
  title: "Blog | Attend",
  description:
    "Trends, strategies, and practical guides to help you plan, run, and scale impactful virtual and hybrid events.",
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return <BlogPageClient initialPosts={posts} />;
}
