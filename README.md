This is Favour Sunday's portfolio, built with Next.js.

## Private blog editor

The public blog works from the articles in `lib/blog-data.ts` without any
external service. A Supabase-backed editor is available at `/admin/blog` once
it is configured:

1. Create a Supabase project.
2. Run `supabase/migrations/20261005000000_create_blog_posts.sql` in the
   Supabase SQL editor.
3. In Supabase Authentication, create the email/password user
   `sundayfavour997@gmail.com`. Disable public sign-ups because this editor is
   private.
4. Copy `.env.example` to `.env.local` and add the project's URL and
   publishable key. Add the same values to the deployed site's environment.

Published database articles appear on the public blog. Drafts and all write
operations are protected by row-level security and are available only to the
configured admin email.

## Search indexing

The production canonical URL is `https://favoursunday.dev`. After deploying,
add that domain to Google Search Console, submit
`https://favoursunday.dev/sitemap.xml`, and optionally add the supplied Google
verification token as `GOOGLE_SITE_VERIFICATION` in the deployment environment.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
