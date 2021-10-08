import slugify from "slugify";
import { getDate } from "./date";

export const slugifyString = (str, datetime) => {
  const slug = slugify(str);
  if (datetime) {
    return `${slug}-${getDate(datetime)}`;
  } else {
    return slug;
  }
};
