type VideoEmbedProps = {
  url: string;
  title: string;
};

function getYouTubeVideoId(url: URL) {
  if (url.hostname === "youtu.be") {
    return url.pathname.split("/").filter(Boolean)[0];
  }

  if (url.hostname === "youtube.com" || url.hostname.endsWith(".youtube.com")) {
    if (url.pathname === "/watch") {
      return url.searchParams.get("v") ?? undefined;
    }

    const [, kind, id] = url.pathname.split("/");
    if (["embed", "shorts", "live"].includes(kind)) {
      return id;
    }
  }
}

function getVideoEmbed(urlString: string) {
  try {
    const url = new URL(urlString);
    const youtubeId = getYouTubeVideoId(url);

    if (youtubeId && /^[a-zA-Z0-9_-]+$/.test(youtubeId)) {
      return {
        src: `https://www.youtube-nocookie.com/embed/${youtubeId}`,
        platform: "YouTube",
      };
    }

    if (url.hostname === "share.descript.com") {
      const [, kind, id] = url.pathname.split("/");

      if (["view", "embed"].includes(kind) && /^[a-zA-Z0-9_-]+$/.test(id)) {
        return {
          src: `https://share.descript.com/embed/${id}`,
          platform: "Descript",
        };
      }
    }
  } catch {
    return null;
  }

  return null;
}

export function VideoEmbed({ url, title }: VideoEmbedProps) {
  const embed = getVideoEmbed(url);

  if (!embed) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 p-6 text-center">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
        >
          Watch {title}
        </a>
      </div>
    );
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg bg-neutral-950 shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
      <iframe
        src={embed.src}
        title={`${title} on ${embed.platform}`}
        className="absolute inset-0 size-full border-0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
