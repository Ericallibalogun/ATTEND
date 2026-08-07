export const siteConfig = {
  name: "Attend",
  description:
    "Attend is an enterprise events experience platform, built to power shareholder meetings, investor relations, product launch events, hackathon and innovation challenges.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contact: {
    email: "contact@attend.com",
    phones: ["09038274188", "08123456789"],
  },
  coverNav: [
    { label: "Annual General Meeting (AGM)", href: "/agms" },
    { label: "Innovation Challenge", href: "/services/innovation" },
    { label: "Launch Event", href: "/product-launch" },
    { label: "Blog", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
    { label: "About Us", href: "/about" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "AGMs", href: "/agms" },
    { label: "Innovation Challenge", href: "/services/innovation" },
    { label: "Product Launch", href: "/product-launch" },
    { label: "Gallery", href: "/gallery" },
  ],
} as const;

const platformDescription =
  "Attend is an enterprise events experience platform, built to power shareholder meetings, investor relations, product launch events, hackathon and innovation challenges. Your secure virtual event platform where every participant can join, engage and vote with confidence.";

export type HeroSlide = {
  label: string;
  href: string;
  image: string;
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  isAppButtons?: boolean;
};

export const heroSlides: HeroSlide[] = [
  {
    label: "Annual General Meetings (AGMs)",
    href: "/agms",
    image: "/boardroom.webp",
    eyebrow: "THE VIRTUAL EVENT PLATFORM FOR EVERY DECISIVE MOMENT",
    headline: "Your next meeting\ndeserves to be an experience",
    description: platformDescription,
    primaryCta: { label: "Book a demo", href: "/about" },
    secondaryCta: { label: "Learn More", href: "/agms" },
  },
  {
    label: "Innovation Challenge",
    href: "/hackathons",
    image: "/boardroom-2.webp",
    eyebrow: "ATTEND FOR INNOVATION CHALLENGE",
    headline: "Where ideas race\nthe clock.",
    description: platformDescription,
    primaryCta: { label: "Launch Hackathon", href: "/hackathons" },
    secondaryCta: { label: "See how it works", href: "/hackathons" },
  },
  {
    label: "Launch Event",
    href: "/product-launch",
    image: "/boardroom3.webp",
    eyebrow: "VIRTUAL PRODUCT LAUNCH AND EVENTS",
    headline: "Give your product the reveal it deserves.",
    description: platformDescription,
    primaryCta: { label: "Plan a launch", href: "/product-launch" },
    secondaryCta: { label: "See the run of show", href: "/product-launch" },
  },
  {
    label: "Get Started",
    href: "/about",
    image: "/svg_vector_2026-08-03 (2).webp",
    eyebrow: "GET STARTED",
    headline: "Stay connected\nwherever you are",
    description: "",
    isAppButtons: true,
  },
];

export const coverContent = heroSlides[0];
