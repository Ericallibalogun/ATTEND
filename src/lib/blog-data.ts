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
