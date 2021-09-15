const titleToLabel = (title) => title.toLowerCase().replace(" ", "-").replace("&", "").replace(" ", "");
const joinTags = (tags) => (tags || []).join(";");
const splitTags = (tags) => tags.split(";").filter((item) => !!item);
export { joinTags, splitTags, titleToLabel };
