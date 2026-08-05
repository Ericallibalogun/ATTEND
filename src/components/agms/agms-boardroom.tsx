import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const features = [
  {
    iconSrc: "/Brutalism 16.webp",
    title: "AGMs & Shareholder Meetings",
    description: "Run statutory meetings with verified registration, proxy handling, live resolution voting and a full audit trail, end to end.",
  },
  {
    iconSrc: "/apps 1.webp",
    title: "Elections & Polls",
    description: "Secure ballots for boards, associations, unions and cooperatives, scheduled or live, with instant, verifiable results.",
  },
  {
    iconSrc: "/apps 1.webp",
    title: "Investor Relations",
    description: "Earnings calls, capital-raising roadshows and analyst briefings with moderated Q&A and broadcast-quality streaming.",
  },
  {
    iconSrc: "/Brutalism 74.webp",
    title: "Conferences & Summits",
    description: "Multi-track agendas, speaker management, networking and sponsor visibility for flagship industry gatherings.",
  },
];

export function AgmsBoardroom() {
  return (
    <section className="bg-white py-10 lg:py-14">
      <ScrollReveal yOffset={60}>
        <div className="mx-auto w-full px-6 lg:px-8">
        
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-8 xl:gap-10 items-stretch">
          {/* Left Collage - Appears second on mobile, first on desktop */}
          <div className="order-2 lg:order-1 relative min-h-[350px] sm:min-h-[400px] w-full lg:min-h-[580px] lg:h-full flex items-center">
            <Image
              src="/renewed_collage.webp"
              alt="Events collage"
              fill
              className="object-contain object-center lg:object-left"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>

          {/* Right Content - Appears first on mobile, second on desktop */}
          <div className="order-1 lg:order-2 flex flex-col">
            
            <div className="mb-10">
              <p className="mb-4 flex items-center text-[11px] font-semibold uppercase tracking-widest text-primary">
                <span className="mr-2 inline-block size-1.5 bg-primary" aria-hidden />
                ONE PLATFORM, EVERY GATHERING
              </p>
              <h2 className="mb-5 text-3xl font-medium leading-tight tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
                From the boardroom
                <br />
                to the big stage
              </h2>
              <p className="text-[14px] leading-relaxed text-zinc-600 max-w-xl">
                Attend adapts to the occasion, the same verified access, live engagement and instant results, whether you&apos;re passing resolutions or crowning a winning team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {features.map((feature, i) => {
                // Card 0 & Card 3: Solid white
                // Card 1 & Card 2: Linear gradient from #F7FFFC to #E2EEEA
                const isGradient = i === 1 || i === 2;
                
                return (
                  <div 
                    key={i} 
                    className={`flex flex-col justify-between p-6 lg:p-8 min-h-[276px] ${
                      isGradient 
                        ? 'bg-[linear-gradient(180deg,#F7FFFC_0%,#E2EEEA_100%)]' 
                        : 'bg-white'
                    }`}
                  >
                    <div>
                      <div className="mb-10 relative size-8">
                        <Image
                          src={feature.iconSrc}
                          alt={feature.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="mb-3 text-[16px] font-semibold text-zinc-900">
                        {feature.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-zinc-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
