"use client";

import { useState } from "react";
import type { BlogPost, BlogSection } from "@/lib/blog-data";
import { saveBlogPost } from "@/app/admin/blog/actions";

const emptySection: BlogSection = {
  heading: "",
  paragraphs: [""],
  bullets: [],
};

type BlogPostEditorProps = {
  post?: BlogPost;
  error?: string;
};

export function BlogPostEditor({ post, error }: BlogPostEditorProps) {
  const [sections, setSections] = useState<BlogSection[]>(
    post?.sections.length ? post.sections : [{ ...emptySection }],
  );

  function updateSection(index: number, nextSection: BlogSection) {
    setSections((current) =>
      current.map((section, sectionIndex) =>
        sectionIndex === index ? nextSection : section,
      ),
    );
  }

  return (
    <form action={saveBlogPost} className="space-y-10">
      {error ? (
        <p className="border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error === "save"
            ? "The article could not be saved. Check your Supabase setup and try again."
            : "Check the highlighted content. Every article needs valid details and at least one section."}
        </p>
      ) : null}

      <input type="hidden" name="sections" value={JSON.stringify(sections)} />

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="sm:col-span-2">
          <span className="text-sm font-semibold">Title</span>
          <input
            name="title"
            defaultValue={post?.title}
            required
            className="mt-2 w-full border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-950"
          />
        </label>
        <label>
          <span className="text-sm font-semibold">Slug</span>
          <input
            name="slug"
            defaultValue={post?.slug}
            readOnly={Boolean(post)}
            pattern="[a-z0-9]+(?:-[a-z0-9]+)*"
            placeholder="my-article-title"
            required
            className="mt-2 w-full border border-neutral-300 px-4 py-3 outline-none read-only:bg-neutral-100 focus:border-neutral-950"
          />
        </label>
        <label>
          <span className="text-sm font-semibold">Category</span>
          <input
            name="category"
            defaultValue={post?.category}
            required
            className="mt-2 w-full border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-950"
          />
        </label>
        <label className="sm:col-span-2">
          <span className="text-sm font-semibold">Excerpt</span>
          <textarea
            name="excerpt"
            defaultValue={post?.excerpt}
            rows={3}
            required
            className="mt-2 w-full resize-y border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-950"
          />
        </label>
        <label>
          <span className="text-sm font-semibold">Publish date</span>
          <input
            type="date"
            name="publishedAt"
            defaultValue={post?.isoDate ?? new Date().toISOString().slice(0, 10)}
            required
            className="mt-2 w-full border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-950"
          />
        </label>
        <label>
          <span className="text-sm font-semibold">Read time</span>
          <input
            name="readTime"
            defaultValue={post?.readTime}
            placeholder="5 min read"
            required
            className="mt-2 w-full border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-950"
          />
        </label>
        <label>
          <span className="text-sm font-semibold">Cover image path</span>
          <input
            name="imageSrc"
            defaultValue={post?.image?.src}
            placeholder="/blog/cover.png"
            className="mt-2 w-full border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-950"
          />
        </label>
        <label>
          <span className="text-sm font-semibold">Image description</span>
          <input
            name="imageAlt"
            defaultValue={post?.image?.alt}
            className="mt-2 w-full border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-950"
          />
        </label>
      </div>

      <div className="space-y-6">
        <div className="flex items-end justify-between gap-4 border-b border-neutral-300 pb-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">
              Article body
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Sections</h2>
          </div>
          <button
            type="button"
            onClick={() => setSections((current) => [...current, { ...emptySection }])}
            className="border border-neutral-950 px-4 py-2 text-sm font-semibold hover:bg-neutral-950 hover:text-white"
          >
            Add section
          </button>
        </div>

        {sections.map((section, index) => (
          <fieldset key={index} className="border border-neutral-300 p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <legend className="px-2 text-sm font-semibold">
                Section {index + 1}
              </legend>
              {sections.length > 1 ? (
                <button
                  type="button"
                  onClick={() =>
                    setSections((current) =>
                      current.filter((_, sectionIndex) => sectionIndex !== index),
                    )
                  }
                  className="text-sm underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
                >
                  Remove
                </button>
              ) : null}
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-semibold">Heading</span>
              <input
                value={section.heading}
                onChange={(event) =>
                  updateSection(index, { ...section, heading: event.target.value })
                }
                required
                className="mt-2 w-full border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-950"
              />
            </label>
            <label className="mt-5 block">
              <span className="text-sm font-semibold">Paragraphs</span>
              <span className="ml-2 text-xs text-neutral-500">
                Separate paragraphs with a blank line.
              </span>
              <textarea
                value={section.paragraphs.join("\n\n")}
                onChange={(event) =>
                  updateSection(index, {
                    ...section,
                    paragraphs: event.target.value
                      .split(/\n\s*\n/)
                      .map((paragraph) => paragraph.trim()),
                  })
                }
                rows={8}
                required
                className="mt-2 w-full resize-y border border-neutral-300 px-4 py-3 leading-7 outline-none focus:border-neutral-950"
              />
            </label>
            <label className="mt-5 block">
              <span className="text-sm font-semibold">Bullets</span>
              <span className="ml-2 text-xs text-neutral-500">
                Optional, one item per line.
              </span>
              <textarea
                value={(section.bullets ?? []).join("\n")}
                onChange={(event) =>
                  updateSection(index, {
                    ...section,
                    bullets: event.target.value
                      .split("\n")
                      .map((bullet) => bullet.trim())
                      .filter(Boolean),
                  })
                }
                rows={4}
                className="mt-2 w-full resize-y border border-neutral-300 px-4 py-3 leading-7 outline-none focus:border-neutral-950"
              />
            </label>
          </fieldset>
        ))}
      </div>

      <div className="flex flex-col gap-5 border-t border-neutral-300 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-center gap-3 text-sm font-semibold">
          <input
            type="checkbox"
            name="published"
            defaultChecked={post?.published !== false}
            className="size-4 accent-neutral-950"
          />
          Publish this article
        </label>
        <button
          type="submit"
          className="bg-neutral-950 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Save article
        </button>
      </div>
    </form>
  );
}
