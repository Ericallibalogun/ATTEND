"use client";

import React, { useEffect, useState } from "react";
import { FooterCta } from "@/components/layout/footer-cta";

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  breadcrumb?: string;
  effectiveDate?: string;
  sections: LegalSection[];
}

export function LegalPageLayout({ title, breadcrumb, effectiveDate, sections }: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Find the current active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          // 120px offset to account for fixed header
          if (scrollPosition >= offsetTop - 120) {
            setActiveSection(section.id);
            break; // Since we iterate backwards, first match is the current active section
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for header
        behavior: "smooth"
      });
    }
    // Update URL hash without jumping
    window.history.pushState(null, "", `#${id}`);
    setActiveSection(id);
  };

  return (
    <>
      <div className="bg-[#F8FDF9] min-h-screen pt-32 pb-24">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="mb-12">
            {breadcrumb && (
              <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-[#00A650] mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00A650]"></div>
                {breadcrumb}
              </div>
            )}
            <h1 className="text-4xl md:text-[56px] leading-tight font-medium tracking-tight text-[#0a2518]">
              {title}
            </h1>
            {effectiveDate && (
              <div className="mt-4 text-[14px] md:text-[15px] text-gray-500 font-medium">
                {effectiveDate}
              </div>
            )}
          </div>

          <div className="w-full">
            <div className="bg-white border border-black/5 rounded-xl divide-y divide-black/5 overflow-hidden">
              {sections.map((section, index) => (
                <section key={section.id} id={section.id} className="scroll-mt-32 p-8 md:p-12 lg:p-16">
                  <div className="flex flex-col md:flex-row items-start md:gap-12">
                    <div className="text-[#00A650] font-semibold text-sm md:mt-2 mb-4 md:mb-0 w-8 md:w-12 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1 text-gray-600 leading-relaxed">
                      <h2 className="text-2xl md:text-3xl font-semibold text-[#0a2518] mb-6 md:mb-8">
                        {section.title}
                      </h2>
                      <div className="text-[13px] md:text-[14px] leading-[2.2] text-gray-600 space-y-8 md:space-y-10 [&_a]:text-[#00A650] [&_a]:no-underline hover:[&_a]:underline max-w-[1100px] font-medium tracking-[0.01em]">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterCta />
    </>
  );
}
