export const titleToLabel = (title) => title.toLowerCase().replace(" ", "-").replace("&", "").replace(" ", "");

export const joinTags = (tags) => (tags || []).join(";");

export const splitTags = (tags) => tags.split(";").filter((item) => !!item);
