import slugify from "slugify";

export const slugifyString = (str, date) => {
  const slug = slugify(str);
  return `${slug}-${date.split("T").slice(0, 1)}`;
};
