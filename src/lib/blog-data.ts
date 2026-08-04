export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
  content?: {
    intro: string;
    sections: {
      heading: string;
      body: string;
    }[];
  };
};

export const BLOG_CATEGORIES = [
  "All",
  "Event Trends",
  "Product Updates",
  "Shareholder Meetings",
  "Conferences",
  "Product Launches",
  "Community & Engagement",
  "Innovation",
  "Success Stories",
];

export const sampleBlogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "how-to-run-a-product-launch-that-actually-drives-results",
    title: "How to run a product launch that actually drives results",
    excerpt:
      "A great launch does more than generate buzz. Learn how to turn your next product reveal into a high-impact event that captures attention, engages your audience, and drives measurable outcomes.",
    category: "INNOVATION",
    readTime: "5 min read",
    date: "Jun 12, 2026",
    image: "/boardroom-2.webp",
    featured: true,
    content: {
      intro:
        "A great launch does more than generate buzz. Learn how to turn your next product reveal into a high-impact event that captures attention, engages your audience, and drives measurable outcomes. Discover actionable tips on how to prepare your team, align your messaging, and leverage interactive event tools to turn interest into immediate customer action.",
      sections: [
        {
          heading: "1. Not setting a clear budget",
          body: "A great launch does more than generate buzz. Learn how to turn your next product reveal into a high-impact event that captures attention, engages your audience, and drives measurable outcomes. Without a well-defined financial roadmap, costs can easily spiral out of control, eating into expected margins and post-launch marketing resources.",
        },
        {
          heading: "2. Skipping proper documentation checks",
          body: "Many teams rush into launches without verifying what they can truly afford or legally claim. Factor in hidden costs like legal fees, compliance checks, and post-event technical support early in the planning process.",
        },
        {
          heading: "3. Letting emotions drive decisions",
          body: "Focus on empirical data and customer insights rather than personal instincts. Validate key messaging with test cohorts before broadcasting to the wider public.",
        },
        {
          heading: "4. Ignoring location factors",
          body: "Whether hosting a hybrid or purely virtual event, ensure your technical infrastructure and broadcast streaming tools scale effortlessly for all attendee region cohorts.",
        },
        {
          heading: "5. Not working with professionals",
          body: "Trying to navigate complex event workflows alone can be risky. Partner with trusted event platforms and production specialists who ensure execution excellence from start to finish.",
        },
      ],
    },
  },
  {
    id: "2",
    slug: "5-ways-to-increase-engagement-in-virtual-events",
    title: "5 Ways to Increase Engagement in Virtual Events",
    excerpt: "Discover proven techniques for keeping your virtual audience focused, active, and involved throughout your broadcast.",
    category: "PRODUCT LAUNCHES",
    readTime: "4 min read",
    date: "Jun 12, 2026",
    image: "/boardroom.webp",
  },
  {
    id: "3",
    slug: "5-ways-to-increase-engagement-in-virtual-events-2",
    title: "5 Ways to Increase Engagement in Virtual Events",
    excerpt: "Reactions, live polls, Q&A, and audience voting calculated in real-time.",
    category: "CONFERENCES",
    readTime: "4 min read",
    date: "Jun 12, 2026",
    image: "/hackathon_real_1.webp",
  },
  {
    id: "4",
    slug: "5-ways-to-increase-engagement-in-virtual-events-3",
    title: "5 Ways to Increase Engagement in Virtual Events",
    excerpt: "Tailored HD video streams with sub-second latency and multi-cam switching.",
    category: "PRODUCT LAUNCHES",
    readTime: "4 min read",
    date: "Jun 12, 2026",
    image: "/collage.webp",
  },
  {
    id: "5",
    slug: "5-ways-to-increase-engagement-in-virtual-events-4",
    title: "5 Ways to Increase Engagement in Virtual Events",
    excerpt: "Permissions, branded chat moderation, and executive analytics dashboard.",
    category: "PRODUCT LAUNCHES",
    readTime: "4 min read",
    date: "Jun 12, 2026",
    image: "/boardroom3.webp",
  },
  {
    id: "6",
    slug: "5-ways-to-increase-engagement-in-virtual-events-5",
    title: "5 Ways to Increase Engagement in Virtual Events",
    excerpt: "Enable 360° product exploration and live feature walk-throughs.",
    category: "PRODUCT LAUNCHES",
    readTime: "4 min read",
    date: "Jun 12, 2026",
    image: "/hackathon_real_1.webp",
  },
  {
    id: "7",
    slug: "5-ways-to-increase-engagement-in-virtual-events-6",
    title: "5 Ways to Increase Engagement in Virtual Events",
    excerpt: "Seamlessly embed the launch stream across partner networks & media.",
    category: "PRODUCT LAUNCHES",
    readTime: "4 min read",
    date: "Jun 12, 2026",
    image: "/boardroom.webp",
  },
  {
    id: "8",
    slug: "5-ways-to-increase-engagement-in-virtual-events-7",
    title: "5 Ways to Increase Engagement in Virtual Events",
    excerpt: "VIP embargo previews, press keynotes, and public livestream tiers.",
    category: "PRODUCT LAUNCHES",
    readTime: "4 min read",
    date: "Jun 12, 2026",
    image: "/boardroom3.webp",
  },
  {
    id: "9",
    slug: "5-ways-to-increase-engagement-in-virtual-events-8",
    title: "5 Ways to Increase Engagement in Virtual Events",
    excerpt: "Powering shareholder meetings, AGMs, and enterprise events.",
    category: "PRODUCT LAUNCHES",
    readTime: "4 min read",
    date: "Jun 12, 2026",
    image: "/hackathon_real_1.webp",
  },
];
