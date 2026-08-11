"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { defaultGalleryCategories, type GalleryCategory } from "@/lib/sanity-gallery-service";

export function GalleryShowcase({
  initialCategories = defaultGalleryCategories,
}: {
  initialCategories?: GalleryCategory[];
}) {
  const galleryCategories = initialCategories.length > 0 ? initialCategories : defaultGalleryCategories;
  const [openCategory, setOpenCategory] = useState<string | null>(
    galleryCategories[0]?.id || "launch"
  );
  const [activeImageIndices, setActiveImageIndices] = useState<
    Record<string, number>
  >({});

  const toggleCategory = (id: string) => {
    setOpenCategory((prev) => (prev === id ? null : id));
  };

  const nextImage = (catId: string, max: number) => {
    setActiveImageIndices((prev) => ({
      ...prev,
      [catId]: ((prev[catId] || 0) + 1) % max,
    }));
  };

  const prevImage = (catId: string, max: number) => {
    setActiveImageIndices((prev) => ({
      ...prev,
      [catId]: ((prev[catId] || 0) - 1 + max) % max,
    }));
  };

  return (
    <section
      className="bg-white pb-10 text-zinc-900 sm:pb-14 lg:pb-20"
      style={{
        paddingTop: "calc(var(--home-header-height, 72px) + 1.5rem)",
      }}
    >
      <ScrollReveal yOffset={60}>
        <div className="w-full px-4 sm:px-8 lg:px-16">
          <div className="mb-7 sm:mb-10">
            <p className="mb-2.5 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#004D34] sm:mb-3">
              <span
                className="mr-2 inline-block size-1.5 bg-[#004D34]"
                aria-hidden
              />
              VISUAL STORIES
            </p>
            <h1 className="text-[2rem] font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Gallery
            </h1>
          </div>

          <div className="flex flex-col border-t border-zinc-200">
            {galleryCategories.map((cat) => {
              const isOpen = openCategory === cat.id;
              const currentIdx = activeImageIndices[cat.id] || 0;
              const currentImg = cat.images[currentIdx];

              return (
                <div key={cat.id} className="border-b border-zinc-200">
                  <button
                    type="button"
                    onClick={() => toggleCategory(cat.id)}
                    className="flex w-full items-center justify-between gap-3 py-4 text-left transition-colors hover:text-[#004D34] sm:py-6"
                  >
                    <h2 className="min-w-0 text-[1.15rem] font-medium leading-snug tracking-tight text-zinc-900 sm:text-2xl md:text-3xl">
                      {cat.title}
                    </h2>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-transform duration-300 sm:size-9">
                      <svg
                        className={`size-4 transition-transform duration-300 sm:size-5 ${
                          isOpen ? "rotate-180 text-[#004D34]" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-7 pt-1 sm:pb-10 sm:pt-2">
                      <div className="relative h-[220px] w-full overflow-hidden bg-zinc-950 shadow-2xl sm:h-[500px] lg:h-[620px]">
                        <Image
                          src={currentImg.src}
                          alt={currentImg.alt}
                          fill
                          className="object-cover object-center transition-all duration-500 ease-out"
                          sizes="100vw"
                          priority
                        />

                        <button
                          type="button"
                          onClick={() => prevImage(cat.id, cat.images.length)}
                          className="absolute left-2 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95 sm:left-8 sm:size-11"
                          aria-label="Previous photo"
                        >
                          <svg
                            className="size-4 sm:size-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15 18l-6-6 6-6" />
                          </svg>
                        </button>

                        <button
                          type="button"
                          onClick={() => nextImage(cat.id, cat.images.length)}
                          className="absolute right-2 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95 sm:right-8 sm:size-11"
                          aria-label="Next photo"
                        >
                          <svg
                            className="size-4 sm:size-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-center gap-2 sm:mt-6">
                        {cat.images.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            type="button"
                            onClick={() =>
                              setActiveImageIndices((prev) => ({
                                ...prev,
                                [cat.id]: dotIdx,
                              }))
                            }
                            className={`transition-all duration-300 ${
                              currentIdx === dotIdx
                                ? "h-1.5 w-6 rounded-full bg-[#004D34]"
                                : "size-1.5 rounded-full bg-zinc-300 hover:bg-zinc-400"
                            }`}
                            aria-label={`Go to slide ${dotIdx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
