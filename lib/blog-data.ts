export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  isoDate: string;
  readTime: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-i-want-to-write-about-here",
    title: "What I want to write about here",
    excerpt:
      "A home for practical notes from building fullstack products, AI systems, developer tools, and software that has to work beyond the demo.",
    category: "Notes",
    publishedAt: "October 4, 2026",
    isoDate: "2026-10-04",
    readTime: "3 min read",
    sections: [
      {
        heading: "Working notes, not polished theory",
        paragraphs: [
          "This blog is where I will write down the lessons that are easiest to lose between shipping one feature and starting the next. I want it to be practical: what I tried, what broke, what changed my mind, and what I would do differently the next time.",
          "Most posts will begin with real engineering work. That might be a compiler experiment, a healthcare workflow, an AI integration, or a small interface detail that took more thought than its final shape suggests.",
        ],
      },
      {
        heading: "The subjects I keep returning to",
        paragraphs: [
          "My work moves between product surfaces and the systems underneath them, so the writing here will do the same.",
        ],
        bullets: [
          "Go, TypeScript, React, and Next.js in production",
          "AI agents, retrieval pipelines, and useful product integrations",
          "Healthcare flows, permissions, payments, and protected data",
          "Compilers, developer tools, and learning by building",
          "Interface decisions that make complicated systems feel clear",
        ],
      },
      {
        heading: "Why write in public",
        paragraphs: [
          "Writing forces an idea to become more precise. It exposes the gaps that are easy to miss when something only exists in code or in my head. If a post helps another builder avoid a dead end—or gives us something worth disagreeing about—it has done its job.",
          "This is the first note. More will follow as the work does.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
