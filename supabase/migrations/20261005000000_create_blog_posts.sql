create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  title text not null check (char_length(title) between 1 and 180),
  excerpt text not null check (char_length(excerpt) between 1 and 600),
  category text not null check (char_length(category) between 1 and 80),
  published_at date not null default current_date,
  read_time text not null check (char_length(read_time) between 1 and 40),
  image_src text check (image_src is null or image_src like '/%'),
  image_alt text,
  sections jsonb not null check (jsonb_typeof(sections) = 'array'),
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint image_alt_with_image check (
    (image_src is null and image_alt is null)
    or (image_src is not null and nullif(trim(image_alt), '') is not null)
  )
);

alter table public.blog_posts enable row level security;

create or replace function public.set_blog_post_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_blog_post_updated_at on public.blog_posts;
create trigger set_blog_post_updated_at
before update on public.blog_posts
for each row execute function public.set_blog_post_updated_at();

drop policy if exists "Published posts are public" on public.blog_posts;
create policy "Published posts are public"
on public.blog_posts
for select
using (
  published
  or lower(coalesce((select auth.jwt() ->> 'email'), '')) = 'sundayfavour997@gmail.com'
);

drop policy if exists "Only Favour can create posts" on public.blog_posts;
create policy "Only Favour can create posts"
on public.blog_posts
for insert
to authenticated
with check (
  lower(coalesce((select auth.jwt() ->> 'email'), '')) = 'sundayfavour997@gmail.com'
);

drop policy if exists "Only Favour can update posts" on public.blog_posts;
create policy "Only Favour can update posts"
on public.blog_posts
for update
to authenticated
using (
  lower(coalesce((select auth.jwt() ->> 'email'), '')) = 'sundayfavour997@gmail.com'
)
with check (
  lower(coalesce((select auth.jwt() ->> 'email'), '')) = 'sundayfavour997@gmail.com'
);

drop policy if exists "Only Favour can delete posts" on public.blog_posts;
create policy "Only Favour can delete posts"
on public.blog_posts
for delete
to authenticated
using (
  lower(coalesce((select auth.jwt() ->> 'email'), '')) = 'sundayfavour997@gmail.com'
);

grant select on public.blog_posts to anon, authenticated;
grant insert, update, delete on public.blog_posts to authenticated;

-- The public site uses this limited view to let a database draft hide an older
-- file-based article without exposing any of the draft's title or content.
create or replace view public.blog_post_statuses
with (security_invoker = false)
as
select slug, published
from public.blog_posts;

revoke all on public.blog_post_statuses from public;
grant select on public.blog_post_statuses to anon, authenticated;
