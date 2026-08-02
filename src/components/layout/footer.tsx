import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-primary text-white">
      {/* Background Image & Figma Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets1102.webp"
          alt=""
          fill
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          quality={100}
        />
        <Image
          src="/Rectangle 14 (1).webp"
          alt=""
          fill
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          quality={100}
        />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 py-16 lg:px-12 xl:py-24">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1.5fr] xl:grid-cols-[1fr_1.5fr] lg:gap-24">
          
          {/* Left Column */}
          <div className="flex flex-col">
            <Link href="/" className="mb-10 inline-block transition-opacity hover:opacity-90">
              <Image
                src="/Attend-2_logo.webp"
                alt="Attend"
                width={240}
                height={72}
                className="h-14 sm:h-16 lg:h-20 w-auto max-w-[260px] object-contain brightness-0 invert"
                priority
              />
            </Link>
            
            <h3 className="mb-4 text-[17px] font-semibold text-white">Stay ahead of every event</h3>
            <p className="mb-10 max-w-sm text-[13px] leading-[1.6] text-white/80">
              Get insights, tips, and updates to help you plan and deliver better virtual and hybrid events.
            </p>
            
            {/* Email Input */}
            <form className="flex w-full max-w-sm items-center rounded-full bg-white p-1.5 shadow-sm border border-[#004D34]/30">
              <input 
                type="email"
                placeholder="Enter Email Address" 
                className="w-full bg-transparent px-4 py-2 text-[13.5px] font-medium text-[#004D34] outline-none placeholder:text-[#004D34]/50"
              />
              <button 
                type="submit"
                className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#004D34] py-2.5 pl-2.5 pr-6 text-[14px] font-medium text-white transition-opacity hover:opacity-90 shadow-sm"
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-white text-[#004D34]">
                  <svg className="size-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l4 4-4 4M9 4l4 4-4 4" />
                  </svg>
                </span>
                Submit
              </button>
            </form>
          </div>

          {/* Right Column - Links Grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:pt-4">
            {/* Quick Links */}
            <div>
              <h4 className="mb-6 text-[11px] font-semibold tracking-wider text-white/50">QUICK LINKS</h4>
              <ul className="flex flex-col gap-4 text-[13px] text-white/90">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact us</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-6 text-[11px] font-semibold tracking-wider text-white/50">SERVICES</h4>
              <ul className="flex flex-col gap-4 text-[13px] text-white/90">
                <li><Link href="/services/agm" className="hover:text-white transition-colors">AGM</Link></li>
                <li><Link href="/services/innovation" className="hover:text-white transition-colors">Innovation Challenge</Link></li>
                <li><Link href="/services/launch" className="hover:text-white transition-colors">Launch Event</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-6 text-[11px] font-semibold tracking-wider text-white/50">CONTACT</h4>
              <ul className="flex flex-col gap-5 text-[13px] text-white/90">
                <li>070063747836</li>
                <li>0800MERISTEM</li>
                <li className="mt-2">
                  <div className="mb-4 text-[11px] font-semibold tracking-wider text-white/50 uppercase">EMAIL ADDRESS</div>
                  <a href="mailto:contact@experienceattend.com" className="underline underline-offset-4 hover:text-white transition-colors text-white/90">
                    contact@experienceattend.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Address & Socials */}
            <div>
              <h4 className="mb-6 text-[11px] font-semibold tracking-wider text-white/50">ADDRESS</h4>
              <p className="mb-8 text-[13px] leading-relaxed text-white/90">
                20A Gerrard Road, Ikoyi, Lagos
              </p>
              
              <h4 className="mb-4 text-[11px] font-semibold tracking-wider text-white/50">SOCIALS</h4>
              <div className="flex gap-3">
                <a href="#" aria-label="YouTube" className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
                  <svg className="size-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
                  <svg className="size-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
                  <svg className="size-[15px] text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" aria-label="X (Twitter)" className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
                  <svg className="size-[15px] text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-[13px] text-white/90 md:flex-row md:items-center">
          <div className="order-2 md:order-1">
            <p className="text-white/70">© 2026 Meristem Securities Limited. All rights reserved.</p>
          </div>
          <div className="order-1 flex gap-5 md:order-2 md:gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
