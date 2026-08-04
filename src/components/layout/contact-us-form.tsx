"use client";

import React, { useState } from "react";
import Image from "next/image";

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

export function ContactUsForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact-form" className="relative w-full overflow-hidden bg-[#f9fbf9] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy + Image Grid */}
          <div className="flex flex-col lg:col-span-6">
            <p className="mb-3 flex items-center text-xs font-semibold uppercase tracking-widest text-[#004D34]">
              <span className="mr-2 inline-block size-1.5 bg-[#004D34]" aria-hidden />
              CONTACT US
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-[48px] leading-[1.15]">
              Let&apos;s help
              <br />
              you get started
            </h2>
            <p className="mb-8 max-w-md text-sm text-zinc-600 leading-relaxed">
              Have questions or need support? Our team is here to help you plan, set up, and run your events seamlessly.
            </p>

            {/* Photo Cards Grid */}
            <div className="grid grid-cols-3 gap-3 overflow-hidden rounded-2xl">
              <div className="relative h-44 sm:h-52 w-full overflow-hidden rounded-xl bg-zinc-200">
                <Image
                  src="/boardroom.webp"
                  alt="Meeting room"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="relative h-44 sm:h-52 w-full overflow-hidden rounded-xl bg-zinc-200">
                <Image
                  src="/boardroom-2.webp"
                  alt="AGM presentation"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="relative h-44 sm:h-52 w-full overflow-hidden rounded-xl bg-zinc-200">
                <Image
                  src="/boardroom3.webp"
                  alt="Event coordination"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Green-Framed Form */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border-[10px] sm:border-[14px] border-[#89A89A] bg-white p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center justify-center">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-[#004D34]/10 text-[#004D34]">
                    <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">Message Sent!</h3>
                  <p className="max-w-sm text-sm text-zinc-600">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
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

                  {/* Grid Row: Phone Number & Organization */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[12px] font-semibold text-zinc-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
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
                        <option value="agm">Annual General Meeting (AGM)</option>
                        <option value="hackathon">Innovation Challenge / Hackathon</option>
                        <option value="launch">Product Launch Event</option>
                        <option value="other">Other Event Services</option>
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
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#004D34] py-2 pl-2 pr-6 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 cursor-pointer"
                    >
                      <span className="flex size-6 items-center justify-center rounded-full bg-white text-[#004D34]">
                        <DoubleChevronIcon />
                      </span>
                      <span>Submit</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
