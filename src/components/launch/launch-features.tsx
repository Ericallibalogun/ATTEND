import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const valueProps = [
  {
    title: "Broadcast quality",
    description:
      "Adaptive streaming, any bandwidth, powered by our virtual product demo software.",
    icon: "/Brutalism_16_1.webp",
  },
  {
    title: "Live reactions",
    description:
      "Polls, Q&A, applause in real time, the crowd is in the room.",
    icon: "/Brutalism_74_1.webp",
  },
  {
    title: "Leads captured",
    description: "Every attendee, every signal. No lead left behind.",
    icon: "/apps_1.webp",
  },
  {
    title: "Segment strip",
    description: "Slice your audience and measure what moved them.",
    icon: "/Brutalism_16_2.webp",
  },
  {
    title: "Press & partners",
    description: "Media kits, embargoes and briefings in one place.",
    icon: "/Brutalism_74_2.webp",
  },
  {
    title: "Corporate comms",
    description: "Rebrands, milestones and announcements, handled.",
    icon: "/data_check_double_1.webp",
  },
];

export function LaunchFeatures() {
  return (
    <section className="bg-white text-zinc-900">
      {/* 2cm from screen edges — full width, no max-width, no rounded corners */}
      <div className="w-full px-8 py-12 sm:px-12 lg:px-16 lg:py-16">
        <ScrollReveal yOffset={60}>
          <div className="w-full bg-[#EFF5F3] p-8 sm:p-12 lg:p-14">
            <div className="mb-12 text-center lg:mb-14">
              <p className="mb-3 flex items-center justify-center text-xs font-semibold uppercase tracking-widest text-[#004D34]">
                <span
                  className="mr-2 inline-block size-1.5 bg-[#004D34]"
                  aria-hidden
                />
                MAKE EVERY LAUNCH COUNT
              </p>
              <h2 className="text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                Deliver a high-impact product reveal
              </h2>
            </div>

            {/*
              Joined 3×2 grid:
              - hairline borders
              - soft mint glow from bottom-left → white
              - square corners
            */}
            <div className="overflow-hidden border border-[#d7e5df]">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {valueProps.map((item, idx) => (
                  <article
                    key={item.title}
                    className={`flex min-h-[240px] flex-col justify-start p-8 sm:p-10 lg:min-h-[260px] lg:p-11 ${
                      idx < 3 ? "border-b border-[#d7e5df]" : ""
                    } ${
                      idx % 3 !== 2 ? "md:border-r md:border-[#d7e5df]" : ""
                    }`}
                    style={{
                      background:
                        "radial-gradient(120% 90% at 0% 100%, #E2EEEA 0%, #F7FFFC 42%, #FFFFFF 72%)",
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={28}
                      height={28}
                      className="mb-8 size-7 object-contain object-left"
                    />
                    <h3 className="mb-3 text-lg font-semibold tracking-tight text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed text-zinc-600">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
