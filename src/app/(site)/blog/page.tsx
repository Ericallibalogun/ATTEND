"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BLOG_CATEGORIES,
  sampleBlogPosts,
  type BlogPost,
} from "@/lib/blog-data";
import { fetchBlogPosts } from "@/lib/sanity-blog-service";
import { FooterCta } from "@/components/layout/footer-cta";

function DoubleChevronIcon() {
  return (
    <svg
      aria-hidden
      className="size-3 text-[#004D34]"
      viewBox="0 0 16 16"
      fill="none"
    >
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
    <svg
      className="ml-1 size-3.5 transition-transform group-hover:translate-x-1"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 8h8M9 4l4 4-4 4" />
    </svg>
  );
}

function SearchIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

function normalizeCategory(value: string) {
  return value.toLowerCase().replace(/[&]/g, " ").replace(/\s+/g, " ").trim();
}

function postMatchesFilters(
  post: BlogPost,
  selectedCategory: string,
  searchQuery: string,
) {
  const matchesCategory =
    selectedCategory === "All" ||
    normalizeCategory(post.category) === normalizeCategory(selectedCategory);

  const q = searchQuery.trim().toLowerCase();
  const matchesSearch =
    !q ||
    post.title.toLowerCase().includes(q) ||
    post.excerpt.toLowerCase().includes(q) ||
    post.category.toLowerCase().includes(q);

  return matchesCategory && matchesSearch;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>(sampleBlogPosts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchBlogPosts().then((fetched) => {
      if (fetched && fetched.length > 0) {
        setPosts(fetched);
      }
    });
  }, []);

  const filteredPosts = useMemo(
    () =>
      posts.filter((post) =>
        postMatchesFilters(post, selectedCategory, searchQuery),
      ),
    [posts, selectedCategory, searchQuery],
  );

  const featuredPost = filteredPosts[0] ?? sampleBlogPosts[0];
  const gridPosts = filteredPosts.slice(1);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
    setTimeout(() => setNewsletterSubmitted(false), 3500);
  };

  const openSearch = () => {
    setSearchOpen((prev) => !prev);
    requestAnimationFrame(() => searchInputRef.current?.focus());
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="w-full px-4 pb-5 sm:px-8 sm:pb-10 lg:px-16"
        style={{
          paddingTop: "calc(var(--home-header-height, 72px) + 1.5rem)",
        }}
      >
        <p className="mb-2.5 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#004D34] sm:mb-3">
          <span
            className="mr-2 inline-block size-1.5 bg-[#004D34]"
            aria-hidden
          />
          BLOG
        </p>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
          <h1 className="max-w-xl text-[1.85rem] font-bold leading-[1.15] tracking-tight text-zinc-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Insights that move you forward
          </h1>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <p className="max-w-md text-left text-[13px] leading-relaxed text-zinc-500 sm:text-sm lg:text-right">
              Trends, strategies, and practical guides to help you plan, run,
              and scale impactful virtual and hybrid events.
            </p>

            <div className="relative hidden w-full max-w-sm lg:block">
              <SearchIcon className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-none bg-[#f2f4f3] py-2.5 pl-10 pr-4 text-sm text-zinc-900 outline-none transition-colors focus:bg-white focus:ring-2 focus:ring-[#004D34]/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile filter bar */}
      <div
        className="sticky z-40 border-b border-zinc-100 bg-white/95 backdrop-blur-md lg:hidden"
        style={{ top: "var(--home-header-height, 72px)" }}
      >
        <div className="px-4 py-3">
          <div className="-mx-4 flex flex-nowrap items-center gap-2 overflow-x-auto px-4 scrollbar-none">
            <button
              type="button"
              onClick={openSearch}
              aria-label="Search posts"
              aria-pressed={searchOpen || Boolean(searchQuery)}
              className={`flex size-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                searchOpen || searchQuery
                  ? "bg-[#004D34] text-white"
                  : "bg-[#004D34] text-white"
              }`}
            >
              <SearchIcon className="size-4" />
            </button>

            {BLOG_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              const isAll = category === "All";
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => selectCategory(category)}
                  className={`shrink-0 cursor-pointer whitespace-nowrap text-[12px] font-medium transition-colors ${
                    isAll
                      ? `flex size-10 items-center justify-center rounded-full ${
                          isActive
                            ? "bg-[#004D34] text-white"
                            : "border border-zinc-200 bg-white text-zinc-700"
                        }`
                      : `rounded-full px-4 py-2.5 ${
                          isActive
                            ? "bg-[#004D34] text-white"
                            : "border border-zinc-200 bg-white text-zinc-700"
                        }`
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {searchOpen && (
            <div className="relative mt-3">
              <SearchIcon className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
              <input
                ref={searchInputRef}
                type="search"
                placeholder="Search posts"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-zinc-200 bg-[#f2f4f3] py-2.5 pl-10 pr-4 text-[13px] text-zinc-900 outline-none focus:bg-white focus:ring-2 focus:ring-[#004D34]/20"
              />
            </div>
          )}
        </div>
      </div>

      <section className="w-full px-4 pb-14 pt-6 sm:px-8 sm:pb-20 lg:px-16 lg:pt-0">
        {/* Mobile feed */}
        <div className="flex flex-col gap-10 lg:hidden">
          {filteredPosts.length === 0 ? (
            <p className="py-10 text-center text-[14px] text-zinc-500">
              No posts match this filter. Try another category or clear search.
            </p>
          ) : (
            filteredPosts.map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative mb-3 aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="100vw"
                      priority={post.id === "1"}
                    />
                  </div>
                  <div className="mb-2 flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                    <div className="flex min-w-0 items-center gap-1.5">
                      <span className="truncate text-[#004D34]">
                        {post.category}
                      </span>
                      <span aria-hidden>•</span>
                      <span className="shrink-0">{post.readTime}</span>
                    </div>
                    <span className="shrink-0">{post.date}</span>
                  </div>
                  <h2 className="mb-2 text-[1.15rem] font-bold leading-snug tracking-tight text-zinc-900 transition-colors group-hover:text-[#004D34]">
                    {post.title}
                  </h2>
                  <p className="mb-3 line-clamp-3 text-[13px] leading-relaxed text-zinc-600">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-[12.5px] font-semibold text-[#004D34]">
                    Read more
                    <ArrowRightIcon />
                  </span>
                </Link>
              </article>
            ))
          )}

          {filteredPosts.length > 0 && (
            <div className="mt-2 flex items-center justify-center gap-2 pt-2">
              <button
                type="button"
                className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:bg-zinc-100"
                aria-label="Previous page"
              >
                <svg
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white shadow-xs"
              >
                1
              </button>
              <button
                type="button"
                className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
              >
                2
              </button>
              <button
                type="button"
                className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
              >
                3
              </button>
              <span className="px-1 text-xs text-zinc-400">...</span>
              <button
                type="button"
                className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:bg-zinc-100"
                aria-label="Next page"
              >
                <svg
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Desktop: sidebar + featured + grid */}
        <div className="hidden grid-cols-1 gap-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-12">
          <aside className="flex flex-col gap-8 lg:col-span-3 lg:sticky lg:top-[calc(var(--home-header-height,120px)+1rem)] lg:gap-10 lg:self-start">
            <div>
              <h3 className="mb-3 text-sm font-bold tracking-tight text-zinc-900">
                Filter
              </h3>
              <div className="flex flex-col items-start gap-2">
                {BLOG_CATEGORIES.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => selectCategory(category)}
                      className={`shrink-0 cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-left text-xs font-medium transition-colors ${
                        isActive
                          ? "bg-[#004D34] text-white shadow-xs"
                          : "border border-zinc-200/80 bg-[#f2f4f3] text-zinc-700 hover:bg-zinc-200"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-none border border-zinc-200/80 bg-[#f9fbf9] p-6 shadow-xs">
              <h4 className="mb-2 text-sm font-bold text-zinc-900">
                Stay ahead of every event
              </h4>
              <p className="mb-4 text-xs leading-relaxed text-zinc-500">
                Get insights, tips, and updates to help you plan and deliver
                better virtual and hybrid events.
              </p>

              {newsletterSubmitted ? (
                <div className="rounded-none bg-[#004D34]/10 p-3 text-center text-xs font-medium text-[#004D34]">
                  Subscribed successfully!
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter Email Address"
                    className="w-full rounded-full border border-zinc-200 bg-white px-3.5 py-2.5 text-xs text-zinc-900 outline-none focus:ring-2 focus:ring-[#004D34]/20"
                  />
                  <button
                    type="submit"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#004D34] py-1.5 pl-1.5 pr-4 text-xs font-semibold text-white shadow-xs transition-opacity hover:opacity-90"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-white text-[#004D34]">
                      <DoubleChevronIcon />
                    </span>
                    <span>Submit</span>
                  </button>
                </form>
              )}
            </div>
          </aside>

          <div className="flex flex-col gap-8 lg:col-span-9 lg:gap-10">
            {filteredPosts.length === 0 ? (
              <p className="py-16 text-center text-sm text-zinc-500">
                No posts match this filter. Try another category or clear
                search.
              </p>
            ) : (
              <>
                <div className="group overflow-hidden border border-zinc-200/80 bg-white shadow-xs transition-shadow hover:shadow-md">
                  <Link href={`/blog/${featuredPost.slug}`} className="block">
                    <div className="relative h-[340px] w-full overflow-hidden bg-zinc-100">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        priority
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8">
                      <div className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#004D34]">
                            {featuredPost.category}
                          </span>
                          <span>•</span>
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <span>{featuredPost.date}</span>
                      </div>
                      <h2 className="mb-3 text-2xl font-bold leading-snug tracking-tight text-zinc-900 transition-colors group-hover:text-[#004D34]">
                        {featuredPost.title}
                      </h2>
                      <p className="mb-4 max-w-3xl text-sm leading-relaxed text-zinc-600">
                        {featuredPost.excerpt}
                      </p>
                      <div className="inline-flex items-center text-xs font-semibold text-[#004D34]">
                        <span>Read Article</span>
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </Link>
                </div>

                {gridPosts.length > 0 && (
                  <div className="grid grid-cols-2 gap-6">
                    {gridPosts.map((post) => (
                      <div
                        key={post.id}
                        className="group flex flex-col overflow-hidden border border-zinc-200/80 bg-white shadow-xs transition-all hover:shadow-md"
                      >
                        <Link
                          href={`/blog/${post.slug}`}
                          className="flex h-full flex-col"
                        >
                          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-between p-6">
                            <div>
                              <div className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[#004D34]">
                                    {post.category}
                                  </span>
                                  <span>•</span>
                                  <span>{post.readTime}</span>
                                </div>
                                <span>{post.date}</span>
                              </div>
                              <h3 className="mb-3 text-lg font-bold leading-snug tracking-tight text-zinc-900 transition-colors group-hover:text-[#004D34]">
                                {post.title}
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
                )}

                <div className="mt-6 flex items-center justify-center gap-2 pt-4">
                  <button
                    type="button"
                    className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:bg-zinc-100"
                    aria-label="Previous page"
                  >
                    <svg
                      className="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-[#004D34] text-xs font-bold text-white shadow-xs"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
                  >
                    3
                  </button>
                  <span className="px-1 text-xs text-zinc-400">...</span>
                  <button
                    type="button"
                    className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:bg-zinc-100"
                    aria-label="Next page"
                  >
                    <svg
                      className="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <FooterCta />
    </>
  );
}
