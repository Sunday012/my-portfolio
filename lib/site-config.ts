export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://favoursunday.dev"
).replace(/\/$/, "");

export const siteName = "Favour Sunday";

export const siteDescription =
  "Favour Sunday is a software engineer in Lagos, Nigeria, building fullstack products, AI systems, healthcare software, developer tools, and polished web interfaces.";

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}
