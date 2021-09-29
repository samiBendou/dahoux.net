export const titleToLabel = (title) => title.toLowerCase().replace(" ", "-").replace("&", "").replace(" ", "");

export const joinTags = (tags) => (tags || []).join(";");

export const splitTags = (tags) =>
  tags
    .split(";")
    .map(String.prototype.trim)
    .filter((item) => !!item);
