"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryCategory {
  id: string;
  title: string;
  images: { src: string; alt: string }[];
}

const galleryCategories: GalleryCategory[] = [
  {
    id: "agm",
    title: "Annual General Meeting (AGM)",
    images: [
      { src: "/agm_real_1.webp", alt: "Executive Corporate Boardroom at Dusk" },
      { src: "/Frame_6086.webp", alt: "Annual General Meeting Keynote Presentation" },
      { src: "/boardroom.webp", alt: "Executive AGM Boardroom Setup" },
      { src: "/Frame 1321325430.webp", alt: "Verified Access & Voting Interface" },
    ],
  },
  {
    id: "innovation",
    title: "Innovation Challenge",
    images: [
      { src: "/innovation_real_1.webp", alt: "Tech Innovation Workshop Room" },
      { src: "/Frame_6086_1.webp", alt: "Innovation Challenge Pitch Stage" },
      { src: "/Frame 35776 (1).webp", alt: "Innovation Challenge Sprint" },
      { src: "/Frame 35774 (1).webp", alt: "Judge Scoring and Leaderboard Finale" },
    ],
  },
  {
    id: "hackathons",
    title: "Hackathons",
    images: [
      { src: "/hackathon_real_1.webp", alt: "Modern Tech Hackathon Architecture" },
      { src: "/Frame 35776.webp", alt: "Live Pitching and Mentor Office Hours" },
      { src: "/cropped_collage.webp", alt: "Hackathon Builder Collaboration" },
      { src: "/collage.webp", alt: "Hackathon Team Presentation" },
    ],
  },
  {
    id: "launch",
    title: "Launch Event",
    images: [
      { src: "/boardroom3.webp", alt: "Product Launch Stage Reveal Platform" },
      { src: "/3a18b6d36eead1a8f298c36a398284fd06d5b1c0.png", alt: "Broadcast Stage Camera & Lights" },
      { src: "/d19a92ced1ad518052748b12f9e464593833f903.png", alt: "Hardware Keynote Presentation" },
      { src: "/Frame 1321325422.webp", alt: "Registration Check-in Desk" },
    ],
  },
];

export function GalleryShowcase() {
  const [openCategory, setOpenCategory] = useState<string | null>("launch");
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({
    agm: 0,
    hackathons: 0,
    launch: 0,
  });

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
    <section className="bg-white py-14 lg:py-20 text-zinc-900">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#004D34]">
            <span className="mr-2 inline-block size-1.5 bg-[#004D34]" aria-hidden />
            GALLERY
          </p>
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Gallery
          </h1>
        </div>

        {/* Accordions List */}
        <div className="flex flex-col border-t border-zinc-200">
          {galleryCategories.map((cat) => {
            const isOpen = openCategory === cat.id;
            const currentIdx = activeImageIndices[cat.id] || 0;
            const currentImg = cat.images[currentIdx];

            return (
              <div key={cat.id} className="border-b border-zinc-200">
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleCategory(cat.id)}
                  className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[#004D34]"
                >
                  <h2 className="text-2xl font-medium tracking-tight text-zinc-900 sm:text-3xl">
                    {cat.title}
                  </h2>
                  <span className="flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-transform duration-300">
                    <svg
                      className={`size-5 transition-transform duration-300 ${
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

                {/* Accordion Content */}
                {isOpen && (
                  <div className="pb-10 pt-2">
                    {/* Carousel Box */}
                    <div className="relative h-[360px] sm:h-[500px] lg:h-[620px] w-full overflow-hidden bg-zinc-950 shadow-2xl">
                      <Image
                        src={currentImg.src}
                        alt={currentImg.alt}
                        fill
                        className="object-cover object-center transition-all duration-500 ease-out"
                        priority
                      />

                      {/* Left Arrow Button */}
                      <button
                        type="button"
                        onClick={() => prevImage(cat.id, cat.images.length)}
                        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95 z-10"
                        aria-label="Previous photo"
                      >
                        <svg
                          className="size-5"
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

                      {/* Right Arrow Button */}
                      <button
                        type="button"
                        onClick={() => nextImage(cat.id, cat.images.length)}
                        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95 z-10"
                        aria-label="Next photo"
                      >
                        <svg
                          className="size-5"
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

                    {/* Bottom Dots Indicator */}
                    <div className="mt-6 flex items-center justify-center gap-2">
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
    </section>
  );
}
