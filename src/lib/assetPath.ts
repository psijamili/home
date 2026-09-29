export function assetPath(path: string): string {
  if (!path || /^(https?:|mailto:|tel:|#)/.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.replace(/^\/+/, "")}`;
}
