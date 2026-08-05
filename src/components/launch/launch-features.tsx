import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const valueProps = [
  {
    title: "Broadcast quality",
    description: "Adaptive streaming, any bandwidth, powered by our virtual product demo software.",
    icon: "/Brutalism_16_1.webp",
  },
  {
    title: "Live reactions",
    description: "Polls, Q&A, applause in real time, the crowd is in the room.",
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
    <section className="bg-white py-12 lg:py-16 px-6 sm:px-10 lg:px-14 text-zinc-900">
      {/* Mint Background Container - 2cm away from screen edges */}
      <ScrollReveal yOffset={60}>
        <div className="mx-auto w-full max-w-[1480px] rounded-3xl bg-[#eff5f1] p-8 sm:p-12 lg:p-16">
          {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 flex items-center justify-center text-xs font-semibold uppercase tracking-widest text-[#004D34]">
            <span className="mr-2 inline-block size-1.5 bg-[#004D34]" aria-hidden />
            MAKE EVERY LAUNCH COUNT
          </p>
          <h2 className="mb-4 text-3xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Deliver a high-impact product reveal
          </h2>
        </div>

        {/* 6 Joined Cards inside Mint Container */}
        <div className="overflow-hidden rounded-2xl bg-white border border-zinc-200/60 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {valueProps.map((item, idx) => (
              <div
                key={idx}
                className={`group flex flex-col justify-start p-8 sm:p-10 lg:p-11 bg-linear-to-br from-white via-[#f9fcf9] to-[#ebf5ee] transition-all duration-300 hover:bg-white hover:shadow-sm hover:border-black/5 hover:-translate-y-0.5 relative z-0 hover:z-10 ${
                  idx < 3 ? "border-b border-zinc-200/60" : ""
                } ${
                  idx % 3 !== 2 ? "md:border-r md:border-zinc-200/60" : ""
                }`}
              >
                <div className="mb-8 relative size-10">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="size-10 object-contain"
                  />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-zinc-900 tracking-tight group-hover:text-[#1a3d2e] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-zinc-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
