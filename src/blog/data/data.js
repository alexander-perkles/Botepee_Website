const files = import.meta.glob("../../blogdata/*.json", {
  eager: true,
  import: "default",
});

function slugFromPath(path) {
  return path.split("/").pop().replace(/\.json$/, "");
}

function normalize(data, slug) {
  const post = {
    slug,
    title: data?.title ?? slug,
    date: data?.date ?? "1970-01-01",
    tags: Array.isArray(data?.tags) ? data.tags : [],
    excerpt: data?.excerpt ?? "",
    contentHtml: data?.contentHtml ?? "<p>(Kein Inhalt)</p>",
    draft: data?.draft === true,
  };
  return post;
}

export function getAllPosts() {
  const posts = Object.entries(files).map(([path, json]) =>
    normalize(json, slugFromPath(path))
  );
  const visible = posts.filter((p) => !p.draft);
  return visible.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug) {
  const match = Object.entries(files).find(([path]) => slugFromPath(path) === slug);
  if (!match) return null;
  const [, json] = match;
  return normalize(json, slug);
}