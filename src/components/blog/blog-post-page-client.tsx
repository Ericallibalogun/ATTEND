"use client";

import { useState } from "react";
import Link from "next/link";
import { type BlogPost } from "@/lib/blog-data";
import { useNewsletterSubscribe } from "@/hooks/use-newsletter-subscribe";
import { SanityImage } from "@/components/sanity/sanity-image";
import { FooterCta } from "@/components/layout/footer-cta";

function DoubleChevronIcon() {
  return (
    <svg aria-hidden className="size-3 text-[#004D34]" viewBox="0 0 16 16" fill="none">
      <path
        d="M4 4l4 4-4 4M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="size-3.5 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8h8M9 4l4 4-4 4" />
    </svg>
  );
}

export function BlogPostPageClient({
  post,
  allPosts,
}: {
  post: BlogPost;
  allPosts: BlogPost[];
}) {
  const [copied, setCopied] = useState(false);
  const {
    email: newsletterEmail,
    setEmail: setNewsletterEmail,
    status: newsletterStatus,
    errorMessage: newsletterError,
    handleSubmit: handleNewsletterSubmit,
    isSubmitting: isNewsletterSubmitting,
  } = useNewsletterSubscribe("blog-post");

  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id && p.slug !== post.slug)
    .slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      {/* Full-width Top Hero Image — clear fixed header */}
      <section
        className="section-x w-full pb-6 sm:pb-10"
        style={{
          paddingTop: "calc(var(--home-header-height, 72px) + 1.25rem)",
        }}
      >
        <div className="relative h-[200px] w-full overflow-hidden bg-zinc-100 shadow-sm sm:h-[440px] lg:h-[520px]">
          <SanityImage
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Main Content Layout (Sidebar + Article Body) */}
      <section className="section-x w-full pb-14 sm:pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Sidebar: Newsletter Subscription (Hidden on Mobile) */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 rounded-none border border-zinc-200/80 bg-[#f9fbf9] p-6 shadow-xs">
              <h4 className="mb-2 text-sm font-bold text-zinc-900">
                Stay ahead of every event
              </h4>
              <p className="mb-4 text-xs text-zinc-500 leading-relaxed">
                Get insights, tips, and updates to help you plan and deliver better virtual and hybrid events.
              </p>

              {newsletterStatus === "success" ? (
                <div className="rounded-none bg-[#004D34]/10 p-3 text-center text-xs font-medium text-[#004D34]">
                  Subscribed successfully!
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(event) => setNewsletterEmail(event.target.value)}
                    placeholder="Enter email address"
                    disabled={isNewsletterSubmitting}
                    className="w-full rounded-none border border-zinc-200 bg-white px-3.5 py-2.5 text-xs text-zinc-900 outline-none focus:ring-2 focus:ring-[#004D34]/20 disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={isNewsletterSubmitting}
                    className="inline-flex items-center gap-2 rounded-full bg-[#004D34] py-1.5 pl-1.5 pr-4 text-xs font-semibold text-white transition-opacity hover:opacity-90 shadow-xs cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-white text-[#004D34]">
                      <DoubleChevronIcon />
                    </span>
                    <span>{isNewsletterSubmitting ? "Submitting..." : "Submit"}</span>
                  </button>
                  {newsletterStatus === "error" ? (
                    <p className="text-xs text-red-600">{newsletterError}</p>
                  ) : null}
                </form>
              )}
            </div>
          </aside>

          {/* Right Column: Main Article Body */}
          <article className="lg:col-span-8 flex flex-col">
            {/* Meta */}
            <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <div className="flex items-center gap-1.5">
                <span className="text-[#004D34]">{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <span>{post.date}</span>
            </div>

            {/* Title */}
            <h1 className="mb-4 text-[1.65rem] font-bold leading-[1.18] tracking-tight text-zinc-900 sm:mb-6 sm:text-4xl lg:text-[42px]">
              {post.title}
            </h1>

            {/* Intro Paragraph */}
            <p className="mb-6 text-[13.5px] font-normal leading-relaxed text-zinc-600 sm:mb-8 sm:text-base">
              {post.content?.intro ?? post.excerpt}
            </p>

            {/* Article Sections */}
            <div className="space-y-8 text-sm sm:text-base text-zinc-600 leading-relaxed">
              {post.content?.sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="mb-3 text-base sm:text-xl font-bold text-zinc-900">
                    {section.heading}
                  </h3>
                  <p className="font-normal">{section.body}</p>
                </div>
              )) ?? (
                <div>
                  <h3 className="mb-3 text-base sm:text-xl font-bold text-zinc-900">
                    1. Not setting a clear budget
                  </h3>
                  <p className="font-normal">
                    A great launch does more than generate buzz. Learn how to turn your next product reveal into a high-impact event that captures attention, engages your audience, and drives measurable outcomes.
                  </p>
                </div>
              )}
            </div>

            {/* Social Share Bar */}
            <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-zinc-200/80 pt-8">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mr-2">
                Share on:
              </span>

              {/* Copy Link */}
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-700 transition-colors hover:bg-zinc-200 cursor-pointer"
                aria-label="Copy link"
                title={copied ? "Link Copied!" : "Copy Link"}
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </button>

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="Share on X"
                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-700 transition-colors hover:bg-zinc-200"
              >
                <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="Share on LinkedIn"
                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-700 transition-colors hover:bg-zinc-200"
              >
                <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Share on Facebook"
                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-700 transition-colors hover:bg-zinc-200"
              >
                <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="#"
                aria-label="Share on WhatsApp"
                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-700 transition-colors hover:bg-zinc-200"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
              </a>
            </div>
          </article>

        </div>
      </section>

      {/* Related Articles Section */}
      <section className="border-t border-zinc-200/80 bg-[#f9fbf9] py-12 lg:py-24">
        <div className="w-full px-6 sm:px-12 lg:px-16">
          {/* Top Bar */}
          <div className="mb-2">
            <Link href="/blog" className="inline-flex items-center text-xs font-semibold text-zinc-500 uppercase tracking-wider hover:text-zinc-900 transition-colors">
              <span className="mr-1">&lt;</span> BLOG
            </Link>
          </div>

          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              Related articles
            </h2>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#004D34] py-2 pl-2 pr-5 text-xs font-semibold text-white shadow-xs transition-opacity hover:opacity-90"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-white text-[#004D34]">
                <DoubleChevronIcon />
              </span>
              <span>All Blogpost</span>
            </Link>
          </div>

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((rPost) => (
              <div
                key={rPost.id}
                className="group flex flex-col overflow-hidden rounded-none border border-zinc-200/80 bg-white shadow-xs transition-all hover:shadow-md"
              >
                <Link href={`/blog/${rPost.slug}`} className="flex flex-col h-full">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 rounded-none">
                    <SanityImage
                      src={rPost.image}
                      alt={rPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <div className="mb-2 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#004D34]">{rPost.category}</span>
                          <span>•</span>
                          <span>{rPost.readTime}</span>
                        </div>
                        <span>{rPost.date}</span>
                      </div>
                      <h3 className="mb-3 text-sm sm:text-base font-bold tracking-tight text-zinc-900 group-hover:text-[#004D34] transition-colors leading-snug">
                        {rPost.title}
                      </h3>
                    </div>
                    <div className="mt-4 inline-flex items-center text-xs font-semibold text-[#004D34]">
                      <span>Read Article</span>
                      <ArrowRightIcon />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile All Blogpost Button Below Cards */}
          <div className="mt-8 flex justify-start sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-[#004D34] py-2 pl-2 pr-5 text-xs font-semibold text-white shadow-xs transition-opacity hover:opacity-90"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-white text-[#004D34]">
                <DoubleChevronIcon />
              </span>
              <span>All Blogpost</span>
            </Link>
          </div>
        </div>
      </section>

      <FooterCta />
    </>
  );
}
