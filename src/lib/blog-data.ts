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

/** Desktop page 1 = 1 featured + 4 grid cards; later pages use the same count. */
export const BLOG_POSTS_PER_PAGE = 5;

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
