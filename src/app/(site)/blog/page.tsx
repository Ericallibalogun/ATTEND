"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_CATEGORIES, sampleBlogPosts } from "@/lib/blog-data";
import { TalkToTeamCta } from "@/components/layout/talk-to-team-cta";
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

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const featuredPost = sampleBlogPosts[0];

  const filteredPosts = sampleBlogPosts.slice(1).filter((post) => {
    const matchesCategory =
      selectedCategory === "All" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
    setTimeout(() => setNewsletterSubmitted(false), 3500);
  };

  return (
    <main className="relative min-h-screen bg-white font-sans text-zinc-900 pt-10 sm:pt-14">
      {/* Blog Page Hero Header */}
      <section className="w-full px-8 sm:px-12 lg:px-16 pb-12 pt-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          BLOG
        </p>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl max-w-xl leading-[1.15]">
            Insights that move you forward
          </h1>
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="max-w-md text-xs sm:text-sm text-zinc-500 leading-relaxed text-left lg:text-right">
              Trends, strategies, and practical guides to help you plan, run, and scale impactful virtual and hybrid events.
            </p>

            {/* Search Input */}
            <div className="relative w-full max-w-sm">
              <svg className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-none bg-[#f2f4f3] py-2.5 pl-10 pr-4 text-xs sm:text-sm text-zinc-900 outline-none transition-colors focus:bg-white focus:ring-2 focus:ring-[#004D34]/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout (Sidebar + Blog Posts Grid) */}
      <section className="w-full px-6 sm:px-12 lg:px-16 pb-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Sidebar: Filter Pills & Newsletter */}
          <aside className="lg:col-span-3 flex flex-col gap-8 lg:gap-10">
            {/* Filter Categories */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                FILTER
              </h3>
              <div className="flex flex-nowrap overflow-x-auto gap-2 pb-2 scrollbar-none -mx-6 px-6 sm:mx-0 sm:px-0 lg:flex-col lg:items-start lg:overflow-visible lg:pb-0">
                {BLOG_CATEGORIES.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition-colors cursor-pointer text-left ${
                        isActive
                          ? "bg-[#004D34] text-white shadow-xs"
                          : "bg-[#f2f4f3] text-zinc-700 hover:bg-zinc-200"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Subscription Card (Hidden on Mobile) */}
            <div className="hidden lg:block rounded-none border border-zinc-200/80 bg-[#f9fbf9] p-5 sm:p-6 shadow-xs">
              <h4 className="mb-2 text-sm font-bold text-zinc-900">
                Stay ahead of every event
              </h4>
              <p className="mb-4 text-xs text-zinc-500 leading-relaxed">
                Get insights, tips, and updates to help you plan and deliver better virtual and hybrid events.
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
                    placeholder="Enter email address"
                    className="w-full rounded-none border border-zinc-200 bg-white px-3.5 py-2.5 text-xs text-zinc-900 outline-none focus:ring-2 focus:ring-[#004D34]/20"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#004D34] py-1.5 pl-1.5 pr-4 text-xs font-semibold text-white transition-opacity hover:opacity-90 shadow-xs cursor-pointer"
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

          {/* Right Main Column: Featured Post + Post Grid */}
          <div className="lg:col-span-9 flex flex-col gap-8 lg:gap-10">
            
            {/* Featured Post Card */}
            <div className="group overflow-hidden rounded-none border border-zinc-200/80 bg-white shadow-xs transition-shadow hover:shadow-md">
              <Link href={`/blog/${featuredPost.slug}`} className="block">
                <div className="relative h-[200px] sm:h-[340px] w-full overflow-hidden bg-zinc-100 rounded-none">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-8">
                  <div className="mb-2 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#004D34]">{featuredPost.category}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <span>{featuredPost.date}</span>
                  </div>
                  <h2 className="mb-3 text-lg sm:text-2xl font-bold tracking-tight text-zinc-900 group-hover:text-[#004D34] transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>
                  <p className="mb-4 text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-3xl">
                    {featuredPost.excerpt}
                  </p>
                  <div className="inline-flex items-center text-xs font-semibold text-[#004D34]">
                    <span>Read Article</span>
                    <ArrowRightIcon />
                  </div>
                </div>
              </Link>
            </div>

            {/* Grid of Blog Posts (2 Columns) */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="group flex flex-col overflow-hidden rounded-none border border-zinc-200/80 bg-white shadow-xs transition-all hover:shadow-md"
                >
                  <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 rounded-none">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                      <div>
                        <div className="mb-2 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#004D34]">{post.category}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <span>{post.date}</span>
                        </div>
                        <h3 className="mb-3 text-base sm:text-lg font-bold tracking-tight text-zinc-900 group-hover:text-[#004D34] transition-colors leading-snug">
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

            {/* Pagination Controls */}
            <div className="mt-6 flex items-center justify-center gap-2 pt-4">
              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:bg-zinc-100 cursor-pointer"
                aria-label="Previous page"
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-full bg-[#004D34] text-xs font-bold text-white shadow-xs cursor-pointer"
              >
                1
              </button>
              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 cursor-pointer"
              >
                2
              </button>
              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 cursor-pointer"
              >
                3
              </button>
              <span className="px-1 text-xs text-zinc-400">...</span>
              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors hover:bg-zinc-100 cursor-pointer"
                aria-label="Next page"
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom Stacked CTAs */}
      <TalkToTeamCta />
      <FooterCta />
    </main>
  );
}
