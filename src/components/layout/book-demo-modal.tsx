"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type BookDemoContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const BookDemoContext = createContext<BookDemoContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function BookDemoProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  // Close modal when navigating to another page
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll and handle Escape key
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
    <BookDemoContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && <BookDemoModal onClose={closeModal} />}
    </BookDemoContext.Provider>
  );
}

export function useBookDemoModal() {
  return useContext(BookDemoContext);
}

function DoubleChevronIcon() {
  return (
    <svg aria-hidden className="size-3.5 text-[#004D34]" viewBox="0 0 16 16" fill="none">
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

type BookDemoModalProps = {
  onClose: () => void;
};

export function BookDemoModal({ onClose }: BookDemoModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/65 backdrop-blur-sm animate-in fade-in duration-300 ease-out">
      {/* Backdrop click area */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-[540px] rounded-3xl bg-white p-6 sm:p-8 shadow-2xl transition-all my-auto animate-in zoom-in-95 duration-300 ease-out">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 flex size-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-all hover:bg-zinc-200 hover:text-zinc-800 active:scale-95 focus-visible:ring outline-none"
          aria-label="Close modal"
        >
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center">
            <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-[#004D34]/10 text-[#004D34]">
              <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-2">Request Received!</h3>
            <p className="max-w-sm text-sm text-zinc-600">
              Thank you for reaching out. Our team will contact you shortly to schedule your demo.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6 pr-8">
              <p className="mb-2 flex items-center text-[11px] font-semibold uppercase tracking-widest text-[#004D34]">
                <span className="mr-2 inline-block size-1.5 bg-[#004D34]" aria-hidden />
                CONTACT US
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-2">
                Let&apos;s help you get started
              </h2>
              <p className="text-xs sm:text-[13px] leading-relaxed text-zinc-500">
                Have questions or need support? Our team is here to help you plan, set up, and run your events seamlessly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-[12px] font-semibold text-zinc-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder=""
                  className="w-full rounded-xl bg-[#f2f4f3] px-4 py-3 text-sm font-medium text-zinc-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#004D34]"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-[12px] font-semibold text-zinc-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder=""
                  className="w-full rounded-xl bg-[#f2f4f3] px-4 py-3 text-sm font-medium text-zinc-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#004D34]"
                />
              </div>

              {/* Two Column Row: Phone Number & Organization */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[12px] font-semibold text-zinc-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder=""
                    className="w-full rounded-xl bg-[#f2f4f3] px-4 py-3 text-sm font-medium text-zinc-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#004D34]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-zinc-700 mb-1.5">
                    Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder=""
                    className="w-full rounded-xl bg-[#f2f4f3] px-4 py-3 text-sm font-medium text-zinc-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#004D34]"
                  />
                </div>
              </div>

              {/* Select Option */}
              <div>
                <label className="block text-[12px] font-semibold text-zinc-700 mb-1.5">
                  What do you want to do?
                </label>
                <div className="relative">
                  <select
                    defaultValue=""
                    required
                    className="w-full appearance-none rounded-xl bg-[#f2f4f3] px-4 py-3 text-sm font-medium text-zinc-700 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#004D34] cursor-pointer"
                  >
                    <option value="" disabled>
                      Select option
                    </option>
                    <option value="host-agm">
                      I want to host an Annual General Meeting
                    </option>
                    <option value="join-agm">
                      I want to join an Annual General Meeting
                    </option>
                    <option value="setup-innovation">
                      I want to setup an Innovation Challenge
                    </option>
                    <option value="join-innovation">
                      I want to participate in an Innovation Challenge
                    </option>
                    <option value="launch-product">
                      I want to launch a new Product
                    </option>
                    <option value="others">Others</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500">
                    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-[12px] font-semibold text-zinc-700 mb-1.5">
                  Additional Info
                </label>
                <textarea
                  rows={3}
                  placeholder=""
                  className="w-full rounded-xl bg-[#f2f4f3] px-4 py-3 text-sm font-medium text-zinc-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#004D34] resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#004D34] py-2 pl-2 pr-6 text-sm font-semibold text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-[#003d29] active:scale-95 focus-visible:ring outline-none cursor-pointer"
                >
                  <span className="flex size-6 items-center justify-center rounded-full bg-white text-[#004D34]">
                    <DoubleChevronIcon />
                  </span>
                  <span>Submit</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
