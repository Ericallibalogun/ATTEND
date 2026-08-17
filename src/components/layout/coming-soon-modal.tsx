"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

type ComingSoonContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ComingSoonContext = createContext<ComingSoonContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ComingSoonProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <ComingSoonContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && <ComingSoonModal onClose={closeModal} />}
    </ComingSoonContext.Provider>
  );
}

export function useComingSoonModal() {
  return useContext(ComingSoonContext);
}

type ComingSoonModalProps = {
  onClose: () => void;
};

export function ComingSoonModal({ onClose }: ComingSoonModalProps) {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-black/65 p-4 backdrop-blur-sm sm:p-6">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 my-auto w-full max-w-[540px] overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="absolute inset-0">
          <Image
            src="/CTA BG DESKTOP (1).webp"
            alt=""
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex size-8 items-center justify-center rounded-full bg-white/80 text-zinc-500 transition-all hover:bg-white hover:text-zinc-800"
          aria-label="Close modal"
        >
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="relative z-10 px-6 pb-0 pt-10 text-center sm:px-10 sm:pt-12">
          <p className="mb-3 flex items-center justify-center text-[11px] font-semibold uppercase tracking-widest text-[#004D34]">
            <span className="mr-2 inline-block size-1.5 bg-[#004D34]" aria-hidden />
            Coming Soon
          </p>
          <h2 className="mx-auto max-w-md text-[1.75rem] font-bold leading-tight tracking-tight text-zinc-900 sm:text-[2rem]">
            The Attend App is Coming Soon
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
            We&apos;re putting the finishing touches on the Attend app. You&apos;ll
            soon be able to participate in AGMs, hackathons and events right from
            your device.
          </p>

          <div className="relative mx-auto mt-6 h-[220px] w-full max-w-[420px] sm:mt-8 sm:h-[260px]">
            <Image
              src="/Group 6102.webp"
              alt="Attend app preview on mobile devices"
              fill
              className="object-contain object-bottom"
              priority
              quality={100}
              sizes="(max-width: 640px) 90vw, 420px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
